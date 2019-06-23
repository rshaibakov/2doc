<template>
  <UiField
    v-bind="$attrs"
    :class="$style['field']">
    <textarea
      v-bind="$attrs"
      :class="$style['field__form']"
      :value="value"
      v-on="listeners" />
  </UiField>
</template>

<script>
import UiField from '@/components/Field.vue'

export default {
  name: 'ui-text-area',

  components: {
    UiField
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
    }
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        change: event => this.$emit('change', event.target.value)
      }
    }
  }
}
</script>

<style lang="stylus" module>
.field
  position: relative

.field__form
  width: calc(100% - 30px)
  height: 100%
  min-height: 150px
  padding: 15px
  display: inline-block
  background: transparent
  outline: none
  border: none

.field__form::placeholder
  color: $color-primary-dark

.field__form:focus::placeholder
  color: $color-primary
</style>
