<template>
  <div :class="$style['container']">
    <UiSteps
      v-model="currentStep"
      :items="steps"
      :is-valid-current="isValidForm" />
  </div>
</template>

<script>
import UiSteps from '@/components/Steps.vue'

export default {
  name: 'v-home',

  components: {
    UiSteps
  },

  data () {
    return {
      steps: ['Основные данные', 'Адрес доставки']
    }
  },

  computed: {
    currentStep: {
      get () {
        return this.$store.state.currentStep
      },

      set (value) {
        this.$store.dispatch('setCurrentStep', value)
      }
    },

    isValidForm: {
      get () {
        return this.$store.state.isValidForm
      },

      set (value) {
        this.$store.dispatch('setValidForm', value)
      }
    }
  }
}
</script>

<style lang="stylus" module>
.container
  padding: 30px 50px
</style>
