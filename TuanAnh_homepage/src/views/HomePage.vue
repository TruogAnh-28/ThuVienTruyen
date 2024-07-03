<template lang="pug">
div.home
  HeaderComponent.header
  NavBarComponent(v-if="!isMobile").nav-bar 
  ContentIntro
  SearchBarComponent(v-if="isMobile")
  NavBarComponent(v-if="isMobile").nav-bar 
  ReponsiveList(:title="'Truyện vừa xem'" :items="cards").centered
  ReponsiveList(:title="'Truyện đề cử tháng'" :items="cards").centered
  div.lists.centered
    ColumnList(:title="'Đề cử'" :items="cards")
    ColumnList(:title="'Xem nhiều'" :items="cards")
    ColumnList(:title="'Yêu thích'" :items="cards")
    ColumnList(:title="'Theo dõi nhiều'" :items="cards")
  Footer(v-if="!isMobile")
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
import Category from '@/components/Category.vue'
import ReponsiveList from '@/components/ReponsiveList.vue'
import News from '@/components/News.vue'
import ContentIntro from '@/components/ContentIntro.vue'
import Footer from '@/components/Footer.vue'
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
    List,
    Category,
    ReponsiveList,
    News,
    ContentIntro,
    Footer
  },
  data() {
    return {
      cards: cards.cards,
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768
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

.header
  width: 90%;

.lists
  display: grid
  grid-template-columns: 1fr
  gap: 16px
  width: 100%
  background-color: white

.centered
  margin: 0 auto; // Căn giữa các phần tử trong .centered

@media (min-width: 600px)
  .lists
    grid-template-columns: 1fr 1fr
    gap: 16px
    width: 90%

@media (min-width: 1200px)
  .body
    background-color: white

  .lists
    grid-template-columns: repeat(4, 1fr)
    gap: 16px
    width: 72rem

  SearchBarComponent
    display: none

  .nav-bar
    margin-top: 8px

@media (min-width: 1400px)
  .lists
    width: 88rem
</style>
