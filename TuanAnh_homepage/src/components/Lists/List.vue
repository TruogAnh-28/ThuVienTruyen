<template lang="pug">
div.list-container
  .list-header
    h2.list-title {{ title }}
    span.view-all Tất cả
  div.content
    div.first-item
      div.book-img 
        img(:src="resolveImagePath(firstItem.cover)" :alt="firstItem.name")
      div.book-info
        h3.name {{ (firstItem.title) }}
        p.author {{ firstItem.author }}
        p.chapters
            b.number {{firstItem.chapter}}
            span.chapter chương
        p.desc_short {{ truncateDesc(firstItem.desc_short) }}
    div.center
      ul.list
        li.card(v-for="(item, index) in filteredItems" :key="index" @click="navigateTo(item.route)")
          div.card-content
            div.book-img 
              img(:src="resolveImagePath(item.cover)" :alt="item.name")
            div.book-info
              h3.name {{ truncateTitle(item.title) }}
              p.desc_short {{ truncateDesc(item.desc_short) }}
              p.author {{ item.author }}
</template>

<script>
export default {
  name: 'List',
  props: {
    title: String,
    items: Array
  },
  computed: {
    firstItem() {
      // Getting the first item
      return this.items[0]
    },
    filteredItems() {
      // Slicing the items array to get elements from index 1 to 9
      return this.items.slice(1, 10)
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    truncateTitle(title) {
      const wordsTitle = title.split(' ')
      if (wordsTitle.length > 4) {
        return wordsTitle.slice(0, 4).join(' ') + ','
      }
      return title
    },
    truncateDesc(desc_short) {
      const words = desc_short.split(' ')
      if (words.length > 14) {
        return words.slice(0, 14).join(' ') + '...'
      }
      return desc_short
    },
    resolveImagePath(imagePath) {
      return `src${imagePath}`
    }
  }
}
</script>
<style lang="stylus" scoped>
.list-container
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

.list-header
  display: flex
  padding-left: 24px
  justify-content: space-between
  align-items: center

.list-title
  font-size: 18px
  font-weight: bold
  line-height: 25px
  overflow: hidden
  color: #1a1a1a
  font-family: arial
.view-all
      font-size: 14px
      color: #007bff
      cursor: pointer
      font: 14px / 16px Arial, '-apple-system', Simsun;
      color: #a6a6a6;
      padding-right: 2rem
.content
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: space-between
  background-color: white
  width: 100%
  border-top: 1px solid #666
  border-bottom: 1px solid #666

.first-item
  cursor pointer
  overflow: hidden
  width: 20%
  height: 32rem
  background: #f7f5f0
  .book-img
    position: relative
    z-index: 1
    height: 16rem
    padding: 30px 40px 0
    object-fit: cover;
    text-align: center
    img

      transition: transform .3s ease-out
      overflow-clip-margin: content-box
      overflow: clip
      max-width: 100%
      max-height: 16rem

  .book-info
    .name
      cursor pointer
      font: 700 16px / 24px Arial, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif
      overflow: hidden
      height: 24px
      margin-bottom: 5px
      text-align: center
    .desc_short
      font: 12px / 20px Arial, '-apple-system', Simsun
      overflow: hidden
      height: 70px
      margin-bottom: 00px
      text-align: left
      color: #626260
      padding 0px 20px
    .author
      cursor pointer
      font: 12px / 16px Arial, '-apple-system', Simsun
      padding: 3px 0 5px
      color: #bf2c24
      text-align: center
      margin:0
    .chapters
      text-align: center
      .number
          margin-right: 6px
.center
  flex: 1
  display: flex
  align-items: center
  padding-left: 2rem
  width: 80%
  .list
    display: flex
    flex-wrap: wrap
    box-sizing: border-box
    list-style: none
    padding: 0

    .card
      margin: 10px
      border-bottom: 1px solid #eeeeee;
      box-sizing: border-box
      .card-content
        display: flex
        .book-img
          margin-right: 10px
          img
            box-shadow: 0 1px 6px rgba(0, 0, 0, .35), 0 0 5px #f9f2e9 inset
            cursor: pointer
            width: 72px
            height: 120px
            margin-bottom: 12px
            object-fit: cover
        .book-info
          flex-direction: column
          justify-content: space-between
          width: 100%
          .name
            cursor pointer
            color: #1a1a1a
            margin: 0
            height: 21px
          .desc_short
            color: #666
          .author
            margin-top: 0 auto
            cursor pointer
            font-family: Arial, '-apple-system', Simsun
            font-size: 14px
            line-height: 18px
            color: #a6a6a6

@media (min-width: 1000px)
  .list-header
    width: 63rem
  .content
    width: 63rem
  .center .list .card
    width: 14rem
  .center .list .card .card-content .book-info .name
    font: 600 14px / 21px Arial, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif
    margin: 0
  .center .list .card .card-content .book-info .desc_short
    font: 12px / 20px Arial, '-apple-system', Simsun
    margin: 4px 0px

@media (min-width: 1200px)
  .list-header
    width: 75rem
  .content
    width: 75rem
  .center .list .card
    width: 18rem
  .center .list .card .card-content .book-info .name
    font: 600 16px / 21px Arial, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif
  .center .list .card .card-content .book-info .desc_short
    font: 14px / 20px Arial, '-apple-system', Simsun
    margin: 8px 0px

@media (min-width: 1400px)
  .list-header
    width: 90rem
  .content
    width: 90rem
  .center .list .card
    width: 22rem
</style>
