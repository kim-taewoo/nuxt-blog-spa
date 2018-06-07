<template>
  <div>
    <nuxt/>
  </div>
</template>

<script type="text/javascript">
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
html {
  font-family: 'Oswald', sans-serif;
}

body {
  margin: 0;
}
</style>
