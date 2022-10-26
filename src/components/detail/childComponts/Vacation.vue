<template>
  <div class="vacation">
    <div class="pass">
      &nbsp;&nbsp;<img src="../../../assets/img/right.png" alt=""><span style="font-size: 1rem">审批已通过</span> <span style="font-size: 1rem;margin-left: 15px;letter-spacing: 1px">个人信息></span>
      <h2>正在休假中</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "Vacation",
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style scoped>
  .vacation{
    width: 100%;
    height: 70px;
    background-color: rgba(1, 189, 102, 1);
    color: white;
    letter-spacing: 5px;
  }
  .vacation img{
    width: 20px;
    margin-right: 5px;
    margin-top: 5px;
    position: relative;
    top: 3px;
  }
  .pass{
    position: relative;
    left: 29%;
    width: 70%;
  }
  .pass h2{
    line-height: 40px;
    font-size: 1.8rem;
  }

</style>
