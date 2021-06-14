import Vue from 'vue'
import Vuex from 'vuex'
import {AmuseService} from '../AmuseService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    selectedCategory: '',
    selectedManufacturer: ''
  },
  getters: {
    filteredProducts: state => {
      return state.products
        .filter(product => product.category.includes(state.selectedCategory))
        .filter(product => product.manufacturer.includes(state.selectedManufacturer))
    }
  },
  mutations: {
    storeCategories(state, payload) {
      state.categories = payload
    },
    storeProducts(state, payload) {
      state.products = payload
    },
    storeCategory(state, payload) {
      state.selectedCategory = payload
    },
    storeManugacturer(state, payload) {
      state.selectedManufacturer = payload
    }
  },
  actions: {
    async getCategories({commit}) {
      const categories = await AmuseService.getCategories()
      commit('storeCategories', categories)
    },
    async getProducts({commit}) {
      const products = await AmuseService.getProducts()
      commit('storeProducts', products)
    },
    setCategory({commit}, payload) {
      commit('storeCategory', payload)
    },
    setManugacturer({commit}, payload) {
      commit('storeManugacturer', payload)
    }
  },
  modules: {
  }
})
