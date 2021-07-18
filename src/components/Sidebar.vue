<template>
  <div id="Sidebar" class="theme-success light-skin">

    <aside class="main-sidebar">
      <!-- sidebar-->
      <section class="sidebar">

        <div class="user-profile">
          <div class="ulogo">
            <!-- logo for regular state and mobile devices -->
            <div class="d-flex align-items-center justify-content-center">
              <!--<img src="./../assets/images/logo.png" alt="" height="40" width="40" style="margin-right: 20px">-->
              <h4><b>第二课堂</b></h4>
            </div>
          </div>
        </div>

        <!-- sidebar menu-->

<<<<<<< HEAD
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              router
              :default-active="$route.path"
              class="sidebar-menu el-menu-vertical-demo"
              style="width: 260px"
              @open="handleOpen"
              @close="handleClose"
              background-color="#ffffff"
              text-color="#919ebc"
              active-text-color="#1bc5bd">
              <el-menu-item index="/overallview">
                <i class="feather" data-feather="grid" style="color:#919ebc;margin-right: 10px; "></i>
                <span style="font-size:14px">预警与总览</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="feather" data-feather="pie-chart" style="color:#919ebc;background-color:#f7f8f8;border-radius: 12px;margin-right: 10px; "></i>
                  <span>活动模块</span>
                </template>
                <el-menu-item index="/activityinquiry"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>活动查询与创建</el-menu-item>
                <el-menu-item index="/activityapproval"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>活动审批</el-menu-item>
                <el-menu-item index="/authorization"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>权限分配</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="feather" data-feather="message-circle" style="color:#919ebc;background-color:#f7f8f8;border-radius: 11px;margin-right: 10px; "></i>
                  <span>活动章模块</span>
                </template>
                <el-menu-item index="/activitychapter"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>导入章</el-menu-item>
                <el-menu-item index="/chapterinout"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>导入/导出章</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="feather" data-feather="mail" style="color:#919ebc;background-color:#f7f8f8;border-radius: 5px;margin-right: 10px; "></i>
                  <span>帐号模块</span>
                </template>
                <el-menu-item index="/informationentry"><i class="fa fa-ellipsis-h" style="color:#919ebc"></i>新生信息录入</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
=======
          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="pie-chart"/><span>活动模块</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"/></span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/activityinquiry"><i class="fa fa-ellipsis-h"/>活动查询与创建</router-link></li>
              <li><router-link tag="a" to="/activityapproval"><i class="fa fa-ellipsis-h"/>活动审批</router-link></li>
              <li><router-link tag="a" to="/authorization"><i class="fa fa-ellipsis-h"/>权限分配</router-link></li>
            </ul>
          </li>

          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="message-circle"/><span>活动章模块</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"/></span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/activitychapter"><i class="fa fa-ellipsis-h"/>导入章</router-link></li>
              <li><router-link tag="a" to="/chapterinout"><i class="fa fa-ellipsis-h"/>导入/导出章</router-link></li>
            </ul>
          </li>

          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="mail"/><span>帐号模块</span><span class="pull-right-container"><i class="fa fa-angle-right pull-right"/>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/informationentry"><i class="fa fa-ellipsis-h"/>新生信息录入</router-link></li>
            </ul>
          </li>

          <li class="header nav-small-cap">总览</li>

          <li class="treeview">
            <router-link tag="a" to="/overallview">
              <i data-feather="grid"/><span>预警与总览</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"/></span>
            </router-link>
          </li>

          <li class="header nav-small-cap">EXTRA</li>

          <li @click="tologin">
            <a>
              <i data-feather="lock"/><span>注销</span>
            </a>
          </li>

        </ul>
>>>>>>> origin
      </section>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
<<<<<<< HEAD
    }
  },
  methods: {
    tologin () {
      let _this = this
      // request.$post('/user/logout', {}, (res) => {
      //   console.log(res.data);
      //   request.localStorageSet('token', null);
      setTimeout(function () {
=======
      currentMenu: '/overallview'
    }
  },
  created() {
    const self = this
    const currentUrl = window.location.href
    self.currentMenu = currentUrl.split('#')[1]
    console.log(self.currentMenu)
  },
  methods: {
    reloadRouter(path) {
    },
    tologin() {
      const _this = this
      // request.$post('/user/logout', {}, (res) => {
      //   console.log(res.data);
      //   request.localStorageSet('token', null);
      setTimeout(function() {
>>>>>>> origin
        _this.$router.push('/signin')
        // location.reload();
      }, 3000)
      // let message = res.data.message;
<<<<<<< HEAD
=======
      request.message(_this, message, 'success')
>>>>>>> origin
      // }, _this)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-menu {
  border-right: 0ch !important;
}
.el-menu-item{
  font-size: 13px;
}
.el-menu-item i.fa-ellipsis-h{
  margin-right: 10px;
}
.el-menu-item.is-active i.fa-ellipsis-h:before{
  content: "\f178";
  color: #475f7b;
}
.el-menu-item:hover i.fa-ellipsis-h:before{
  content: "\f178";
  color: #475f7b;
}
.el-menu-item.is-active {
  background-color:  rgba(27, 197, 189, 0.2) !important;
  color: #475f7b !important;
}
.el-menu-item-group .el-menu-item.demo:hover{
  background: #ffffff !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: #fff !important;
  color: #475f7b !important;
}
</style>

<style lang="less">
.el-submenu:hover .feather{
  background-color: #ffffff !important;
  color: #475f7b !important;
  i {
    color: #475f7b !important;
  }
}
.el-submenu .el-submenu__title:hover{
  background-color: #ffffff !important;
  color: #475f7b !important;
  i {
    color: #475f7b !important;
  }
}
</style>
