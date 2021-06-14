<template>
  <v-navigation-drawer absolute permanent>
    <v-list-item @click="goToHome()" class="action">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Amuse
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="(category, index) in categories"
        :key="index"
        @click="goToCategory(category)"
        link>

        <v-list-item-content>
          <v-list-item-title>{{ category }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    name: 'SideBar',
    computed: {
      ...mapState({
        categories: state => state.categories
      })
    },
    methods: {
      goToCategory(category) {
        let query = {
          ...this.$route.query
        }
        query.category = category
        this.$router.push({name: 'Home', query})
      },
      goToHome() {
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>

<style lang="scss">
  .action {
    cursor: pointer;
  }
</style>
