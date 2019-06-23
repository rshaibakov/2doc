<template>
  <div :class="$style['container']">
    <UiSteps
      v-model="currentStep"
      :class="$style['steps']"
      :items="steps"
      :is-valid-current="isValidForm" />

    <div class="--layout--row">
      <UiInput
        v-model.trim="$v.firstName.$model"
        class="--span--12 --span--xs-24"
        label="Имя"
        placeholder="Иван"
        :has-error="$v.firstName.$error"
        :has-success="$v.firstName.$dirty && !$v.firstName.$error" />

      <UiInput
        v-model.trim="$v.lastName.$model"
        class="--span--12 --span--xs-24"
        label="Фамилия"
        placeholder="Иванов"
        :has-error="$v.lastName.$error"
        :has-success="$v.lastName.$dirty && !$v.lastName.$error" />
    </div>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import UiSteps from '@/components/Steps.vue'
import UiInput from '@/components/Input.vue'

export default {
  name: 'v-home',

  components: {
    UiSteps,
    UiInput
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
    },

    firstName: {
      get () {
        return this.$store.state.firstName
      },

      set (value) {
        this.$store.dispatch('setFirstName', value)
      }
    },

    lastName: {
      get () {
        return this.$store.state.lastName
      },

      set (value) {
        this.$store.dispatch('setLastName', value)
      }
    }
  },

  validations: {
    firstName: {
      required,
      maxLength: maxLength(255)
    },

    lastName: {
      required,
      maxLength: maxLength(255)
    }
  }
}
</script>

<style lang="stylus" module>
.container
  max-width: 960px
  padding: 30px 50px

.steps
  margin-bottom: 20px
</style>
