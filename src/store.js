import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  },

  mutations: {
    SET_CURRENT_STEP (state, payload) {
      state.currentStep = payload
    },

    SET_FIRST_NAME (state, payload) {
      state.firstName = payload
    },

    SET_LAST_NAME (state, payload) {
      state.lastName = payload
    },

    SET_PHONE (state, payload) {
      state.phone = payload
    },

    SET_EMAIL (state, payload) {
      state.email = payload
    }
  },

  actions: {
    setCurrentStep ({ commit }, payload) {
      commit('SET_CURRENT_STEP', payload)
    },

    setFirstName ({ commit }, payload) {
      commit('SET_FIRST_NAME', payload)
    },

    setLastName ({ commit }, payload) {
      commit('SET_LAST_NAME', payload)
    },

    setPhone ({ commit }, payload) {
      commit('SET_PHONE', payload)
    },

    setEmail ({ commit }, payload) {
      commit('SET_EMAIL', payload)
    }
  }
})
