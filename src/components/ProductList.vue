<template>
  <div class="container">
    <Product v-for="(product, index) in products" :product="product" :key="index" />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Product from './Product.vue'

  export default {
    name: 'ProductList',
    components: {
      Product
    },
    computed: {
      ...mapGetters({
        products: 'filteredProducts'
      })
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
