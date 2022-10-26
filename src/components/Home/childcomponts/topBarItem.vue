<template>
  <div class="top-bar-item">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>

</template>

<script>
export default {
  name: "topBarItem"
}
</script>

<style scoped>
  .top-bar-item{
    display: flex;
    justify-content: space-between;
  }

</style>
