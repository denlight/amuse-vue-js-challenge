<template>
  <div id="app">
    <v-row class="body-container">

      <v-col cols="3">
        <SideBar/>
      </v-col>
 
      <v-col cols="9">
        <router-view/>
      </v-col>

    </v-row>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import SideBar from './components/SideBar.vue'
  export default {
    name: 'App',
    components: {
      SideBar
    },
    computed: {
      ...mapState({
      })
    },
    methods: {
      ...mapActions({
        'getCategories': 'getCategories',
        'getProducts': 'getProducts',
      })
    },
    async created() {
      await this.getProducts()
      await this.getCategories()
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
