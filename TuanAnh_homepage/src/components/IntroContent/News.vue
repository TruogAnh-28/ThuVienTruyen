<template lang="pug">
div.news-list
  h2.list-title.odd-row Tin tức
  div.list-container
    div.row(v-for="(news, index) in newsList" :key="index" :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }")
      span.news-title {{ news.title }}
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newsList: [
        { title: 'News 1', link: '#', date: '2023-07-01' },
        { title: 'News 2', link: '#', date: '2023-07-02' },
        { title: 'News 3', link: '#', date: '2023-07-03' },
        { title: 'News 4', link: '#', date: '2023-07-04' },
        { title: 'News 5', link: '#', date: '2023-07-05' }
      ]
    }
  },
  computed: {
    newsRows() {
      const rows = []
      for (let i = 0; i < this.newsList.length; i += 2) {
        const row = this.newsList.slice(i, i + 2)
        rows.push(row)
      }
      return rows
    }
  }
}
</script>
<style lang="stylus" scoped>
.news-list
  padding: 0 8px;
  width: 28rem;
  background-color: white;
  margin: 0 auto;


  .list-title
    font-size: 18px;
    font-weight: bold;
    padding-left: 16px;
    margin: 0
    text-align: center
    padding: 10px 6px;
    border: 1px solid #e6e6e6;
  .list-container
    width: 100%;

  .row
    border: 1px solid #e6e6e6;
    padding: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover
      .news-title
         color:red

  .even-row
    background-color: #f0f0f0; /* Light gray background for even rows */

  .odd-row
    background-color: #fcfcfa; /* White background for odd rows */

  .news-title
    font-size: 16px;
    color: #333;
    text-align: center;
    display: block; /* Ensure the title spans the full width */

@media (max-width: 600px)
  .news-title
    flex: 1 0 100%;
</style>
