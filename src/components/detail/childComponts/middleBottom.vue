<template>
  <div class="middle-bottom">
    <h2 style="font-size: 15px">审批流程记录</h2>
    <p><img src="../../../assets/img/blueC.png" alt=""><span class="p-text">{{$store.state.setup[0].yourname}} - 发起申请 <span class="time-detail"><span style="color: rgba(128,128,128,0.7)">{{this.$store.state.setup[0].apply_time}}</span></span></span></p>
    <p><img src="../../../assets/img/greenC.png" alt=""><span class="p-text">一级：{{this.$store.state.setup[0].teacher_name}} - 审批 <span style="color: green">通过</span><span class="time-detail"><span style="color: rgba(128,128,128,0.7)">{{this.$store.state.setup[0].teacher_agree}}</span></span></span></p>
    <div class="opinion">
      <span style="color: rgba(128,128,128,0.7)">审批意见：无</span>

    </div>
    <div class="line">
      <img src="../../../assets/img/line.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "middleBottom"
}
</script>

<style scoped>
  .middle-bottom{
    padding: 0 20px;
    font-size: .7rem;
    line-height: 45px;
    width: 100%;
    border-bottom: 30px solid rgba(211, 201, 201, .2);
    position: relative;
  }
  .middle-bottom img{
    width: 20px;
    margin-right: 15px;
    position: relative;
    top: 5px;
  }
  .time-detail{
    position: absolute;
    right: 20px;
  }
  .opinion{
    background-color: rgb(247, 247, 247);
    border: solid 1px rgb(224, 210, 210);
    border-radius: 5px;
    width: 290px;
    margin-left: 45px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .line img{
    height: 23px;
  }
  .line{
    position: absolute;
    top: 68px;
  }
</style>
