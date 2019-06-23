<template>
  <svg
    :class="$style['svg']"
    :viewBox="viewBox">
    <use :xlink:href="`#${glyph}`" />
  </svg>
</template>

<script>
import icons from '@/assets/icons'

export default {
  name: 'ui-icon',

  props: {
    glyph: {
      type: String,
      required: true,
      default: ''
    }
  },

  data: () => ({
    id: '',
    viewBox: ''
  }),

  created () {
    icons.forEach(icon => {
      this.id = icon.id
      this.viewBox = icon.viewBox
    })
  }
}

</script>

<style lang="stylus" module>
.svg
  width: 16px
  height: 16px
  vertical-align: middle
</style>
