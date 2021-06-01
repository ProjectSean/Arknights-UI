<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/messagebox">MessageBox 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  name: "Doc",
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    margin-top: 80px;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 450px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 30px;
    padding-right: 10vw;
    @media (max-width: 500px) {
      padding-right: 30px;
    }
  }
}
aside {
  width: 450px;
  padding: 3vw;
  position: fixed;
  top: 80px;
  left: 0;
  height: 100%;
  color: #fff;
  font-size: 26px;
  z-index: 10;
  > h2 {
    margin-bottom: 1.5vh;
  }
  > ol {
    > li {
      padding: 6px 0;
    }
  }
  @media (max-width: 500px) {
    padding-top: 50px;
    background: linear-gradient(0deg, rgb(18, 18, 18), rgb(8, 8, 8) 40%);
    width: 100%;
    text-align: center;
    > ol {
      > li {
        padding: 2.5vw 0;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>