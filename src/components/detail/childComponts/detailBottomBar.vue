<template>
  <div class="detail-bottom-bar">
    <div class="forward">
      转发
    </div>
    <div class="sDelete">
      申请销假
    </div>
    <div class="delete">
      去销假
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar"
}
</script>

<style scoped>
  .detail-bottom-bar{
    position: relative;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    text-align: center;
  }
  .forward{
    border-right: solid gray 1px;
    width: 33%;
  }
  .sDelete{
    width: 33%;
    border-right: solid gray 1px;

  }
  .delete{
    width: 34%;
    background-color: rgb(54, 152, 253);
    color: white;
  }
</style>
