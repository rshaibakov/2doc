import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 0,
    isValidForm: false,
    firstName: '',
    lastName: '',
    phone: ''
  },

  mutations: {
    SET_CURRENT_STEP (state, payload) {
      state.currentStep = payload
    },

    SET_VALID_FORM (state, payload) {
      state.isValidForm = payload
    },

    SET_FIRST_NAME (state, payload) {
      state.firstName = payload
    },

    SET_LAST_NAME (state, payload) {
      state.lastName = payload
    },

    SET_PHONE (state, payload) {
      state.phone = payload
    }
  },

  actions: {
    setCurrentStep ({ commit }, payload) {
      commit('SET_CURRENT_STEP', payload)
    },

    setValidForm ({ commit }, payload) {
      commit('SET_VALID_FORM', payload)
    },

    setFirstName ({ commit }, payload) {
      commit('SET_FIRST_NAME', payload)
    },

    setLastName ({ commit }, payload) {
      commit('SET_LAST_NAME', payload)
    },

    setPhone ({ commit }, payload) {
      commit('SET_PHONE', payload)
    }
  }
})
