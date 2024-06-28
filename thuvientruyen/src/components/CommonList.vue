<template lang="pug">
div.list
  h2.list-title {{ title }}
  div.list-container
    div.row(v-for="(row, index) in rows" :key="index")
      div.item(v-for="(item, idx) in row" :key="idx" )
        img(:src="item.image" :alt="item.name")
        div.info
          p.item-title {{ item.name }}
          
          div.item-details
          
            p.item-genre Thể Loại: {{ item.genre }}
            p.item-author Tác giả: {{ item.author }}
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    title: String,
    items: Array
  },
  computed: {
    rows() {
      const rows = []
      let currentRow = []
      for (let i = 0; i < this.items.length; i++) {
        currentRow.push(this.items[i])
        if (currentRow.length === 3 || i === this.items.length - 1) {
          rows.push(currentRow)
          currentRow = []
        }
      }
      return rows
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>
<style lang="stylus" scoped>
.list {
  padding: 8px;
  width: 100%;
  background-color: white;

  .list-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-left: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }

  .list-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    margin: 0 auto;
  }

  .item {
    display: flex;

    align-items: flex-start;

    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #f0f0f0;
    }

    img {
      width: 100px;
      height: 120px;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-left: 8px;

      p {
        margin: 5px 0;
      }

      .item-title {
        font-size: 16px;
        font-weight: bold;
      }

      .item-details {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
