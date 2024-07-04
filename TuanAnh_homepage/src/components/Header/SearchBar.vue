<template lang="pug">
div.search-bar
  input(type="text" placeholder="Tìm kiếm..." v-model="searchQuery")
  button(@click="performSearch") Tìm kiếm
</template>

<script>
export default {
  name: 'SearchBarComponent',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    performSearch() {
      console.log('Search query:', this.searchQuery)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  display flex
  justify-content center
  padding 10px
  width 100%

input
  padding 10px
  font-size 1em
  border 1px solid #ccc
  border-radius 5px
  width 80%
  margin-right 10px

button
  padding 10px
  font-size 1em
  border none
  border-radius 5px
  background-color #42b983
  color white
  cursor pointer
  width 20%

  &:hover
    background-color darken(#42b983, 10%)
</style>
