<template>
  <div :class="$style['container']">
    <UiSteps
      v-model="currentStep"
      :class="$style['steps']"
      :items="steps"
      :is-valid-current="isValidForm" />

    <template v-if="currentStep === 0">
      <div class="--layout--row --m--b-xl">
        <UiInput
          v-model.trim="$v.firstName.$model"
          class="--span--12 --span--xs-24"
          type="text"
          label="Имя"
          placeholder="Иван"
          :has-error="$v.firstName.$error"
          :has-success="$v.firstName.$dirty && !$v.firstName.$error"
          :message="firstNameError" />

        <UiInput
          v-model.trim="$v.lastName.$model"
          class="--span--12 --span--xs-24"
          type="text"
          label="Фамилия"
          placeholder="Иванов"
          :has-error="$v.lastName.$error"
          :has-success="$v.lastName.$dirty && !$v.lastName.$error"
          :message="lastNameError" />
      </div>

      <div class="--layout--row --m--b-xl">
        <UiInput
          v-model.trim="$v.phone.$model"
          class="--span--24"
          type="tel"
          label="Телефон"
          mask="+7 (###) ####-##-##"
          placeholder="+7 (999) 999-99-99"
          :has-error="$v.phone.$error"
          :has-success="$v.phone.$dirty && !$v.phone.$error"
          :message="phoneError" />
      </div>

      <div class="--layout--row --m--b-xxl">
        <UiInput
          v-model.trim="$v.email.$model"
          class="--span--24"
          type="email"
          label="Email"
          placeholder="example@example.com"
          :has-error="$v.email.$error"
          :has-success="$v.email.$dirty && !$v.email.$error"
          :message="emailError" />
      </div>

      <footer
        :class="$style['footer']"
        class="--layout--row" >
        <div class="--span--24">
          <UiButton
            :disabled="!isValidForm"
            icon="arrow-right"
            @click="nextForm()">
            Продолжить
          </UiButton>
        </div>
      </footer>
    </template>
  </div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'
import UiSteps from '@/components/Steps.vue'
import UiInput from '@/components/Input.vue'
import UiButton from '@/components/Button.vue'

export default {
  name: 'v-home',

  components: {
    UiSteps,
    UiInput,
    UiButton
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

    isValidForm () {
      return !this.$v.$error &&
        !!this.firstName &&
        !!this.lastName &&
        !!this.phone &&
        !!this.email
    },

    firstName: {
      get () {
        return this.$store.state.firstName
      },

      set (value) {
        this.$store.dispatch('setFirstName', value)
      }
    },

    firstNameError () {
      if (!this.$v.firstName.$error) {
        return ''
      }

      if (!this.$v.firstName.required) {
        return 'Имя обязательно для заполнения'
      }

      if (!this.$v.firstName.maxLength) {
        return 'Имя должно быть не больше 255 символов'
      }

      return ''
    },

    lastName: {
      get () {
        return this.$store.state.lastName
      },

      set (value) {
        this.$store.dispatch('setLastName', value)
      }
    },

    lastNameError () {
      if (!this.$v.lastName.$error) {
        return ''
      }

      if (!this.$v.lastName.required) {
        return 'Фамилия обязательна для заполнения'
      }

      if (!this.$v.lastName.maxLength) {
        return 'Фамилия должна быть не больше 255 символов'
      }

      return ''
    },

    phone: {
      get () {
        return this.$store.state.phone
      },

      set (value) {
        this.$store.dispatch('setPhone', value)
      }
    },

    phoneError () {
      if (!this.$v.phone.$error) {
        return ''
      }

      if (!this.$v.phone.required) {
        return 'Телефон обязателен для заполнения'
      }

      return ''
    },

    email: {
      get () {
        return this.$store.state.email
      },

      set (value) {
        this.$store.dispatch('setEmail', value)
      }
    },

    emailError () {
      if (!this.$v.email.$error) {
        return ''
      }

      if (!this.$v.email.required) {
        return 'Email обязателен для заполнения'
      }

      if (!this.$v.email.email) {
        return 'Неверный формат email'
      }

      return ''
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
    },

    phone: {
      required
    },

    email: {
      required,
      email
    }
  },

  methods: {
    nextForm () {
      this.$v.$touch()

      if (!this.isValidForm) {
        return
      }

      this.currentStep += 1
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

.footer
  text-align: left
</style>
