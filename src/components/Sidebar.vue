<template>
  <div id="Sidebar" class="theme-success">

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
        <ul class="sidebar-menu" data-widget="tree">

          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="pie-chart"></i><span>活动模块</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/activityinquiry"><i class="fa fa-ellipsis-h"></i>活动查询与创建</router-link></li>
              <li><router-link tag="a" to="/activityapproval"><i class="fa fa-ellipsis-h"></i>活动审批</router-link></li>
              <li><router-link tag="a" to="/authorization"><i class="fa fa-ellipsis-h"></i>权限分配</router-link></li>
            </ul>
          </li>

          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="message-circle"></i><span>活动章模块</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/activitychapter"><i class="fa fa-ellipsis-h"></i>导入章</router-link></li>
              <li><router-link tag="a" to="/chapterinout"><i class="fa fa-ellipsis-h"></i>导入/导出章</router-link></li>
            </ul>
          </li>

          <li class="treeview">
            <a class="waves-effect">
              <i data-feather="mail"></i><span>帐号模块</span><span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link tag="a" to="/informationentry"><i class="fa fa-ellipsis-h"></i>新生信息录入</router-link></li>
            </ul>
          </li>

          <li class="header nav-small-cap">总览</li>

          <li class="treeview">
            <router-link tag="a" to="/overallview">
              <i data-feather="grid"></i><span>预警与总览</span>
              <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span>
            </router-link>
          </li>

          <li class="header nav-small-cap">EXTRA</li>

          <li @click="tologin">
            <a>
              <i data-feather="lock"></i><span>注销</span>
            </a>
          </li>

        </ul>
      </section>
    </aside>

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      currentMenu:'/overallview'
    }
  },
  created(){
    let self = this;
    let currentUrl = window.location.href;
    self.currentMenu = currentUrl.split('#')[1];
    console.log(self.currentMenu);
  },
  methods: {
    reloadRouter (path) {
    },
    tologin () {
      let _this = this;
      // request.$post('/user/logout', {}, (res) => {
      //   console.log(res.data);
      //   request.localStorageSet('token', null);
        setTimeout(function () {
          _this.$router.push('/signin');
          // location.reload();
        }, 3000)
        // let message = res.data.message;
        request.message(_this, message, 'success');
      // }, _this)
    }
  }
}
</script>

<style scoped>

</style>
