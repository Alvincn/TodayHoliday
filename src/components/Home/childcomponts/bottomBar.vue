<template>
  <div class="bottom-item">
    <router-link to="/input">
      <bottom-bar-item></bottom-bar-item>
    </router-link>
  </div>
</template>

<script>
import bottomBarItem from "./bottomBarItem";

export default {
  name: "bottom-bar",
  components: {
    bottomBarItem
  },
  methods: {
    toInput() {

    }
  }
}
</script>

<style scoped>

</style>
