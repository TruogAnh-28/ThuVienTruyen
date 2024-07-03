<template lang="pug">
template(v-if="isMobile")
    RowList(:title="'Truyện vừa xem'" :items="cards")
template(v-else)
    List(:title="'Truyện vừa xem'" :items="cards")
</template>

<script>
import List from '@/components/List.vue'
import RowList from '@/components/RowList.vue'
import cards from '@/z_data/cardlist01.json'
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
      cards: cards.cards,
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
