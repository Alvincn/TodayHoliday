<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home/Home";
import InputInfo from "./components/InputCom/InputInfo";
export default {
  name: 'App',
  components: {
    Home,
    InputInfo
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
