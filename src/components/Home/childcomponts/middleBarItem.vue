<template>
  <div class="middle-bar-item">
    <slot name="middle-left"></slot>
    <slot name="middle-right"></slot>
  </div>
</template>

<script>
export default {
  name: "middleBarItem"
}
</script>

<style scoped>
  .middle-bar-item{
    display: flex;
    justify-content: space-around;
  }
</style>
