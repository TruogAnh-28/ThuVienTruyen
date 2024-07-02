<template lang="pug">
nav.nav-bar
  ul
    li(v-for="item in navItems" :key="item.text"  class="nav-item")
      font-awesome-icon(:icon="item.icon" :style="{ color: item.color }")
      span.nav-text {{ item.text }}
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      navItems: [
        { text: 'Thể Loại', route: '/categories', icon: 'fas fa-list', color: '#ff6347' },
        { text: 'Xếp Hạng', route: '/ranking', icon: 'fas fa-star', color: '#6495ed' },
        { text: 'Bộ Lọc', route: '/filter', icon: 'fas fa-filter', color: '#7cfc00' },
        { text: 'Top User', route: '/top-users', icon: 'fas fa-users', color: '#ffa500' },
        { text: 'Review', route: '/reviews', icon: 'fas fa-comment', color: '#4169e1' }
      ]
    }
  },
  methods: {
    navigate(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-bar
  display flex
  justify-content space-around
  background-color #fff
  width 100%
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)

  ul
    list-style none
    padding 0
    margin 0
    display flex
    justify-content space-around
    width 100%

  .nav-item
    flex 1 0 0
    display flex
    flex-direction column
    align-items center
    color #333
    cursor pointer
    padding 10px 0

    &:hover
      background-color #f0f0f0



  .nav-text
    justify-content: center
    text-align center
    margin-top 8px
</style>
