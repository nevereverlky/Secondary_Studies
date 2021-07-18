<template>
  <div id="Authorization">
    <div class="hold-transition light-skin sidebar-mini theme-primary">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto">
                  <h4 class="page-title">权限分配</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/authorization"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动模块</li>
                        <li class="breadcrumb-item active" aria-current="page">权限分配</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <section class="content">
              <div>
                <!--finalShow.slice((currentPage-1)*pageSize,currentPage*pageSize)-->
                <el-table
                  :data="activeData"
                  :header-cell-style="{color: 'black', fontSize: '13px'}"
                  style="width: 100%"
                  cell-style="font-size: 13px">
                  <el-table-column>
                    <template slot="header">
                      <div style="display: flex;flex-direction: row;justify-content: space-between">
                        <el-input
                          scope
                          style="width: 15%"
                          v-model="search_account"
                          size="mini"
                          placeholder="按照负责人学号搜索"></el-input>
                        <el-input
                          scope
                          style="width: 15%"
                          v-model="search_activename"
                          size="mini"
                          placeholder="按照活动名称搜索"></el-input>
                        <el-input
                          scope
                          style="width: 20%"
                          v-model="search_organization"
                          size="mini"
                          placeholder="按照举办单位搜索"></el-input>
                        <el-date-picker
                          v-model="search_activeDate"
                          style="width: 25%"
                          size="mini"
                          type="datetimerange"
                          start-placeholder="搜索扫章开始时间"
                          end-placeholder="扫章结束时间内"
                          :default-time="['12:00:00']"></el-date-picker>
                        <button type="button" class="btn btn-sm btn-primary waves-effect waves-light m-1" @click="reset">重置</button>
                      </div>
                    </template>
                    <el-table-column
                      label="负责人"
                      prop="account"
                      width="100">
                      <template slot-scope="scope">
                        {{scope.row.account}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="活动名称"
                      prop="activename">
                      <template slot-scope="scope">
                        {{scope.row.activename}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="举办单位"
                      prop="organization"
                      width="140">
                      <template slot-scope="scope">
                        {{scope.row.organization}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="活动地点"
                      prop="place"
                      width="100">
                      <template slot-scope="scope">
                        {{scope.row.place}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="扫章时间"
                      prop="time"
                      width="180">
                      <template slot-scope="scope">
                        {{scope.row.time}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="开放导章权限"
                      prop="action"
                      width="100">
                      <template>
                        <el-switch
                          v-model="authority"
                          active-color="#1bc5bd"
                          inactive-color="#eeeeee">
                        </el-switch>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="操作"
                      prop="action"
                      width="100">
                      <template>
                        <button type="button" class="btn btn-sm btn-primary waves-effect waves-light m-1">修改</button>
                      </template>
                    </el-table-column>
                  </el-table-column>
                </el-table>

                <div class="block" style="margin-top:30px;float: right">
                  <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                 :current-page="currentPage"
                                 :page-sizes="[10,20,50]"
                                 :page-size="pageSize"
                                 layout="total, sizes, prev, pager, next, jumper"
                                 :total="activeData_length">
                  </el-pagination>
                </div>
              </div>
            </section>
            <!-- /.content -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'Authorization',
  data () {
    return {
      search_account: '',
      search_activename: '',
      search_organization: '',
      search_place: '',
      search_activeDate: '',
      search_activeDateBegin: '',
      search_activeDateEnd: '',
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      activeData_length: 0, // 总条目数
      pageSize: 10, // 每页的数据条数
      authority: true,
      activeData: [
        {
          account: '199050702',
          activename: 'XXXXXX志愿活动',
          organization: '社团联',
          place: 'C楼511',
          time: '2021.7.16 12:00 ~ 13:00'
        }
      ]
    }
  },
  methods: {
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    reset () {
      this.search_account = ''
      this.search_activename = ''
      this.search_organization = ''
      this.search_activeDate = ''
      this.search_activeDateBegin = ''
      this.search_activeDateEnd = ''
      request.message(this, '重置成功', 'success')
    },
    handleSearch_account (val) {
      let search = val
      this.search_account = search
      this.currentPage = 1
    },
    handleSearch_activename (val) {
      let search = val
      this.search_activename = search
      this.currentPage = 1
    },
    handleSearch_organization (val) {
      let search = val
      this.search_organization = search
      this.currentPage = 1
    },
    handleSearch_activeDate (val) {
      let _this = this
      console.log(val)
      if (val === null || val === '') {
        _this.search_activeDate = ''
        _this.search_activeDateBegin = ''
        _this.search_activeDateEnd = ''
      } else {
        let search1 = _this.formateTime(val[0])
        let search2 = _this.formateTime(val[1])
        console.log(search1)
        console.log(search2)
        _this.search_activeDateBegin = search1
        _this.search_activeDateEnd = search2
        _this.currentPage = 1
      }
    }
  },
  watch: {
    // watch监视input输入值的变化,只要是watch变化了 search()就会被调用
    search_account (newVal) {
      this.handleSearch_account(newVal)
    },
    search_activename (newVal) {
      this.handleSearch_activename(newVal)
    },
    search_organization (newVal) {
      this.handleSearch_organization(newVal)
    },
    search_activeDate (newVal) {
      this.handleSearch_activeDate(newVal)
    }
  }
}
</script>

<style scoped>

</style>
