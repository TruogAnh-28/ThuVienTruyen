<template lang="pug">
div.column-list
  h2.list-title {{ title }}
  div.list-container
    div.item(v-for="(item, index) in items" :key="index")
      img(:src="item.image" :alt="item.name")
      div.info
        p.item-title {{ item.name }}
        p.item-genre Thể Loại: {{ item.genre }}
        p.item-author Tác giả: {{ item.author }}
        p.item-views Lượt Xem: {{ item.views }}
        p.item-status Tình Trạng: {{ item.status }}
        p.item-chapters Số chương: {{ item.chapters }}
</template>

<script>
export default {
  name: 'ColumnList',
  props: {
    title: String,
    items: Array
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
<style lang="stylus" scoped>
.column-list
  padding 8px
  width: 100%
  background-color: white

  .list-title
    font-size: 18px
    font-weight: bold
    margin-bottom: 20px
    padding-left: 16px
    padding-bottom: 8px

    border-bottom: 1px solid #ccc

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

      p
        margin: 5px 0

      .item-title
        font-size: 16px
        font-weight: bold

      .item-genre,
      .item-author {
        font-size: 14px
        color: #666
      }

      .item-views,
      .item-status,
      .item-chapters {
        font-size: 14px
      }
</style>
