<template>
  <div id="approveCard">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto col-sm-7">
                  <h4 class="page-title">审批详情</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/activityinquiry"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动模块</li>
                        <li class="breadcrumb-item" aria-current="page">活动审批</li>
                        <li class="breadcrumb-item active" aria-current="page">审批详情</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="btn-group float-sm-right">
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light" @click="turnBack">返回列表</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <section class="content">
              <div class="col-12" style="display: flex">
                <div class="col-md-5">
                  <div class="box bt-3 border-success">
                    <div class="box-header">
                      <h4 class="box-title">钉钉审批截图</h4>
                    </div>

                    <div class="box-body">
                      <p><code>.bt-3.border-info</code></p>
                      <p>Which is the same as saying through shrinking from toil and pain.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="box box-solid bg-success">
                    <div class="box-header">
                      <h6 class="box-title"><strong>第三届田径运动会开幕式活动礼仪</strong></h6>
                    </div>
                    <div class="box-body">
                      <p><b>举办单位</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学生社团联合会</p>
                      <p><b>活动地点</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C楼511</p>
                      <p><b>申请章数</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-success">512</span></p>
                      <p><b>活动类型</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;志愿活动</p>
                      <p><b>活动学期</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021学年第一学期</p>
                      <p><b>扫章时间</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021.7.14 12:00 ~ 13:00</p>
                      <div class="row">
                        <div class="col-12">
                          <div style="display: flex;justify-content:flex-end;">
                            <div>
                              <el-radio v-model="pass" :label="true" size="small" border>通过</el-radio>
                              <el-radio v-model="pass" :label="false" size="small" border>驳回</el-radio>
                            </div>
                            <div v-if="pass === false" style="margin-left: 10px">
                              <el-input
                                v-model="denyReason"
                                placeholder="请输入驳回理由"
                                size="small"
                                style="width: 300px;"/>
                            </div>
                          </div>
                          <button type="button" class="btn btn-primary btn-sm waves-effect waves-light" style="float: right;margin-top:20px"><i class="icon-lock" style="margin-right:10px"/>提 交</button>
                        </div>
                      </div><!--End Row-->
                    </div>
                  </div>
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
export default {
  name: 'ApproveCard',
  data() {
    return {
      pass: '',
      denyReason: ''
    }
  },
  methods: {
    turnBack() {
      this.$router.push({
        path: '/activityapproval',
        name: 'activityApproval'
      })
    }
  }
}
</script>

<style scoped>

</style>
