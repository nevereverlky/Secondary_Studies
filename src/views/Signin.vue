<template>
<div class="Signin">
  <div class="hold-transition theme-primary bg-lighter" style="height:100vh;width:100vw">
    <div class="container h-p100">
    <div class="row align-items-center justify-content-md-center h-p100">

      <div class="col-12">
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-4 col-md-5 col-12">
            <div class="p-30 rounded30 box-shadowed b-2 b-dashed bg-white">
              <div class="content-top-agile p-10">
                <h2 class="text-success">第二课堂</h2>
                <p class="text-success-50">The Secondary Studies Management</p>
              </div>
              <form>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-transparent text-success"><i class="fa fa-user-o"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent text-dark plc-white" v-model="loginForm.account" placeholder="帐号">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text  bg-transparent text-success"><i class="fa fa-unlock"></i></span>
                    </div>
                    <input type="password" class="form-control pl-15 bg-transparent text-dark plc-white" v-model="loginForm.password" placeholder="密码">
                  </div>
                </div>
                <div class="row">
                  <!-- /.col -->
                  <div class="col-12 text-center">
                    <button type="button" class="btn btn-success btn-rounded mt-20" @click.prevent="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                  </div>
                  <!-- /.col -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import request from '../utils/request'
export default {
  name: 'Signin',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let _this = this
      if (this.loginForm.account === '' || this.loginForm.password === '') {
        request.message(this, '账号或密码不能为空','warning');
      } else {
        // request.$post('', {
        //   account: _this.loginForm.account,
        //   password: _this.loginForm.password
        // }, (res) => {
        //   console.log(res.data);
        //   let token = res.data.data.token;
        //   request.localStorageSet('token', token);
          setTimeout(function () {
            // if (_this.$route.query.redirect) {
            //   _this.$router.push({path: decodeURIComponent(_this.$route.query.redirect)}) //跳转到原页面
            // } else {
              _this.$router.push({name: 'Index'});//正常登录流程进入的页面
//            }
            location.reload();
          }, 2000)
          request.message(_this, message, 'success');
        // }, _this)
      }
    }
  }
}
</script>

<style scoped>

</style>
