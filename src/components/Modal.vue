<template>
  <div
    :class="$style['container']"
    role="alert">
    <UiIcon
      :class="$style['close']"
      glyph="close"
      role="button"
      @click.native="close()" />

    <div :class="$style['content']">
      <slot />
    </div>
  </div>
</template>

<script>
import UiIcon from '@/components/Icon'

export default {
  name: 'ui-modal',

  components: {
    UiIcon
  },

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" module>
.container
  position: fixed
  top: 0
  left: 0
  z-index: $z-index-900
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background: alpha($color-secondary-dark, 75%)
  color: $color-primary

.close
  position: absolute
  top: 30px
  right: 30px
  width: 30px
  height: 30px
  fill: $color-primary-dark
  cursor: pointer

.content
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center
</style>
