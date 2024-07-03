<template lang="pug">
header.header
  .header-content
    img.logo(src="https://truyen.tangthuvien.vn/images/logo-web-gray.png" height="45")
    SearchBarComponent(v-if="isDesktop")
    .user-icon
      font-awesome-icon(:icon="['fas', 'user']")
</template>

<script>
import SearchBarComponent from '@/components/SearchBarComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    SearchBarComponent
  },
  data() {
    return {
      isDesktop: false
    }
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768
    })
  }
}
</script>

<style lang="stylus" scoped>
header.header
  position: relative
  box-sizing: border-box
  float: left
  width: 90%
  padding: 0 8px

.header-content
  display: flex
  align-items: center
  width: 100%
  font-size: 12px

.logo
  width: 10rem
  height: auto

.user-icon
  margin-left: auto
  color: #ed424b
  font-size: 1.5em
  margin-right: 8px

@media (min-width: 768px)
  .header-content
    justify-content: space-between

  .user-icon
    margin-left: 18%
</style>
