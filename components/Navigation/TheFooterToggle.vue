<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <h3>Contact</h3>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: block;
  color:white;
  height: 100%;
  width: 75px;
  cursor: pointer;
  margin: 0 10px 0 auto;
  background-color: dimgray;
  border-radius: 8px 8px 0 0;
  text-align: center;
  position: relative;
  z-index: 50;
}

h3 {
  font-size: 16px;
  font-size: 3vh;
  margin: 0;
}

.btm-image {
  margin: auto;
}

</style>
