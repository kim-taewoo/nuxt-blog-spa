<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar-second"></div>
    <div class="bar-third"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 32px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 60%;
  height: 2px;
  background-color: white;
}
.drawer-toggle .bar-second {
  width: 75%;
  height: 2px;
  background-color: white;
}
.drawer-toggle .bar-third {
  width: 60%;
  height: 1px;
  background-color: white;
}

</style>
