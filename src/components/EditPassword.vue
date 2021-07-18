<template>
  <div id="editPassword">
    <div class="hold-transition light-skin sidebar-mini theme-success">
      <div class="wrapper">

        <div class="content-wrapper">
          <div class="container-full">
            <!-- Content Header (Page header) -->
            <div class="content-header">
              <div class="d-flex align-items-center">
                <div class="mr-auto">
                  <h4 class="page-title">修改密码</h4>
                  <div class="d-inline-block align-items-center">
                    <nav>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link tag="a" to="/activityapproval"><i class="fa fa-home" aria-hidden="true"/></router-link></li>
                        <li class="breadcrumb-item" aria-current="page">用户信息模块</li>
                        <li class="breadcrumb-item active" aria-current="page">修改密码</li>
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
                    <el-form ref="form" :model="user" :rules="rules" label-width="80px">
                      <el-form-item label="账号ID" prop="userId">
                        <el-input v-model="user.id" placeholder="请输入账号名" type="string" />
                      </el-form-item>
                      <el-form-item label="旧密码" prop="oldPassword">
                        <el-input v-model="user.oldPassword" placeholder="请输入旧密码" type="password" />
                      </el-form-item>
                      <el-form-item label="新密码" prop="newPassword">
                        <el-input v-model="user.newPassword" placeholder="请输入新密码" type="password" />
                      </el-form-item>
                      <el-form-item label="确认密码" prop="confirmPassword">
                        <el-input v-model="user.confirmPassword" placeholder="请确认密码" type="password" />
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" size="mini" @click="submit">保存</el-button>
                        <el-button type="danger" size="mini" @click="close">关闭</el-button>
                      </el-form-item>
                    </el-form>
                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div id="navpills2-1" class="tab-pane active">
                        <div class="row">
                          <div class="col-md-12"/>
                        </div>
                      </div>
                      <div id="navpills2-2" class="tab-pane">
                        <div class="row">
                          <div class="col-md-12"/>
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
// import { updateUserPwd } from '@/api/system/user'

export default {
  name: 'EditPassword',
  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.user.newPassword !== value) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      test: '1test',
      user: {
        id: undefined,
        oldPassword: undefined,
        newPassword: undefined,
        confirmPassword: undefined
      },
      // 表单校验
      rules: {
        userId: [
          { required: true, message: '账号名不能为空', trigger: 'blur' }
        ],
        oldPassword: [
          { required: true, message: '旧密码不能为空', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { required: true, validator: equalToPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          // updateUserPwd(this.user.oldPassword, this.user.newPassword).then(
          //   response => {
          //     this.msgSuccess('修改成功')
          //   }
          // )
        }
      })
    },
    close() {
      this.$store.dispatch('tagsView/delView', this.$route)
      this.$router.push({ path: '/index' })
    }
  }
}
</script>
