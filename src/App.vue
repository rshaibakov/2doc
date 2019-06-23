<template>
  <main
    id="app"
    :class="$style['container']">
    <RouterView />
  </main>
</template>

<style lang="stylus" module>
.container
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $color-secondary-dark
</style>
