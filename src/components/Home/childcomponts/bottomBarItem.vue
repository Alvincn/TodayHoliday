<template>
  <div class="bottom-bar-item">
    <h2>我要请假</h2>
  </div>
</template>

<script>
export default {
  name: "bottomBarItem"
}
</script>

<style scoped>
  .bottom-bar-item{
    width: 100%;
    height: 40px;
    background-color: rgba(50, 153, 254, 1);
    position: absolute;
    bottom: 0;
    color: white;
    font-size: .6rem;
    text-align: center;
    line-height: 40px;
    letter-spacing: 4px;
    cursor: pointer;
  }
</style>
