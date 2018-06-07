<template lang="html">
  <div class="search-wrappr">
    <label><i class="fa fa-tag"></i></label>
    <input @input="$emit('input', $event.target.value)" type="text" placeholder="Search title.."/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
.search-wrapper {
  position: relative;
}

input {
  padding: 8px 18px;
  color: rgba(0,0,0,.70);
  border: 1px solid rgba(0,0,0,.12);
  transition: .15s all ease-in-out;
  background: white;
}
input:focus {
  outline: none;
  transform: scale(1.05);
}
input::-webkit-input-placeholder {
      font-size: 13px;
      color: rgba(0,0,0,.50);
      font-weight: 100;
}

.fa-tag {
  position: absolute;
}

</style>
