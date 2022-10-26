<template>
  <div class="imgs" style="transition: all 1s;">
    <div id="imgitems">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
      <img src="../../../assets/img/1.png" alt="">
    </div>
    <div id="timeItem">
      当前时间：{{timeItem}}
    </div>

  </div>
</template>

<script>
export default {
  name: "DynamicCode",
  data() {
    return {
      i: 0,
      imgitems: document.getElementById('imgitems'),
      timeItem: null,
      second: null
    }
  },
  methods: {
    scroll(){
      if(this.i > 1){
        this.i = -60
      }
      else{
        imgitems.style.left = this.i * 10 + "px"
      }
      this.i = this.i + 1
    },
    getTime() {
      let time = new Date()
      if(time.getSeconds()<10){

      }
      this.timeItem = time.getFullYear() + "-" + this.toInteger(time.getMonth()+ 1) + "-" + this.toInteger(time.getDate()) + " " + this.toInteger(time.getHours()) + ":" + this.toInteger(time.getMinutes()) + ":" + this.toInteger(time.getSeconds())
    },
    toInteger(index) {
      if (index < 10){
        index = "0" + index
      }
      return index
    }
  },
  created() {
    setInterval(()=>{
      this.scroll()
    }, 70)
    this.getTime()
    setInterval(() =>{
      this.getTime()
    }, 1000)
  }
}
</script>

<style scoped>
.imgs img{
  height: 18px;
  transition: all 1s;
  position: relative;
  vertical-align:baseline;
}
.imgs{
  width: 100%;
  height: 20px;
  overflow: hidden;
  position: relative;
  transition: all 1s;
}
#imgitems{
  position: relative;
  width: 300%;

}
#timeItem{
  text-align: center;
  height: 18px;
  padding: 2px 5px;
  border-radius: 20px;
  color: white;
  background-color: rgba(61, 77, 67, 0.7);
  font-size: .7rem;
  position: absolute;
  line-height: 16px;
  top: 0;
  left: 30%;
  z-index: 10;
}
</style>
