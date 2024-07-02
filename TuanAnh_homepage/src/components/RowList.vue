<template lang="pug">
div.row-list
  h2.list-title {{ title }}
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
  padding: 8px;
  width: 100%;
  background-color: white;

  .list-title {
    font-size: 18px;
    font-weight: bold;
    padding-left: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }

  .list-container {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 10px 0;
    scroll-snap-type: x mandatory;


    &::-webkit-scrollbar {
      display: none;
    }

    .card {
      flex: 0 0 calc((100% - 70px) / 4);
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;
      scroll-snap-align: start;

      img {
        width: 100%;
        height: 130px;
        object-fit: cover;
        border-radius: 5px;
        transition: background-color 0.3s;
      }

      &:hover {
        background-color: #f0f0f0;
      }

      .card-title {
        font-size: 13px;
        margin-top: 10px;
        text-align: center;
        color: #666;
      }
    }

    @media (min-width: 768px) {
      .card {
        flex: 0 0 calc((100% - 90px) / 6);
      }
    }
  }
</style>
