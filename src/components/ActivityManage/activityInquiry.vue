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
                        <li class="breadcrumb-item"><router-link tag="a" to="/activityinquiry"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">活动模块</li>
                        <li class="breadcrumb-item active" aria-current="page">活动查询与创建</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div class="col-sm-5">
                  <div class="btn-group float-sm-right">
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light"><i class="fa fa-plus-square mr-1"></i>创建活动</button>
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
                                      <button class="btn btn-outline btn-success btn-sm"><i class="fa fa-pencil"></i></button>
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
                                    <button class="btn btn-outline btn-warning btn-sm"><i class="fa fa-pencil"></i></button>
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

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityInquiry'
}
</script>

<style scoped>

</style>
