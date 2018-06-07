<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav=false"></TheSidenav>
    <nuxt/>
    <TheFooter @footerToggle="displayFooter = !displayFooter"></TheFooter>
    <TheFooterBody :show="displayFooter" @close="displayFooter=false"></TheFooterBody>
  </div>
</template>

<script type="text/javascript">
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheFooter from '@/components/Navigation/TheFooter'
import TheFooterBody from '@/components/Navigation/TheFooterBody'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    TheFooterBody
  },
  data() {
    return {
      displaySidenav: false,
      displayFooter: false
    }
  },
  mounted() {
    let self = this;
    window.addEventListener('keyup', function(event) {
      if (event.key == "Escape") {
        self.displaySidenav = false
      }
    })
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
