<template lang="pug">
div.genre-list
  h3.list-title Thể loại
  div.list-container
    div.row(v-for="(row, index) in genreRows" :key="index" :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }")
      div.genre(v-for="(genre, genreIndex) in row" :key="genreIndex" class="genre")
        span.genre-name {{ genre }}
</template>
<script>
import constants from '@/z_data/constants.json'

export default {
  name: 'Category',
  data() {
    return {
      genres: constants.type
    }
  },
  computed: {
    genreRows() {
      const rows = []
      for (let i = 0; i < this.genres.length; i += 2) {
        const row = this.genres.slice(i, i + 2)
        rows.push(row)
      }
      return rows
    }
  }
}
</script>
<style lang="stylus" scoped>
.genre-list
  padding 0 8px
  width 28rem
  background-color white
  margin 0 auto
  text-align: center

  .list-title
    border: 1px solid #e6e6e6;
    font-size 18px
    font-weight bold
    text-align center
    background-color #fcfcfa
    margin 0 auto
    padding 12px 0

  .list-container
    width 100%

  .row
    border: 1px solid #e6e6e6;
    display flex
    justify-content space-between
    padding 5px 0

  .even-row
    background-color #f0f0f0

  .odd-row
    background-color #fcfcfa

  .genre
    flex 1 0 calc(50% - 10px)
    padding 10px 6px
    cursor pointer
    transition background-color 0.3s

    &:hover
      .genre-name
        color red // Red text color on hover

  .genre-name
    font-size 16px
    color #333
    text-align center

@media (min-width: 1010px)
  .list-title
    display none
</style>
