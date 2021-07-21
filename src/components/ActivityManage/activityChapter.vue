<template>
  <div id="activityChapter">
    <div class="hold-transition light-skin sidebar-mini theme-primary">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto">
                  <h4 class="page-title">导入章</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/activitychapter"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动章模块</li>
                        <li class="breadcrumb-item active" aria-current="page">导入章</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <section class="content">
              <div class="col-12" style="display: flex">
                <div class="col-md-4">
                  <div class="box box-solid bg-primary">
                    <div class="box-header">
                      <h6 class="box-title"><strong>第三届田径运动会开幕式活动礼仪</strong></h6>

                    </div>
                    <div class="box-body">
                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学生社团联合会</p>
                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-success">512</span></p>
                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                      <center><el-tooltip class="item" effect="dark" content="仅可导章一次" placement="bottom">
                        <button class="btn btn-success btn-flat btn-sm center" @click="dialogchapers = true">Excel批量导章</button>
                      </el-tooltip></center>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box box-solid bg-primary">
                    <div class="box-header">
                      <h6 class="box-title"><strong>第三届田径运动会开幕式活动礼仪</strong></h6>
                    </div>
                    <div class="box-body">
                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-success">512</span></p>
                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                      <center><button class="btn btn-success btn-flat btn-sm center" style="cursor: not-allowed" disabled>Excel批量导章</button></center>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box box-solid bg-primary">
                    <div class="box-header">
                      <h6 class="box-title"><strong>第三届田径运动会开幕式活动礼仪</strong></h6>
                    </div>
                    <div class="box-body">
                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-success">512</span></p>
                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                      <center><button class="btn btn-success btn-flat btn-sm center">Excel批量导章</button></center>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12" style="display: flex">
                <div class="col-md-4">
                  <div class="box box-solid bg-primary">
                    <div class="box-header">
                      <h6 class="box-title"><strong>第三届田径运动会开幕式活动礼仪</strong></h6>
                    </div>
                    <div class="box-body">
                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社团联</p>
                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-success">512</span></p>
                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                      <center><button class="btn btn-success btn-flat btn-sm center">Excel批量导章</button></center>
                    </div>
                  </div>
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
// import request from '../../utils/request'
export default {
  name: 'ActivityChapter',
  data() {
    return {
      dialogchapers: false
    }
  },
  methods: {
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
