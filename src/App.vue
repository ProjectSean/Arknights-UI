<template>
  <div class="background"></div>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./network/router";
export default {
  name: "App",
  setup() {
    const bwidth = document.documentElement.clientWidth;
    const menuVisible = ref(bwidth <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    const homeMenuVisible = ref(bwidth <= 1080 ? false : true);
    provide("homeMenuVisible", homeMenuVisible);
    router.afterEach(() => {
      menuVisible.value = bwidth <= 500 ? false : menuVisible.value;
      homeMenuVisible.value = bwidth <= 1080 ? false : homeMenuVisible.value;
    });
  },
};
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/image/arkui-background.jpg");
  background-size: cover;
  z-index: -1;
}
</style>
