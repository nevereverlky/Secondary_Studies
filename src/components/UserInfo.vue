<template>
  <div id="userInfo">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto">
                  <h4 class="page-title">账号</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/activityapproval"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">用户信息模块</li>
                        <li class="breadcrumb-item active" aria-current="page">账号</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main content -->
            <section class="content">
              <div class="col-md-6 col-12">
                <div class="box box-outline-primary">
                  <div class="box-header">
                    <h4 class="box-title"><strong>个人信息</strong></h4>
                  </div>
                  <div class="box-body">
                    <ul class="list-group list-group-striped">
                      <li class="list-group-item">
                        <i class="el-icon-user"/>用户名称
                        <div class="pull-right">{{ user.userName }}</div>
                      </li>
                      <li class="list-group-item">
                        <i class="el-icon-phone"/>手机号码
                        <div class="pull-right">{{ user.phonenumber }}</div>
                      </li>
                      <li class="list-group-item">
                        <i class="el-icon-message"/>用户邮箱
                        <div class="pull-right">{{ user.email }}</div>
                      </li>
                      <li class="list-group-item">
                        <i class="el-icon-s-custom"/>所属部门
                        <div v-if="user.dept" class="pull-right">{{ user.dept.deptName }} / {{ postGroup }}</div>
                      </li>
                      <li class="list-group-item">
                        <i class="el-icon-user-solid"/>所属角色
                        <div class="pull-right">{{ roleGroup }}</div>
                      </li>
                      <li class="list-group-item">
                        <i class="el-icon-date"/>创建日期
                        <div class="pull-right">{{ user.createTime }}</div>
                      </li>
                    </ul>
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
// import userAvatar from "./userAvatar";
// import userInfo from "./userInfo";
// import resetPwd from "./resetPwd";
// import { getUserProfile } from "@/api/system/user";

export default {
  name: 'UserInfo',
  // components: { userAvatar, userInfo, resetPwd },
  data() {
    return {
      user: {},
      roleGroup: {},
      postGroup: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    // getUser() {
    //   getUserProfile().then(response => {
    //     this.user = response.data
    //     this.roleGroup = response.roleGroup
    //     this.postGroup = response.postGroup
    //   })
    // }
  }
}
</script>

<style scoped>
.content .box-body i{
margin-right:15px
}
</style>
