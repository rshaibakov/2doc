<template>
  <UiField
    v-bind="$attrs"
    :class="$style['field']">
    <input
      v-if="!!mask"
      v-bind="$attrs"
      v-mask="mask"
      :class="$style['field__form']"
      :value="value"
      v-on="listeners" />

    <input
      v-else
      v-bind="$attrs"
      :class="$style['field__form']"
      :value="value"
      v-on="listeners" />
  </UiField>
</template>

<script>
import UiField from '@/components/Field.vue'

export default {
  name: 'ui-input',

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
    },

    mask: {
      type: String,
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
  height: 40px
  padding: 0 15px
  display: inline-block
  background: transparent
  outline: none
  border: none

.field__form::placeholder
  color: $color-primary-dark

.field__form:focus::placeholder
  color: $color-primary
</style>
