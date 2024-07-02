<template lang="pug">
div.background
 div.list-component
  h2.list-title {{ title }}
  div.list-container
    div.row(v-for="(row, index) in rows" :key="index")
         div.card(v-for="(item, idx) in row" :key="idx" )
           img(:src="item.image" :alt="item.name")
           p.card-title {{ item.name }}
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
.background {
  width: 100%;
  background-color: white;
  padding: 8px;
}

.list-component {
  width: 100%;
  background-color: white;
  padding: 8px;
}

.list-title {
  font-size: 18px;
  font-weight: bold;
  padding-left: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
}

.list-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 16px;
  width: 45%;
  margin: 0 auto
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.card img {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 5px;
}

.card:hover {
  background-color: #f0f0f0;
}

.card-title {
  font-size: 13px;
  margin-top: 10px;
  text-align: center;
  color: #666;
}
</style>
