<template lang="pug">
div.ranking-container
  h2.list-title {{ title }}
  ul.ranking-list
    li.ranking-item(v-for="(item, index) in items" :key="index" :class="`no${index + 1}`")
      div.book-info.fl
        div.info-wrap
          h3(style="font-family: Arial;") NO.{{ index + 1 }}
          h4.text-left
            a.link(:href="item.link", style="text-decoration: none; color: inherit; font-size: 14px; font-weight: 300; font-family: 'Roboto', sans-serif;") {{ item.name }}
          p.digital.text-left
            em {{ item.chapters }} 
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = 'https://truyen.tangthuvien.vn/images/default-avatar.jpeg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.ranking-container
  @media (min-width :768px)
    width 22rem
  @media (min-width:1000px)
    width 28rem
  @media (min-width:1200px)
    width 16rem
  @media (min-width:1400px)
    width 18rem
  background-color #fff

  box-shadow 0 1px 3px rgba(0, 0, 0, 0.1)

.list-title
  font-size 1.5rem
  padding 1rem 0rem
  text-align: center
  font-size: 16px;
  font-weight: bold;
  font-family: Arial;
  background-color: #f0f0f0
  margin: 0 auto
  border-bottom 1px solid #f0f0f0
.ranking-list
  list-style none
  padding 0
  margin 0

.ranking-item
  padding 12px
  border-bottom 1px solid #f0f0f0
  display flex
  justify-content space-between



.book-info
  flex 1
  display flex
  flex-direction column
  justify-content space-between
  align-items flex-start

  .info-wrap
    display flex
    justify-content space-between
    align-items center
    width 100%

  h3
    margin 0
    font-size 1rem



  h4
    margin 0
    font-size 1.25rem

  p.digital
    margin 0
    font-size 0.875rem
    color #777
</style>
