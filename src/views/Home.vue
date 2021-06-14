<template>
  <div class="home">
    <div class="header">
      <span>Category: <strong>{{selectedCategory}}</strong> | Manufacturer: <strong>{{selectedManufacturer}}</strong></span>
    </div>
    <ProductList />
  </div>
</template>

<script>

import ProductList from '@/components/ProductList.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  computed: {
    ...mapState({
      selectedCategory: state => state.selectedCategory || 'All',
      selectedManufacturer: state => state.selectedManufacturer || 'All'
    })
  }
}
</script>

<style scoped>
.header{
  padding: 20px 0;
  font-size: 20px;
  background: lightgoldenrodyellow;
}
</style>
