<template lang="pug">
div.row-list
  .list-header
    h2.list-title {{ title }}
    span.view-all Tất cả
  div.list-container
    div.card(v-for="(item, index) in items" :key="index" )
      img(:src="resolveImagePath(item.cover)" :alt="item.name")
      p.card-title {{ item.title }}
</template>

<script>
export default {
  name: 'RowList',
  props: {
    title: String,
    items: Array
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    resolveImagePath(imagePath) {
      return `src${imagePath}`
    }
  }
}
</script>
<style lang="stylus" scoped>
.row-list
  padding: 8px
  width: 100%
  background-color: white

  .list-header
    display: flex
    justify-content: space-between
    align-items: center
    padding-left: 16px
    padding-right: 2rem
    border-bottom: 1px solid #ccc

    .list-title
      font-size: 18px
      font-weight: bold

    .view-all
      font-size: 14px
      color: #007bff
      cursor: pointer
      font: 14px / 16px Arial, '-apple-system', Simsun
      color: #a6a6a6

  .list-container
    display: flex
    overflow-x: auto
    overflow-y: hidden  // Ngăn chặn cuộn theo trục y
    gap: 20px
    padding: 10px 0
    scroll-snap-type: x mandatory

    .card
      flex: 0 0 calc((100% - 70px) / 4)
      border-radius: 5px
      cursor: pointer
      scroll-snap-align: start

      img
        width: 100%
        height: 130px
        object-fit: cover
        transition: background-color 0.3s

      &:hover
        background-color: #f0f0f0

      .card-title
        font-size: 13px
        margin-top: 10px
        text-align: center
        color: #666
        max-height: 2rem

    @media (min-width: 768px)
      .card
        flex: 0 0 calc((100% - 90px) / 6)
</style>
