<template>
  <div id="activityInquiry">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto col-sm-7">
                  <h4 class="page-title">活动查询与创建</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/activityinquiry"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动模块</li>
                        <li class="breadcrumb-item active" aria-current="page">活动查询与创建</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="btn-group float-sm-right">
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light" @click="addFormVisible = true"><i class="fa fa-plus-square mr-1"/>创建活动</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <section class="content">
              <div class="col-12">
                <div class="box box-default">
                  <!--<div class="box-header with-border">-->
                  <!--<h5 class="box-title">活动审批状态</h5>-->
                  <!--</div>-->
                  <!-- /.box-header -->
                  <div class="box-body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-pills justify-content-start mb-20">
                      <li class="nav-item"><a href="#navpills2-1" class="nav-link active" data-toggle="tab" aria-expanded="false">审批已通过</a> </li>
                      <li class="nav-item"><a href="#navpills2-2" class="nav-link" data-toggle="tab" aria-expanded="false">审批未通过</a> </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div id="navpills2-1" class="tab-pane active">
                        <div class="row">
                          <div class="col-md-9">
                            <el-timeline>
                              <el-timeline-item timestamp="2018/4/12 12:00:00" placement="top">
                                <div class="box bl-3 border-secondary">
                                  <div class="box-body" style="display: flex">
                                    <div style="flex: 1">
                                      <p><b>活动名称</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田径运动会开幕式活动<span class="badge badge-default" style="margin-left: 10px">志愿活动</span></p>
                                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                                    </div>
                                    <div style="flex: 1">
                                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-primary">512</span></p>
                                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                                    </div>
                                  </div>
                                </div>
                              </el-timeline-item>
                              <el-timeline-item timestamp="2018/4/3 12:00:00" placement="top">
                                <div class="box bl-3 border-secondary">
                                  <div class="box-body" style="display: flex">
                                    <div style="flex: 1">
                                      <p><b>活动名称</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田径运动会开幕式活动<span class="badge badge-default" style="margin-left: 10px">志愿活动</span></p>
                                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                                    </div>
                                    <div style="flex: 1">
                                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-primary">512</span></p>
                                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                                    </div>
                                  </div>
                                </div>
                              </el-timeline-item>
                            </el-timeline>
                          </div>
                        </div>
                      </div>
                      <div id="navpills2-2" class="tab-pane">
                        <div class="row">
                          <div class="col-md-9">
                            <el-timeline>
                              <el-timeline-item timestamp="2018/4/12 12:00:00" placement="top">
                                <div class="box bl-3 border-secondary">
                                  <div class="box-body" style="display: flex">
                                    <div style="flex: 1">
                                      <p><b>活动名称</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田径运动会开幕式活动<span class="badge badge-default" style="margin-left: 10px">志愿活动</span></p>
                                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                                    </div>
                                    <div style="flex: 1">
                                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-primary">512</span></p>
                                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                                    </div>
                                  </div>
                                  <div class="box-footer text-right p-0">
                                    <div class="px-25 py-5 w-100" style="float:left"><span class="badge badge-success">待审批</span></div>
                                    <el-tooltip class="item" effect="dark" content="仅可修改一次" placement="bottom">
                                      <button class="btn btn-outline btn-success btn-sm" @click="editFormVisible = true"><i class="fa fa-pencil"/></button>
                                    </el-tooltip>
                                  </div>
                                </div>
                              </el-timeline-item>
                              <el-timeline-item timestamp="2018/4/3 12:00:00" placement="top">
                                <div class="box bl-3 border-secondary">
                                  <div class="box-body" style="display: flex">
                                    <div style="flex: 1">
                                      <p><b>活动名称</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;田径运动会开幕式活动<span class="badge badge-default" style="margin-left: 10px">志愿活动</span></p>
                                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                                    </div>
                                    <div style="flex: 1">
                                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-primary">512</span></p>
                                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                                    </div>
                                  </div>
                                  <div class="box-footer text-right p-0">
                                    <div class="px-25 py-5 w-100" style="float:left">
                                      <span class="badge badge-warning">已驳回</span>
                                    </div>
                                    <div class="px-25 py-5 w-400" style="float:left">
                                      驳回原因驳回原因驳回原因驳回原因
                                    </div>
                                    <button class="btn btn-outline btn-warning btn-sm"><i class="fa fa-pencil"/></button>
                                  </div>
                                </div>
                              </el-timeline-item>
                            </el-timeline>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- /.box -->
              </div>
            </section>
            <!-- /.content -->
          </div>
        </div>

        <el-dialog :visible.sync="addFormVisible" title="创建活动" width="60%">

          <el-form :model="form" size="small">
            <div style="display:flex">
              <div style="flex:1">
                <el-form-item :label-width="formLabelWidth" label="活动名称">
                  <el-input v-model="form.activename" autocomplete="off"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="举办单位">
                  <el-select v-model="form.organization" placeholder="请选择活动主办方">
                    <el-option label="计算机系学生会" value="shanghai"/>
                    <el-option label="β-house工作室" value="beijing"/>
                  </el-select>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动地点">
                  <el-input v-model="form.place" autocomplete="off"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动类型">
                  <el-select v-model="form.type" placeholder="请选择活动类型">
                    <el-option label="校园活动" value="shanghai"/>
                    <el-option label="志愿活动" value="beijing"/>
                    <el-option label="实践活动" value="beijing"/>
                    <el-option label="讲座活动" value="beijing"/>
                  </el-select>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动学期">
                  <el-select v-model="form.term" placeholder="请选择活动学期">
                    <el-option label="2020-2021第一学期" value="shanghai"/>
                    <el-option label="2020-2021第二学期" value="beijing"/>
                    <el-option label="2021-2022第一学期" value="beijing"/>
                    <el-option label="2021-2022第二学期" value="beijing"/>
                    <el-option label="2022-2023第一学期" value="beijing"/>
                    <el-option label="2022-2023第二学期" value="beijing"/>
                  </el-select>
                </el-form-item>
              </div>
              <div style="flex:1">
                <el-form-item :label-width="formLabelWidth" label="扫章时间">
                  <el-date-picker
                    v-model="form.timevalue"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="申请章数">
                  <el-input-number v-model="form.requestnum" :min="1" :max="1000" size="small" label="描述文字" @change="handleChange"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="钉钉截图">
                  <el-upload
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                    class="upload-demo"
                    action=""
                    multiple>
                    <el-button size="small" type="primary" plain>点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" size="small" @click="addFormVisible = false">确认创建</el-button>
          </div>

        </el-dialog>

        <el-dialog :visible.sync="editFormVisible" title="修改申请" width="60%">

          <el-form :model="form" size="small">
            <div style="display:flex">
              <div style="flex:1">
                <el-form-item :label-width="formLabelWidth" label="活动名称">
                  <el-input v-model="form.activename" autocomplete="off"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="举办单位">
                  <el-select v-model="form.organization" placeholder="请选择活动主办方">
                    <el-option label="计算机系学生会" value="shanghai"/>
                    <el-option label="β-house工作室" value="beijing"/>
                  </el-select>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动地点">
                  <el-input v-model="form.place" autocomplete="off"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动类型">
                  <el-select v-model="form.type" placeholder="请选择活动类型">
                    <el-option label="校园活动" value="shanghai"/>
                    <el-option label="志愿活动" value="beijing"/>
                    <el-option label="实践活动" value="beijing"/>
                    <el-option label="讲座活动" value="beijing"/>
                  </el-select>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="活动学期">
                  <el-select v-model="form.term" placeholder="请选择活动学期">
                    <el-option label="2020-2021第一学期" value="shanghai"/>
                    <el-option label="2020-2021第二学期" value="beijing"/>
                    <el-option label="2021-2022第一学期" value="beijing"/>
                    <el-option label="2021-2022第二学期" value="beijing"/>
                    <el-option label="2022-2023第一学期" value="beijing"/>
                    <el-option label="2022-2023第二学期" value="beijing"/>
                  </el-select>
                </el-form-item>
              </div>
              <div style="flex:1">
                <el-form-item :label-width="formLabelWidth" label="扫章时间">
                  <el-date-picker
                    v-model="form.timevalue"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="申请章数">
                  <el-input-number v-model="form.requestnum" :min="1" :max="1000" size="small" label="描述文字" @change="handleChange"/>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth" label="钉钉截图">
                  <el-upload
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                    class="upload-demo"
                    action=""
                    multiple>
                    <el-button size="small" type="primary" plain>点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="editFormVisible = false">取 消</el-button>
            <el-button type="primary" size="small" @click="editFormVisible = false">重新提交</el-button>
          </div>

        </el-dialog>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityInquiry',
  data() {
    return {
      formLabelWidth: '80px',
      addFormVisible: false,
      editFormVisible: false,
      form: {
        activename: '',
        organization: '',
        place: '',
        type: '',
        term: '',
        timevalue: [new Date(), new Date()],
        requestnum: '',
        fileList: [{ name: 'food.jpeg', url: '' }]
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>

</style>
