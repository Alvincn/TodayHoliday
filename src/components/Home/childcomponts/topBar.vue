<template>
  <div class="top-bar">
    <top-bar-item>
      <div id="left" slot="left">
        <img src="../../../assets/img/back.png"  alt="">
      </div>
      <div id="center" slot="center">
        <img src="../../../assets/img/safe.png" alt="">请假
      </div>
      <div id="right" slot="right">
        <h5>反馈</h5>
      </div>
    </top-bar-item>
  </div>
</template>

<script>
import topBarItem from "./topBarItem";

export default {
  name: "topBar",
  components: {
    topBarItem
  }
}
</script>

<style scoped>
  @media screen and (max-width:650px){
    .top-bar{
      width: 100%;
      height: 50px;
      border-bottom: gray 1px solid;
    }
    #left img{
      height: 25px;
      margin-left: 20px;
      position: relative;
      top: 12px;
    }
    #center img{
      height: 25px;
      width: 28px;
      margin-right: 7px;
      position: relative;
      top: 5px;
    }
    #center{
      line-height: 50px;
      font-size: 1rem;
    }
    #right{
      line-height: 50px;
      margin-right: 20px;
      color: red;
    }
  }
</style>
