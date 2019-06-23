<template>
  <button
    v-bind="$attrs"
    :class="{
      [$style['container']]: true,
      [$style['--disabled']]: disabled
    }"
    :disabled="disabled"
    v-on="$listeners">
    <div
      v-if="icon"
      :class="$style['icon-place']">
      <UiIcon
        :class="$style['icon']"
        :glyph="icon" />
    </div>

    <div :class="$style['content']">
      <slot />
    </div>
  </button>
</template>

<script>
import UiIcon from '@/components/Icon'

export default {
  name: 'ui-button',

  components: {
    UiIcon
  },

  props: {
    icon: {
      type: String,
      required: false,
      default: ''
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" module>
.container
  height: 50px
  padding: 0
  display: flex
  flex-flow: row nowrap
  align-items: center
  background: $color-info
  border: none
  color: $color-primary-light
  fill: $color-primary-light
  transition: all .1s ease-out
  outline: none
  cursor: pointer

  &:hover
    background: lighten($color-info, 10%)

  &:active
    background: $color-info-dark
    transform: scale(0.9)

.--disabled
  background: $color-primary
  color: $color-primary-dark
  cursor: not-allowed

  &:hover
  &:active
    background: $color-primary
    transform: none

.icon-place
  width: 50px
  height: 50px
  display: flex
  flex-flow: row nowrap
  align-items: center
  justify-content: center
  background: alpha($color-secondary-dark, 15%)

.icon
  width: 25px
  height: 25px

.content
  padding: 0 20px
  font-size: 16px
  font-weight: 700
</style>
