<template lang="pug">
div.home
  //- Ranking(:title="'Top Converters'" :items="rankingItems")
  HeaderComponent.header
  NavBarComponent(
    v-if="!isMobile"
    @scrollToRanking="scrollToRanking"
    @scrollToTopUser="scrollToTopUser"
  ).nav-bar
  ContentIntro
  SearchBarComponent(v-if="isMobile")
  NavBarComponent(
    v-if="isMobile"
    @scrollToRanking="scrollToRanking"
    @scrollToTopUser="scrollToTopUser"
  ).nav-bar
  ReponsiveList(
    :title="'Truyện mới'"
    :items="cards"
  ).centered
  ReponsiveList(
    :title="'Truyện đã hoàn thành'"
    :items="cards"
  ).centered
  div.lists.centered(ref="rankingSection")
    ColumnList(
      :title="'Đề cử'"
      :items="cards"
    )
    ColumnList(
      :title="'Xem nhiều'"
      :items="cards"
    )
    ColumnList(
      :title="'Yêu thích'"
      :items="cards"
    )
    ColumnList(
      :title="'Theo dõi nhiều'"
      :items="cards"
    )
  div(v-if="!isMobile"
  ref="topUser").lists.centered.ranking
    Ranking(
      :title="'Top Converters'"
      :items="userRanking"
    )
    Ranking(
      :title="'Top Đại Gia'"
      :items="userRanking"
    )
    Ranking(
      :title="'Bảng xếp hạng người dùng'"
      :items="userRanking"
    )
    Ranking(
      :title="'Bảng xếp hạng tiêu phí'"
      :items="userRanking"
    )
  Footer(v-if="!isMobile")
  button.scroll-top(@click="scrollToTop")
    font-awesome-icon(
      :icon="'fas fa-arrow-up'"
      :style="{ color: white }"
    )
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
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollToRanking() {
      const rankingSection = this.$refs.rankingSection
      if (rankingSection) {
        rankingSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    scrollToTopUser() {
      const topUser = this.$refs.topUser
      if (topUser) {
        topUser.scrollIntoView({ behavior: 'smooth' })
      }
    }
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
  width: 90%

.lists
  display: grid
  grid-template-columns: 1fr
  gap: 16px
  width: 100%
  background-color: white

.centered
  margin: 0 auto // Căn giữa các phần tử trong .centered

.ranking
  padding: 20px 20px
  margin-top: 2rem
  justify-content: center

.scroll-top
  position: fixed
  bottom: 20px
  right: 20px
  background-color: rgba(128, 128, 128, 0.7) // Gray color with 70% opacity
  color: white
  border: none
  border-radius: 50%
  width: 40px
  height: 40px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
  font-size: 20px
  transition: background-color 0.3s

  &:hover
    background-color: rgba(128, 128, 128, 0.9) // Darker gray on hover

.nav-bar
  position: sticky
  top: 0
  z-index: 1000
  width: 100%
  background-color: white

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
