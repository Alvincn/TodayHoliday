<template>
  <div class="detail">
    <top-bar-item>
      <div class="detail-left" slot="left">
        <img src="../../assets/img/back.png" alt="">
      </div>
      <div class="detail-center" slot="center">
        <img src="../../assets/img/safe.png" alt="">请假详情
      </div>
    </top-bar-item>
    <div class="detail-middle">
      <middle-bar-item>
        <div class="detail-middle-left" slot="middle-left">
          <h2>请假信息</h2>
        </div>
        <div class="detail-middle-right" slot="middle-right">
          <h2>核验二维码</h2>
        </div>
      </middle-bar-item>
    </div>
    <why-cantdel></why-cantdel>
    <vacation></vacation>
    <dynamic-code></dynamic-code>
    <detail-middle-info></detail-middle-info>
    <specific-detail></specific-detail>
    <middle-bottom></middle-bottom>
    <detail-bottom-bar></detail-bottom-bar>

  </div>
</template>

<script>
import topBarItem from "../Home/childcomponts/topBarItem";
import middleBarItem from "../Home/childcomponts/middleBarItem";
import whyCantdel from "./childComponts/whyCantdel";
import Vacation from "./childComponts/Vacation";
import DynamicCode from "./childComponts/DynamicCode";
import detailMiddleInfo from "./childComponts/detailMiddleInfo";
import specificDetail from "./childComponts/specificDetail";
import middleBottom from "./childComponts/middleBottom";
import detailBottomBar from "./childComponts/detailBottomBar";
export default {
  name: "Detail",
  components: {
    topBarItem,
    middleBarItem,
    whyCantdel,
    Vacation,
    DynamicCode,
    detailMiddleInfo,
    specificDetail,
    middleBottom,
    detailBottomBar




  }
}
</script>

<style scoped>
  .detail{
    width: 100%;
    height: 50px;
    border-bottom: gray 1px solid;
  }
  .detail-left img{
    height: 25px;
    margin-left: 20px;
    position: relative;
    top: 12px;
  }
  .detail-center img{
    height: 25px;
    width: 28px;
    margin-right: 7px;
    position: relative;
    top: 5px;
  }
  .detail-center{
    line-height: 50px;
    font-size: 1rem;
    position: relative;
    left: -36%;
  }
  .detail-middle{
    font-size: .5rem;
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 3px;
  }
  .detail-middle-left{
    color: rgba(39, 149, 254, 1);
    border-bottom: solid 3px rgba(39, 149, 254, 1);
  }
  .detail-middle-left h2{
    margin: 0 15px;
  }
</style>
