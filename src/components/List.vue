<template>
  <div>
    <x-header>列表</x-header>
    <tabbar>
      <tabbar-item  link="/">
        <img slot="icon"  src="../assets/vux_logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected link="/List">
        <img slot="icon"  src="../assets/vux_logo.png">
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item  link="/My">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// import { Group, Cell } from 'vux'

export default {
  components: {
    // Group,
    // Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.

    }
  }
}
</script>

<style>

</style>
