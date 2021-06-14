<template>
  <v-card flex justify-start>
    <v-img :src="product.image_url"></v-img>
    <v-card-title>{{product.name}}</v-card-title>
    <v-card-text v-if="product.thc_percentage">{{product.thc_percentage}}% THC</v-card-text>
    <v-card-text @click="goToMaufacturer(product.manufacturer)" class="action">{{product.manufacturer}}</v-card-text>
    <!--use something like vuetify-money for price output-->
    <v-card-text>${{product.price}}</v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      product: {}
    },
    methods: {
      goToMaufacturer(manufacturer) {
        let query = {
          ...this.$route.query
        }
        query.manufacturer = manufacturer
        this.$router.push({name: 'Home', query})
      }
    }
  }
</script>

<style scoped>
  .v-card {
    width: 31.8%;
    margin: 5px;
  }
  .action {
    cursor: pointer;
  }
</style>
