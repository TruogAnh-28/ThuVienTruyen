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
  Footer(v-if="!isMobile")
</template>

<script>
import HeaderComponent from '@/components/Header/Header.vue'
import NavBarComponent from '@/components/NavBar.vue'
import SliderComponent from '@/components/IntroContent/SliderComponent.vue'
import SearchBarComponent from '@/components/Header/SearchBar.vue'
import ColumnList from '@/components/Lists/ColumnList.vue'
import ListComponent from '@/components/Lists/ListComponent.vue'
import cards from '@/z_data/cardlist01.json'
import List from '@/components/Lists/List.vue'
import Category from '@/components/IntroContent/Category.vue'
import ReponsiveList from '@/components/Lists/ReponsiveList.vue'
import News from '@/components/IntroContent/News.vue'
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
    ListComponent,
    List,
    Category,
    ReponsiveList,
    News,
    ContentIntro,
    Footer,
    Ranking
  },
  data() {
    return {
      cards: cards.cards,
      isMobile: true,
      rankingItems: [
        {
          name: 'hanals',
          link: 'https://truyen.tangthuvien.vn/converter/hanals',
          chapters: 779,
          cover:
            'https://www.nae.vn/ttv/ttv/public/images_user/b3022d252d733397227a2ad98a824b4047ce6907744d0c2e693baa299b24382b.jpg'
        },
        {
          name: 'vohansat',
          link: 'https://truyen.tangthuvien.vn/converter/vohansat',
          chapters: 637
        },
        {
          name: 'Lãnh Phong',
          link: 'https://truyen.tangthuvien.vn/converter/Lãnh Phong',
          chapters: 392
        },
        {
          name: 'nguoithanbi2010',
          link: 'https://truyen.tangthuvien.vn/converter/nguoithanbi2010',
          chapters: 316
        },
        {
          name: 'Hoa Anh Thảo',
          link: 'https://truyen.tangthuvien.vn/converter/Hoa Anh Thảo',
          chapters: 198
        },
        {
          name: 'RyuYamada',
          link: 'https://truyen.tangthuvien.vn/converter/RyuYamada',
          chapters: 182
        },
        {
          name: 'viettiev',
          link: 'https://truyen.tangthuvien.vn/converter/viettiev',
          chapters: 149
        },
        {
          name: 'Hắc Hắc Hắc',
          link: 'https://truyen.tangthuvien.vn/converter/huypho2003',
          chapters: 113
        },
        {
          name: 'why03you',
          link: 'https://truyen.tangthuvien.vn/converter/why03you',
          chapters: 87
        },
        {
          name: 'NguyenHoang',
          link: 'https://truyen.tangthuvien.vn/converter/NguyenHoang',
          chapters: 65
        }
      ]
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
