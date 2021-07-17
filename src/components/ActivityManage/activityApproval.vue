<template>
  <div id="activityApproval">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
        <div class="container-full">
          <!-- Content Header (Page header) -->
          <div class="content-header">
            <div class="d-flex align-items-center">
              <div class="mr-auto">
                <h4 class="page-title">活动审批</h4>
                <div class="d-inline-block align-items-center">
                  <nav>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><router-link tag="a" to="/activityapproval"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                      <li class="breadcrumb-item" aria-current="page">活动模块</li>
                      <li class="breadcrumb-item active" aria-current="page">活动审批</li>
                    </ol>
                  </nav>
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
                <li class="nav-item"><a href="#navpills2-1" class="nav-link active" data-toggle="tab" aria-expanded="false">待审批</a> </li>
                <li class="nav-item"><a href="#navpills2-2" class="nav-link" data-toggle="tab" aria-expanded="false">已审批</a> </li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content">
                <div id="navpills2-1" class="tab-pane active">
                  <div class="row">
                    <div class="col-md-12">
                    </div>
                  </div>
                </div>
                <div id="navpills2-2" class="tab-pane">
                  <div class="row">
                    <div class="col-md-12">
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
  name: 'activityApproval'
}
</script>

<style scoped>

</style>
