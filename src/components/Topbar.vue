<template>
  <div id="Topbar" class="theme-success">

    <header class="main-header">
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top pl-15">
        <!-- Sidebar toggle button-->
        <div>
          <ul class="nav">
            <li class="btn-group nav-item">
              <a href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" data-toggle="push-menu" role="button">
                <i class="fa fa-navicon" aria-hidden="true"/>
              </a>
            </li>
            <li class="btn-group nav-item">
              <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="Full Screen">
                <i class="fa fa-expand" aria-hidden="true"/>
              </a>
            </li>
          </ul>
        </div>

        <div class="navbar-custom-menu r-side">
          <ul class="nav navbar-nav">
            <!-- Notifications -->
            <li class="dropdown notifications-menu">
              <a href="#" class="waves-effect waves-light rounded dropdown-toggle" data-toggle="dropdown" title="Notifications">
                <i class="fa fa-bell-o"/>
              </a>
              <ul class="dropdown-menu animated bounceIn">

                <li class="header">
                  <div class="p-20">
                    <div class="flexbox">
                      <div>
                        <h4 class="mb-0 mt-0">预警管理</h4>
                      </div>
                      <div>
                        <a href="#" class="text-danger">清除所有</a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-info"/> Curabitur id eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-warning text-warning"/> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-danger"/> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart text-success"/> In gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-danger"/> Praesent eu lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-primary"/> Nunc fringilla lorem
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-success"/> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">查看所有</a>
                </li>
              </ul>
            </li>

            <!-- User Account-->
            <li class="dropdown user user-menu">
              <a href="#" class="waves-effect waves-light rounded dropdown-toggle d-flex align-items-center" data-toggle="dropdown" title="User">
                <div class="text-right d-none d-lg-block"><p class="font-weight-600 mb-0">团委</p><small>苏前溢</small></div>
                <img src="./../assets/images/logo.png" alt="">
              </a>
              <ul class="dropdown-menu animated flipInX">
                <li class="user-body">
                  <router-link tag="a" to="/UserInfo">
                    <a class="dropdown-item"><i class="fa fa fa-user text-muted mr-2"/>帐号</a>
                  </router-link>
                  <router-link tag="a" to="/EditPassword">
                    <a class="dropdown-item"><i class="fa fa-unlock-alt text-muted mr-2"/>修改密码</a>
                  </router-link>
                  <div class="dropdown-divider"/>
                  <a class="dropdown-item" @click="tologin"><i class="fa fa-lock text-muted mr-2"/>注销</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" data-toggle="control-sidebar" title="Setting" class="waves-effect waves-light">
                <i class="fa fa-cog"/>
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data () {
    return {
    }
  },
  methods: {
<<<<<<< HEAD
    tologin () {
      let _this = this
      // request.$post('/user/logout', {}, (res) => {
      //   console.log(res.data);
      //   request.localStorageSet('token', null);
      setTimeout(function () {
=======
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
    }
  }
}
</script>

<style scoped>

</style>
