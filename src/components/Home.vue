<template>
  <div>
    <x-header :left-options="{showBack: false}">首页</x-header>
    <tabbar>
      <tabbar-item selected link="/" >
        <img slot="icon"  src="../assets/vux_logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/List">
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

