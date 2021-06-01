<template>
  <div class="topnav">
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
      <router-link to="/home">首页</router-link>
    </ul>
    <span class="toggleMenu" @click="toggleMenu"
      ><svg class="icon">
        <use xlink:href="#icon-ark1"></use></svg
    ></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import { router } from "../network/router";
export default {
  name: "Topnav",
  setup() {
    const bwidth = document.documentElement.clientWidth;
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //将类型设置成布尔值
    const homeMenuVisible = inject<Ref<boolean>>("homeMenuVisible"); //将类型设置成布尔值
    let toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
      homeMenuVisible.value = !homeMenuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  min-height: 80px;
  z-index: 10;
  justify-content: flex-end;
  align-items: center;
  background-image: url("../assets/image/arkui-background.jpg");
  background-size: 100%;
  @media (max-width: 1080px) {
    height: 80px;
  }
  > .menu {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    line-height: 1.75;
    &:hover {
      text-decoration: none;
    }
    > a {
      color: #fff;
      margin: 0 0.5em;
      text-decoration: none;
      font-size: 20px;
    }
  }
  > .toggleMenu {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 1080px) {
    .menu {
      line-height: 3vh;
    }
    > .toggleMenu {
      display: inline-block;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>