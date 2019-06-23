import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 0,
    isValidForm: false
  },

  mutations: {
    SET_CURRENT_STEP (state, payload) {
      state.currentStep = payload
    },

    SET_VALID_FORM (state, payload) {
      state.isValidForm = payload
    }
  },

  actions: {
    setCurrentStep ({ commit }, payload) {
      commit('SET_CURRENT_STEP', payload)
    },

    setValidForm ({ commit }, payload) {
      commit('SET_VALID_FORM', payload)
    }
  }
})
