<template lang="html">
  <div class="footer-container">
    <footer class="the-footer">
        <TheFooterToggle @toggle="$emit('footerToggle')" />
    </footer>
  </div>
</template>

<script>
import TheFooterToggle from "@/components/Navigation/TheFooterToggle"

export default {
  components: {
    TheFooterToggle
  }
}
</script>

<style lang="css">
  .the-footer {
    width: 100%;
    background-color: rgba(0,0,255, 0);
    height: 5vh;
    z-index: 100;
    position: fixed;
    left: 0;
    bottom: 0;
    color: white;
    text-align: center;
  }
</style>
