<template>
  <div class="middle-bar">
    <middle-bar-item>
      <div class="middle-left" slot="middle-left">
        <h2>请假记录</h2>
      </div>
      <div class="middle-right" slot="middle-right">
        <h2>无需审批记录</h2>
      </div>
    </middle-bar-item>
  </div>
</template>

<script>
import middleBarItem from "./middleBarItem";


export default {
  name: "middle-bar",
  components: {
    middleBarItem
  }
}
</script>

<style scoped>
  .middle-bar{
    font-size: .5rem;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 3px;
  }
  .middle-left{
    color: rgba(39, 149, 254, 1);
    border-bottom: solid 3px rgba(39, 149, 254, 1);
  }
  .middle-left h2{
    margin: 0 15px;
  }
</style>
