<template>
  <label :class="$style['container']">
    <div
      v-if="label"
      :class="{
        [$style['label']]: true,
        [$style['label--error']]: hasError,
        [$style['label--success']]: hasSuccess
      }">
      {{ label }}
    </div>

    <div
      :class="{
        [$style['field']]: true,
        [$style['field--error']]: hasError,
        [$style['field--success']]: hasSuccess
      }">

      <input
        v-bind="$attrs"
        :value="value"
        :class="$style['field__form']"
        v-on="listeners">

      <UiIcon
        :class="$style['field__icon']"
        :glyph="icon" />
    </div>

    <div
      v-if="message"
      :class="{
        [$style['message']]: true,
        [$style['message--error']]: hasError,
        [$style['message--success']]: hasSuccess
      }">
      {{ message }}
    </div>
  </label>
</template>

<script>
import UiIcon from '@/components/Icon.vue'

export default {
  name: 'ui-input',

  components: {
    UiIcon
  },

  inheritAttrs: false,

  model: {
    value: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },

    label: {
      type: [String, Number],
      required: false,
      default: ''
    },

    message: {
      type: [String, Number],
      required: false,
      default: ''
    },

    hasError: {
      type: Boolean,
      required: false,
      default: false
    },

    hasSuccess: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      mapIcons: {
        hasError: 'close',
        hasSuccess: 'check'
      }
    }
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        change: event => this.$emit('change', event.target.value)
      }
    },

    icon () {
      if (this.hasError) {
        return this.mapIcons.hasError
      }

      if (this.hasSuccess) {
        return this.mapIcons.hasSuccess
      }

      return ''
    }
  }
}
</script>

<style lang="stylus" module>
.container
  width: 100%
  position: relative
  display: block

.label
.message
  margin-bottom: 5px
  font-size: 14px
  color: $color-secondary
  fill: $color-secondary
  text-align: left

.message
  margin-top: 5px

.label--error
.message--error
  color: $color-error

.label--success
.message--success
  color: $color-success

.field
  width: 100%
  height: 40px
  position: relative
  background: $color-primary
  border: 2px solid $color-primary
  transition: all .1s ease-out

  &:focus-within
    background: $color-primary-light
    border-color: $color-secondary

.field--error
  border-color: $color-error
  fill: $color-error

  &:focus-within
    border-color: $color-error-dark

.field--success
  border-color: $color-success
  fill: $color-success

  &:focus-within
    border-color: $color-success-dark

.field__form
  width: calc(100% - 30px)
  height: 100%
  padding: 0 15px
  display: inline-block
  background: transparent
  outline: none
  border: none

.field__form::placeholder
  color: $color-primary-dark

.field__form:focus::placeholder
  color: $color-primary

.field__icon
  position: absolute
  top: 50%
  right: 15px
  transform: translateY(-50%)
</style>
