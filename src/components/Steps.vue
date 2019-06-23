<template>
  <div :class="$style['container']">
    <div
      v-for="(item, key) in items"
      :key="key"
      :class="{
        [$style['item']]: true,
        [$style['item--active']]: key === value,
        [$style['item--allowed']]: key === value + 1 && isValidCurrent
      }"
      role="button"
      @click="select(key)">
      <span :class="$style['item__number']">
        {{ key + 1 }}
      </span>

      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-steps',

  model: {
    value: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: [String, Number],
      required: true,
      default: ''
    },

    items: {
      type: Array,
      required: true,
      default: () => ([])
    },

    isValidCurrent: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    select (value) {
      if (!this.isValidCurrent) {
        return
      }

      this.$emit('change', value)
    }
  }
}
</script>

<style lang="stylus" module>
.container
  display: flex
  flex-flow: row nowrap

.item
  height: 50px
  padding: 0 20px
  position: relative
  display: flex
  align-items: center
  background: $color-primary
  color: $color-secondary
  transition: all .1s ease-out
  cursor: not-allowed

  &:not(:first-child)
    padding-left: 40px

  &:not(:last-child):after
    content: ''
    width: 0
    height: 0
    position: absolute
    top: 0
    right: -20px
    z-index: $z-index-100
    border-style: solid
    border-width: 25px 0 25px 20px
    border-color: transparent transparent transparent $color-primary
    transition: all .1s ease-out

.item--active
  background: $color-accent
  color: $color-secondary-dark
  cursor: default

  &:not(:last-child):after
    border-color: transparent transparent transparent $color-accent

.item--allowed
  cursor: pointer

.item__number
  width: 20px
  height: 20px
  margin-right: 10px
  display: inline-block
  border-radius: 50%
  font-size: 12px
  line-height: 20px
  font-weight: 700
  transition: all .1s ease-out

.item .item__number
  background: $color-primary-dark

.item--active .item__number
  background: $color-primary

.item--allowed .item__number
  background: $color-accent

</style>
