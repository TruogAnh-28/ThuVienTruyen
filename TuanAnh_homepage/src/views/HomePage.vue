<template lang="pug">
div.home
  div.home
  HeaderComponent
  SliderComponent
  SearchBarComponent(v-if="isMobile")
  NavBarComponent .nav-bar
  template(v-if="isMobile")
    RowList(:title="'Truyện vừa xem'" :items="cards")
    RowList(:title="'Truyện đề cử tháng'" :items="cards")
  template(v-else)
    List.list(:title="'Truyện vừa xem'" :items="cards")
  div.lists
    ColumnList(:title="'Truyện đang theo dõi'" :items="cards")
    ColumnList(:title="'Truyện yêu thích'" :items="cards")
    ColumnList(:title="'Truyện đề cử'" :items="cards")
    ColumnList(:title="'Truyện hay'" :items="cards")
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import SearchBarComponent from '@/components/SearchBarComponent.vue'
import RowList from '@/components/RowList.vue'
import ColumnList from '@/components/ColumnList.vue'
import ListComponent from '@/components/ListComponent.vue'
import cards from '@/z_data/cardlist01.json'
import List from '@/components/List.vue'
export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
    SearchBarComponent,
    RowList,
    ColumnList,
    ListComponent,
    List
  },
  data() {
    return {
      cards: cards.cards,
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 1000
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1000
    })
  }
}
</script>

<style lang="stylus" scoped>
.home
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

.nav-bar
  margin-bottom: 8px

.lists
  display: grid
  grid-template-columns: 1fr
  gap: 16px
  width: 100%

@media (min-width: 600px)
  .lists
    grid-template-columns: 1fr 1fr
    gap: 16px

@media (min-width: 1200px)
  .body
    background-color: white

  .lists
    grid-template-columns: repeat(4, 1fr)
    gap: 16px
    width:75rem

  SearchBarComponent
    display: none

  .nav-bar
    margin-top: 8px
</style>
