<template>
  <div class="specific-detail">
    <div class="specific-text">
      <h3 style="font-size: 1rem">我的 请假 申请</h3>
      <p><span style="color: rgba(128,128,128,0.7)">开始时间：</span>{{this.$store.state.setup[0].start_time}}</p>
      <p><span style="color: rgba(128,128,128,0.7)">结束时间：</span>{{this.$store.state.setup[0].end_time}}</p>
      <p><span style="color: rgba(128,128,128,0.7)">审批流程：</span>共1步 <span style="color: rgb(107,185,208);margin-left: 5px">查看</span> ></p>
      <p><span style="color: rgba(128,128,128,0.7)">紧急联系人：</span>{{this.$store.state.setup[0].phone}}</p>
      <p><span style="color: rgba(128,128,128,0.7)">请假原因：</span>{{this.$store.state.setup[0].reason}}</p>
      <p><span style="color: rgba(128,128,128,0.7)">发起位置：</span><span style="color: rgb(57,182,203)">{{this.$store.state.setup[0].position}}</span></p>
      <p><span style="color: rgba(128,128,128,0.7)">抄送人：</span>无</p>
      <p v-show="isLeave"><span style="color: rgba(128,128,128,0.7)">目的地：</span>{{this.$store.state.setup[0].destination}}</p>
      <p style="color: rgb(220, 197, 120)">本人承诺填写的信息真实有效，并对本次提交请假申请的信息真实性负责。</p>
      <div class="timearea">
        {{this.$store.state.setup[0].phasetime}}小时
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "specificDetail",
  data() {
    return {
      isLeave: false
    }
  },
  methods: {
    ShowLeave() {
      if (this.$store.state.setup[0].leaveschool === "离校"){
        this.isLeave = !this.isLeave
      }
    }
  },
  created() {
    this.ShowLeave()
  }
}
</script>

<style scoped>
  .specific-detail{
    width: 100%;
    height: 270px;
    border-bottom: 14px solid rgba(211, 201, 201, .2);
    padding: 5px 20px;
    font-size: .7rem;
    line-height: 22px;
  }
  .timearea{
    position: absolute;
    right: 20px;
    top: 320px;
    background-color: rgb(232, 243, 253);
    border: solid 2px rgb(187, 213, 225);
    padding: 5px 10px;
    color: rgb(123, 176, 185);
    border-radius: 5px;
  }
</style>
