<template lang="pug">
div.column-list
  .list-header
    h2.list-title {{ title }}
    span.view-all Tất cả
  div.list-container
    div.item(v-for="(item, index) in limitedItems" :key="index")
      img(:src="resolveImagePath(item.cover)" :alt="item.name")
      div.info
        div.rank NO.{{ index + 1 }}
        p.item-title {{ truncateTitle(item.title) }}
        p.item-genre Thể Loại: {{ type[item.type[0]] }}
        p.item-views Lượt Xem: {{ item.read }}
        //- p.item-status Tình Trạng: {{ progress[item.progress] }}
        p.item-chapters Số chương: {{ item.chapter }}
        p.item-author {{ item.author }}
</template>
<script>
import constants from '@/z_data/constants.json'
export default {
  name: 'ColumnList',
  props: {
    title: String,
    items: Array
  },
  data() {
    return {
      type: constants.type,
      progress: constants.progress
    }
  },
  computed: {
    limitedItems() {
      // Lấy 5 items đầu tiên từ danh sách gốc
      return this.items.slice(0, 3)
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    resolveImagePath(imagePath) {
      return `src${imagePath}`
    },
    truncateTitle(title) {
      const wordsTitle = title.split(' ')
      if (wordsTitle.length > 10) {
        return wordsTitle.slice(0, 10).join(' ') + ','
      }
      return title
    }
  }
}
</script>
<style lang="stylus" scoped>
.column-list
  padding 8px
  width: 100%
  background-color: white

  .list-header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 20px
    padding-left: 16px
    padding-right: 1rem
    border-bottom: 1px solid #ccc

    .list-title
      font-size: 18px
      font-weight: bold

    .view-all
      font-size: 14px
      color: #007bff
      cursor: pointer
      font: 14px / 16px Arial, '-apple-system', Simsun;
      color: #a6a6a6;



  .list-container
    display: flex
    flex-direction: column
    gap: 20px
    width: 100%

  .item
    display: flex
    align-items: center
    border-radius: 5px
    cursor: pointer
    transition: all 0.3s

    &:hover
      background-color: #f0f0f0

    img
      width: 100px
      height: auto
      object-fit: cover
      border-radius: 5px
      margin-right: 20px

    .info
      display: flex
      flex-direction: column
      .rank
        font: 700 14px / 18px Arial;
        width: 36px;
        height: 18px;
        margin-bottom: 3px;
        text-align: center;
        color: #fff;
        background: #bf2c24;
      p
        margin: 5px 0

      .item-title
        font-size: 16px
        font-weight: bold

      .item-genre,
      .item-author
        font-size: 14px
        color: #666

      .item-views,
      .item-status,
      .item-chapters
        font-size: 14px
</style>
