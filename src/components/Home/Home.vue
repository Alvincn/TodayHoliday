<template>
  <div class="home">
    <top-bar></top-bar>
    <middle-bar></middle-bar>
    <why-cant></why-cant>
    <bottom-bar></bottom-bar>

  </div>

</template>

<script>
import topBar from "./childcomponts/topBar";
import middleBar from "./childcomponts/middleBar"
import whyCant from "./childcomponts/whyCant";
import bottomBar from "./childcomponts/bottomBar"
export default {
  name: "Home",
  components: {
    topBar,
    middleBar,
    whyCant,
    bottomBar
  },

}
</script>

<style scoped>
</style>
