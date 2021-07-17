<template>
  <div id="Index">
    <div class="hold-transition light-skin sidebar-mini theme-primary" style="height:100vh;width:100vw">
      <div class="wrapper" style="background-color: #eef0f8">
        <Topbar></Topbar>
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import activityApproval from '../components/ActivityManage/activityApproval'
export default {
  name: 'Index',
  components: {activityApproval, Topbar, Sidebar}
}
</script>

<style scoped>

</style>
