<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./network/router";
export default {
  name: "App",
  setup() {
    // 获取页面宽度
    const bwidth = document.documentElement.clientWidth;
    // 如果小于500则是移动端，值应该为500，则菜单默认不显示
    const menuVisible = ref(bwidth <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      menuVisible.value = bwidth <= 500 ? false : menuVisible.value;
    });
  },
};
</script>
