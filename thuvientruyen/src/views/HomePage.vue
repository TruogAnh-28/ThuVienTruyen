<template lang="pug">
div.home
  div.home
  HeaderComponent
  SliderComponent
  SearchBarComponent(v-if="isMobile")
  NavBarComponent .nav-bar
  //- RowList(:title="'Truyện vừa xem'" :items="recentlyViewedBooks")
  //- ColumnList(:title="'Truyện đang theo dõi'" :items="followedBooks")
  //- RowList(:title="'Truyện đề cử tháng'" :items="recentlyViewedBooks")
  //- ColumnList(:title="'Truyện yêu thích'" :items="followedBooks")
  template(v-if="isMobile")
    RowList(:title="'Truyện vừa xem'" :items="recentlyViewedBooks")
    ColumnList(:title="'Truyện đang theo dõi'" :items="followedBooks")
    RowList(:title="'Truyện đề cử tháng'" :items="recentlyViewedBooks")
    ColumnList(:title="'Truyện yêu thích'" :items="followedBooks")
  template(v-else)
    ListComponent(:title="'Truyện vừa xem'" :items="recentlyViewedBooks")
    ColumnList(:title="'Truyện đang theo dõi'" :items="followedBooks")
    ListComponent(:title="'Truyện đề cử tháng'" :items="recentlyViewedBooks")
    ColumnList(:title="'Truyện yêu thích'" :items="followedBooks")
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import SearchBarComponent from '@/components/SearchBarComponent.vue'
import RowList from '@/components/RowList.vue'
import ColumnList from '@/components/ColumnList.vue'
import ListComponent from '@/components/ListComponent.vue'
import book1 from '@/assets/book1.jpg'
import book2 from '@/assets/book2.jpg'
import book3 from '@/assets/book3.jpg'
import book4 from '@/assets/book4.jpg'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    NavBarComponent,
    SliderComponent,
    SearchBarComponent,
    RowList,
    ColumnList,
    ListComponent
  },
  data() {
    return {
      recentlyViewedBooks: [
        {
          name: 'Vũ Trụ Vô Hạn Thực Đường',
          image: book1,
          route: '/book1',
          description: 'Tận thế trò chơi giáng lâm, tuổi thọ thành duy nhất thông hành tiền tệ!'
        },
        { name: 'La Mã Tất Tu Vong', image: book2, route: '/book2' },
        { name: 'Quỷ Tam Quốc', image: book3, route: '/book3' },
        { name: 'Tinh Không Chức Nghiệp Giả', image: book4, route: '/book4' },
        { name: 'Quỷ Tam Quốc', image: book3, route: '/book3' },
        { name: 'Tinh Không Chức Nghiệp Giả', image: book4, route: '/book4' },
        { name: 'Tinh Không Chức Nghiệp Giả', image: book4, route: '/book4' },
        { name: 'La Mã Tất Tu Vong', image: book2, route: '/book2' },
        { name: 'Quỷ Tam Quốc', image: book3, route: '/book3' }
      ],
      followedBooks: [
        {
          name: 'Kiếm Lai - Tàng Thư viện',
          image: book3,
          genre: 'Tiên Hiệp',
          author: 'Phong Hỏa Hí Chư Hầu',
          views: 960092,
          status: 'Chưa Hoàn Thành',
          chapters: 414,
          route: '/book31'
        },
        {
          name: 'Đạo gia muốn phi thăng',
          image: book4,
          genre: 'Huyền Huyễn',
          author: 'Bùi Đồ Cẩu',
          views: 398607,
          status: 'Chưa Hoàn Thành',
          chapters: 532,
          route: '/book32'
        },
        {
          name: 'Đại Đạo Chi Thượng',
          image: book1,
          genre: 'Huyền Huyễn',
          author: 'Trạch Trư',
          views: 38578,
          status: 'Chưa hoàn thành',
          chapters: 41,
          route: '/book33'
        },
        {
          name: 'Tâm Linh Chúa Tể',
          image: book2,
          genre: 'Tiên Hiệp',
          author: 'Cô Độc Phiêu Lưu',
          views: 822494,
          status: 'Chưa hoàn thành',
          chapters: 1069,
          route: '/book34'
        }
      ],
      topRecommendedBooks: [
        { name: 'Book 11', image: book3, route: '/book11' },
        { name: 'Book 12', image: book4, route: '/book12' },
        { name: 'Book 13', image: book1, route: '/book13' },
        { name: 'Book 14', image: book2, route: '/book14' },
        { name: 'Book 15', image: book3, route: '/book15' }
      ],
      isMobile: true
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 1200
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1200
    })
  }
}
</script>

<style lang="stylus" scoped>
.home
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

.nav-bar {
    margin-bottom: 8px;
  }

@media (min-width: 1200px) {

  SearchBarComponent {
    display: none;  // Hide SearchBarComponent on desktop
  }
  .nav-bar {
    margin-top: 8px
  }

}
</style>
