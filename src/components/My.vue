<template>
  <div class="hello">
    <x-header>我的</x-header>
    <tabbar>
      <tabbar-item  link="/">
        <img slot="icon"  src="../assets/vux_logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/List">
        <img slot="icon"  src="../assets/vux_logo.png">
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item selected link="/My">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
