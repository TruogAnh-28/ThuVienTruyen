<template lang="pug">
template(v-if="isMobile")
    RowList(:title="title" :items="items")
template(v-else)
    List(:title="title" :items="items")
</template>

<script>
import List from '@/components/Lists/List.vue'
import RowList from '@/components/Lists/RowList.vue'
export default {
  name: 'ReponsiveList',
  props: {
    title: String,
    items: Array
  },
  components: {
    List,
    RowList
  },
  data() {
    return {
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 1024
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1024
    })
  }
}
</script>

<style lang="stylus" scoped>
/* Add scoped styles as needed */
</style>
