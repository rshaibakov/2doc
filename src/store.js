import Vue from 'vue'
import Vuex from 'vuex'
import request from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStep: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comments: ''
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
    },

    SET_COMMENTS (state, payload) {
      state.comments = payload
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
    },

    setComments ({ commit }, payload) {
      commit('SET_COMMENTS', payload)
    },

    async placeOrder ({ state, commit }) {
      const res = await request.post('/api/', {
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        email: state.email,
        comments: state.comments
      })

      console.log(res)
    }
  }
})
