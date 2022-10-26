<template>
  <div class="detail-middle-info">
    <p><span style="color: rgba(128,128,128,0.7)">请假类型：</span>{{this.$store.state.setup[0].thing}} <span style="margin-left: 80px"><span style="color: rgba(128,128,128,0.7)">需要离校：</span><span style="color: rgb(220, 197, 120)">{{this.$store.state.setup[0].leaveschool}}</span></span></p>
    <p><span style="color: rgba(128,128,128,0.7)">销假规则：</span><span style="color: rgb(220, 197, 120)">离校请假需要销假，非离校请假无需销假</span> <span style="color: rgb(57,182,203);margin-left: 5px">查看</span>></p>
    <p><span style="color: rgba(128,128,128,0.7)">实际休假时间：</span>-</p>
  </div>
</template>

<script>
export default {
  name: "detailMiddleInfo"
}
</script>

<style scoped>
  .detail-middle-info{
    width: 100%;
    height: 85px;
    border-bottom: 14px solid rgba(211, 201, 201, .2);
    padding: 5px 20px;
    line-height: 20px;
    font-size: .7rem;
  }
</style>
