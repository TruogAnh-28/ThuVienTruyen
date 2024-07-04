<template lang="pug">
header.header
  .header-content
    img.logo(src="https://truyen.tangthuvien.vn/images/logo-web-gray.png" height="45")
    SearchBarComponent(v-if="isDesktop").search-bar
    .user-icon
      font-awesome-icon(:icon="['fas', 'user']")
</template>

<script>
import SearchBarComponent from '@/components/Header/SearchBar.vue'

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
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 768
    }
  }
}
</script>

<style lang="stylus" scoped>
header.header
  position: relative
  box-sizing: border-box
  width: 100%
  padding: 8px 8px

.header-content
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  font-size: 12px

.logo
  width: auto
  height: 45px
  margin-left: 20px
.search-bar

  width: 60%

.user-icon
  color: #ed424b
  font-size: 1.5em
  margin-right: 20px
  cursor pointer
@media (max-width: 767px)
  .header-content
    justify-content: space-between
</style>
