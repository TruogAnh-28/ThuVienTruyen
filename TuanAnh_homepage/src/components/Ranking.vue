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
  width 20rem
  background-color #fff
  border-radius 8px
  box-shadow 0 1px 3px rgba(0, 0, 0, 0.1)

.list-title
  font-size 1.5rem
  margin-bottom 1rem
  text-align: center
  font-size: 18px;
  font-weight: bold;
  font-family: Arial; /* Changed to Arial */

.ranking-list
  list-style none
  padding 0
  margin 0

.ranking-item
  padding 12px
  border-bottom 1px solid #f0f0f0
  display flex
  justify-content space-between

  &.no1
    background-color #ffeb3b
  &.no2
    background-color #cddc39
  &.no3
    background-color #8bc34a

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
