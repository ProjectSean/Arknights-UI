<template>
  <div>
    <Topnav class="home-background" />
    <div class="banner">
      <aside class="ark-sider" v-if="homeMenuVisible">
        <ol>
          <li>
            <router-link class="ark-side-link" to="/home/intro"
              >介绍 Introduction
            </router-link>
            <span>INTRO</span>
          </li>

          <li>
            <router-link class="ark-side-link" to="/home/training"
              >使用 Training</router-link
            >
            <span>Training</span>
          </li>
          <li>
            <router-link class="ark-side-link" to="/home/start"
              >快速上手 Start</router-link
            >
            <span>Start</span>
          </li>
          <li>
            <router-link class="ark-side-link" to="/doc"
              >组件 Components</router-link
            >
            <span>Compo</span>
          </li>
        </ol>
      </aside>
      <div class="ark-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  name: "Home",
  setup() {
    const homeMenuVisible = inject<Ref<Boolean>>("homeMenuVisible");

    return { homeMenuVisible };
  },
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  padding-right: 0rem;
  color: #fff;
  border-image: linear-gradient(
      to right,
      #464646 0%,
      #464646 60%,
      rgba(70, 70, 70, 0) 100%
    )
    30 stretch;
}
.home-background {
  background-image: url("../assets/image/arkui-background.jpg");
  background-size: cover;
}
.banner {
  display: flex;
  margin-top: 8vh;
  height: 92vh;
  @media (max-width: 1080px) {
    margin-top: 6vh;
    height: 94vh;
  }
  .ark-sider {
    padding-top: 15vh;
    flex-basis: 30%;
    color: #9a9a9a;
    & ol {
      position: relative;
      & li {
        position: relative;
        height: 7.8125rem;
        border-image: linear-gradient(
            to right,
            #464646 0%,
            #464646 60%,
            rgba(70, 70, 70, 0) 100%
          )
          30 stretch;
        border-bottom: 1px solid;
        font-size: 1.75rem;
        cursor: pointer;
        & > span {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          line-height: 7.8125rem;
          text-align: right;
          font-size: 5rem;
          opacity: 0;
          z-index: -1;
          transition: opacity 500ms;
        }
        &:hover {
          & > span {
            opacity: 0.2;
          }
        }
        &:last-child {
          font-size: 1.9rem;
        }
        @media (max-width: 1080px) {
          width: 100vw;
          & > span {
            text-align: center;
          }
        }
        & > .ark-side-link {
          display: flex;
          padding-right: 5rem;
          justify-content: flex-end;
          align-items: center;
          text-shadow: 5px 5px 10px rgb(0 0 0 / 82%);
          width: 100%;
          height: 100%;
          transition-property: padding-right, color;
          transition-duration: 250ms;
          @media (max-width: 1080px) {
            padding-right: 0;
            justify-content: center;
          }
          &:hover {
            padding-right: 0rem;
            color: #fff;
            border-image: linear-gradient(
                to right,
                #464646 0%,
                #464646 60%,
                rgba(70, 70, 70, 0) 100%
              )
              30 stretch;
          }
        }
      }
    }
  }
  .ark-content {
    margin-top: 4vh;
    margin-left: 7%;
    margin-right: 4%;
    width: 40vw;
    padding: 20px 15px;
    flex-grow: 1;
    background-color: rgba(51, 51, 51, 0.2);
    height: 85vh;
  }
  @media (max-width: 1080px) {
    .banner {
      margin-top: 5vh;
      height: 95vh;
    }
    .ark-sider {
      padding-top: 10vh;
      width: 100vw;
      background-image: url("../assets/image/arkui-background.jpg");
      height: 90vh;
    }
    .ark-content {
      width: 90vw;
      position: absolute;
      margin: auto 5vw;
      z-index: -1;
    }
  }
}
</style>