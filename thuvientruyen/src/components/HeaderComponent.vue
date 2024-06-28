<template lang="pug">
header.header
  .header-content
    h1.logo Thư viện 
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
    this.isDesktop = window.innerWidth >= 1200
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 1200
    })
  }
}
</script>

<style lang="stylus" scoped>
header.header {
  position: relative;
  box-sizing: border-box;
  float: left;
  width: 100%;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  }
.logo{
  width: 32%
}
.user-icon {
  margin-left: auto;
  color: #ed424b;
  float: right
  font-size: 1.5em;
  margin-right: 8px;
}
SearchBarComponent{

}
@media (min-width: 1200px) {
  .header-content {
    justify-content: space-between;
  }
  .user-icon{
    margin-left:18%
  }

}
</style>
