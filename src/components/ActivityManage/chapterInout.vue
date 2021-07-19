<template>
  <div id="chapterInout">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto">
                  <h4 class="page-title">导入/导出章</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/chapterinout"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动章模块</li>
                        <li class="breadcrumb-item active" aria-current="page">导入/导出章</li>
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
                    <!-- eslint-disable-next-line -->
                    <template slot="header" slot-scope="scope">
                      <div style="display: flex;flex-direction: row;justify-content: space-between">
                        <el-input
                          v-model="search_account"
                          scope
                          style="width: 15%"
                          size="mini"
                          placeholder="按照负责人学号搜索"/>
                        <el-input
                          v-model="search_activename"
                          scope
                          style="width: 15%"
                          size="mini"
                          placeholder="按照活动名称搜索"/>
                        <el-input
                          v-model="search_organization"
                          scope
                          style="width: 20%"
                          size="mini"
                          placeholder="按照举办单位搜索"/>
                        <el-date-picker
                          v-model="search_activeDate"
                          :default-time="['12:00:00']"
                          style="width: 25%"
                          size="mini"
                          type="datetimerange"
                          start-placeholder="搜索扫章开始时间"
                          end-placeholder="扫章结束时间内"/>
                        <button type="button" class="btn btn-sm btn-primary waves-effect waves-light m-1" @click="reset">重置</button>
                      </div>
                    </template>
                    <el-table-column
                      label="负责人"
                      prop="account"
                      width="100">
                      <template slot-scope="scope">
                        {{ scope.row.account }}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="活动名称"
                      prop="activename">
                      <template slot-scope="scope">
                        {{ scope.row.activename }}
                        <span class="badge badge-dark" style="margin-left: 5px">{{ scope.row.type }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="举办单位"
                      prop="organization"
                      width="140">
                      <template slot-scope="scope">
                        {{ scope.row.organization }}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="活动地点"
                      prop="place"
                      width="100">
                      <template slot-scope="scope">
                        {{ scope.row.place }}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="扫章时间"
                      prop="time"
                      width="180">
                      <template slot-scope="scope">
                        {{ scope.row.time }}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="申请章数"
                      prop="action"
                      width="100">
                      <!-- eslint-disable-next-line -->
                      <template slot-scope="scope">
                        {{ scope.row.requestnum }}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="导入/导出名单"
                      prop="action"
                      width="150">
                      <!-- eslint-disable-next-line -->
                      <template slot-scope="scope">
                        <button type="button" class="btn btn-sm btn-success waves-effect waves-light m-1" @click="dialogchapers = true">导入</button>
                        <button type="button" class="btn btn-sm btn-success btn-outline waves-effect waves-light m-1">导出</button>
                      </template>
                    </el-table-column>
                  </el-table-column>
                </el-table>

                <div class="block" style="margin-top:30px;float: right">
                  <el-pagination
                    :current-page="currentPage"
                    :page-sizes="[10,20,50]"
                    :page-size="pageSize"
                    :total="activeData_length"
                    align="center"
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"/>
                </div>
              </div>
            </section>
            <!-- /.content -->
          </div>
        </div>

        <el-dialog :visible.sync="dialogchapers" :show-close="false" title="Excel批量导章" width="30%">
          <div style="display: flex;justify-content: center">
            <el-upload
              ref="upload"
              :limit="1"
              :on-preview="handlePreview"
              :on-change="handleChange"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :show-file-list="fileList"
              :auto-upload="false"
              class="upload-demo"
              action="#"
              multiple
              accept=".xls,.xlsx"
              drag>
              <i class="el-icon-upload"/>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div slot="tip" class="el-upload__tip">只能上传一个.xls,.xlsx文件，且不超过10mb<br><b style="color: red">*</b>
                文件格式规定如下：<br>
                <img src="../../assets/images/model.png" alt="">
              </div>
            </el-upload>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="clearFiles">取 消</el-button>
            <el-button style="margin-left: 10px;" size="small" type="primary" plain @click="submitUpload">上传到服务器</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'ChapterInout',
  data() {
    return {
      search_account: '',
      search_activename: '',
      search_organization: '',
      search_activeDate: '',
      search_activeDateBegin: '',
      search_activeDateEnd: '',
      dialogchapers: false,
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      activeData_length: 0, // 总条目数
      pageSize: 10, // 每页的数据条数
      authority: true,
      activeData: [
        {
          account: '199050702',
          activename: 'XXXXXX志愿活动',
          type: '志愿活动',
          organization: '社团联',
          place: 'C楼511',
          time: '2021.7.16 12:00 ~ 13:00',
          requestnum: 512
        },
        {
          account: '199050702',
          activename: 'XXXXXX志愿活动',
          type: '志愿活动',
          organization: '社团联',
          place: 'C楼511',
          time: '2021.7.16 12:00 ~ 13:00',
          requestnum: 512
        }
      ]
    }
  },
  watch: {
    // watch监视input输入值的变化,只要是watch变化了 search()就会被调用
    search_account(newVal) {
      this.handleSearch_account(newVal)
    },
    search_activename(newVal) {
      this.handleSearch_activename(newVal)
    },
    search_organization(newVal) {
      this.handleSearch_organization(newVal)
    },
    search_activeDate(newVal) {
      this.handleSearch_activeDate(newVal)
    }
  },
  methods: {
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    reset() {
      this.search_account = ''
      this.search_activename = ''
      this.search_organization = ''
      this.search_activeDate = ''
      this.search_activeDateBegin = ''
      this.search_activeDateEnd = ''
      request.message(this, '重置成功', 'success')
    },
    handleSearch_account(val) {
      const search = val
      this.search_account = search
      this.currentPage = 1
    },
    handleSearch_activename(val) {
      const search = val
      this.search_activename = search
      this.currentPage = 1
    },
    handleSearch_organization(val) {
      const search = val
      this.search_organization = search
      this.currentPage = 1
    },
    handleSearch_activeDate(val) {
      const _this = this
      console.log(val)
      if (val === null || val === '') {
        _this.search_activeDate = ''
        _this.search_activeDateBegin = ''
        _this.search_activeDateEnd = ''
      } else {
        const search1 = _this.formateTime(val[0])
        const search2 = _this.formateTime(val[1])
        console.log(search1)
        console.log(search2)
        _this.search_activeDateBegin = search1
        _this.search_activeDateEnd = search2
        _this.currentPage = 1
      }
    },
    clearFiles() {
      this.dialogchapers = false
    }
    // submitUpload() {
    //   let _this = this
    //   // const loading = _this.$loading({
    //   //   lock: true,
    //   //   text: '操作执行中，请稍后',
    //   //   spinner: 'el-icon-loading',
    //   //   background: 'rgba(0, 0, 0, 0.7)'
    //   // });
    //   request.openFullScreen(_this);
    //   if (_this.fileList.length === 0) {
    //     request.message(_this, '请先选择文件', 'warning');
    //     request.closeFullScreen(request.openFullScreen(_this));
    //   } else {
    //     const isLt10240K = _this.fileList.every(file => file.size / 1024 / 1024 / 1024 < 10240);
    //     if (!isLt10240K) {
    //       request.message(_this, '请检查，上传文件大小不能超过10MB!', 'error');
    //       request.closeFullScreen(request.openFullScreen(_this));
    //     } else {
    //       var formData = new FormData(); //  用FormData存放上传文件
    //       _this.fileList.forEach(file => {
    //         formData.append('file', file.raw, file.raw.name);
    //       })
    //       //向webapi发起请求，等待后台接收
    //       request.$postFileList('/user/user/import', formData, {},(res) => {
    //         console.log(res.data.data)
    //         setTimeout(() => {
    //           request.closeFullScreen(request.openFullScreen(_this));
    //           _this.reload();
    //           request.message(_this, '导入成功!', 'success');
    //           _this.fileList = [];
    //           _this.dialogusers = false;
    //         }, 1000);
    //       }, _this);
    //       setTimeout(() => {
    //         loading.close();
    //       }, 2000);
    //     }
    //   }
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
    // //移除
    // handleRemove(file, fileList) {
    //   this.fileList = fileList;
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${ file.name }？`);
    // },
    // // 选取文件超过数量提示
    // handleExceed(files, fileList) {
    //   this.$message.warning(`当前限制选择1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    // },
    // //监控上传文件列表
    // handleChange(file, fileList) {
    //   let existFile = fileList.slice(0, fileList.length - 1).find(f => f.name === file.name);
    //   if (existFile) {
    //     this.$message.error('当前文件已经存在!');
    //     fileList.pop();
    //   }
    //   this.fileList = fileList;
    // },
  }
}
</script>

<style scoped>

</style>
