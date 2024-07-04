<template lang="pug">
div.home
  //- Ranking(:title="'Top Converters'" :items ="rankingItems" )
  HeaderComponent.header
  NavBarComponent(v-if="!isMobile").nav-bar 
  ContentIntro
  SearchBarComponent(v-if="isMobile")
  NavBarComponent(v-if="isMobile").nav-bar 
  ReponsiveList(:title="'Truyện mới'" :items="cards").centered
  ReponsiveList(:title="'Truyện đã hoàn thành'" :items="cards").centered
  div.lists.centered
    ColumnList(:title="'Đề cử'" :items="cards")
    ColumnList(:title="'Xem nhiều'" :items="cards")
    ColumnList(:title="'Yêu thích'" :items="cards")
    ColumnList(:title="'Theo dõi nhiều'" :items="cards")
  div(v-if="!isMobile").lists.centered.ranking
    Ranking(:title="'Top Converters'" :items="userRanking")
    Ranking(:title="'Top Đại Gia'" :items="userRanking")
    Ranking(:title="'Bảng xếp hạng người dùng'" :items="userRanking")
    Ranking(:title="'Bảng xếp hạng tiêu phí'" :items="userRanking")
  Footer(v-if="!isMobile")
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue'
import NavBarComponent from '@/components/NavBar.vue'
import SliderComponent from '@/components/IntroContent/SliderComponent.vue'
import SearchBarComponent from '@/components/Header/SearchBar.vue'
import ColumnList from '@/components/Lists/ColumnList.vue'
import cards from '@/z_data/cardlist01.json'
import userRanking from '@/z_data/userRanking.json'
import List from '@/components/Lists/List.vue'
import ReponsiveList from '@/components/Lists/ReponsiveList.vue'
import ContentIntro from '@/components/IntroContent/ContentIntro.vue'
import Footer from '@/components/Footer.vue'
import Ranking from '@/components/Ranking.vue'
export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
    SearchBarComponent,
    ColumnList,
    List,
    ReponsiveList,
    ContentIntro,
    Footer,
    Ranking
  },
  data() {
    return {
      cards: cards.cards,
      userRanking: userRanking.userRanking,
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
.ranking
  padding: 20px 20px
  margin-top:2rem
  justify-content: center


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
