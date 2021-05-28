<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ark1"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleMenu" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //将类型设置成布尔值
    const homeMenuVisible = inject<Ref<boolean>>("homeMenuVisible"); //将类型设置成布尔值
    const toggleMenu = () => {
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
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    display: flex;
    justify-content: center;
    max-width: 6em;
    // margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      color: #fff;
      margin: 0 1em;
    }
  }
  > .toggleMenu {
    width: 24px;
    height: 24px;
    // background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleMenu {
      display: inline-block;
    }
  }
  @media (max-width: 1080px) {
    > .toggleMenu {
      display: inline-block;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>