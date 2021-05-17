<template>
  <button
    class="ark-button"
    :class="getClasses"
    :disabled="disabled"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div v-if="loading && size === 'big'" class="ark-loader">
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
      <span class="ark-loader-block"></span>
    </div>
    <div v-else-if="loading && size === 'small'" class="ark-loader"></div>
    <div v-else-if="loading" class="ark-loader">
      <div class="ark-cube-spin ark-cube-spin1"></div>
      <div class="ark-cube-spin ark-cube-spin2"></div>
      <div class="ark-cube-spin ark-cube-spin4"></div>
      <div class="ark-cube-spin ark-cube-spin3"></div>
    </div>
    <div><slot /></div>
    <span v-if="disabled" class="ark-span-diabled"></span>
    <span :class="{ 'ark-span-arrow': theme === 'link' && !loading }"></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
  data() {
    return {
      mousedownflag: false,
    };
  },
  methods: {
    onMouseDown() {
      this.mousedownflag = true;
    },
    onMouseUp() {
      this.mousedownflag = false;
    },
  },
  computed: {
    getClasses() {
      return [
        `ark-theme-${this.theme}`,
        `ark-size-${this.size}`,
        { "ark-theme-button-active": this.mousedownflag },
      ];
    },
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #2086a8;
$white: #fff;
$text-color-wh: $white;
$text-color-gr: #a0a0a0;
$button-bg-sta: #10a0df;
$button-bg-end: #0080ac;
$button-bg-active: #005c84;
$link-bg: #353535;
$link-span: $white;
$link-border: #4a4a4a;
$link-bg-active: #2a2a2a;
$link-text-active: #c4c4c4;
$radius: 4px;
button.ark-button {
  position: relative;
  box-sizing: border-box;
  height: $h;
  padding: 0 24px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: $text-color-wh;
  border: 1px solid $border-color;
  border-top: 1px solid #59b5df;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(#000, 0.95);
  font-weight: 700;
  font-size: 16px;
  & + & {
    margin-left: 16px;
    margin-bottom: 16px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.ark-size-big {
    min-width: 136px;
    font-size: 22px;
    height: $h + 16px;
    padding: 0 32px;
    > .ark-loader {
      position: absolute;
      top: 50%;
      left: 6%;
      width: 21px;
      height: 21px;
      transform: translate(0, -40%);
      > .ark-loader-block {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        opacity: 0;
        background: #fdfdfd;
        animation: show 880ms step-end infinite alternate,
          pulse 880ms linear infinite alternate;
        &:nth-child(1) {
          transform: translate(0, 0);
          animation-delay: 65ms;
        }
        &:nth-child(2) {
          transform: translate(7.5px, 0);
          animation-delay: 130ms;
        }
        &:nth-child(3) {
          transform: translate(15px, 0);
          animation-delay: 195ms;
        }
        &:nth-child(4) {
          transform: translate(0, 7.5px);
          animation-delay: 325ms;
        }
        &:nth-child(5) {
          transform: translate(7.5px, 7.5px);
          animation-delay: 130ms;
        }
        &:nth-child(6) {
          transform: translate(15px, 7.5px);
          animation-delay: 455ms;
        }
        &:nth-child(7) {
          transform: translate(0, 15px);
          animation-delay: 390ms;
        }
        &:nth-child(8) {
          transform: translate(7.5px, 15px);
          animation-delay: 260ms;
        }
        &:nth-child(9) {
          transform: translate(15px, 15px);
        }
      }
    }
  }
  &.ark-size-small {
    font-size: 8px;
    height: $h - 8px;
    padding: 0 16px;
    > .ark-loader {
      position: absolute;
      left: 0;
      margin-left: 4px;
      width: 8px;
      height: 8px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 4px;
      border-color: #fff #fff #fff transparent;
      border-style: solid;
      border-width: 2px;
      animation: ark-circle-spin 1s infinite linear;
    }
  }
  &.ark-size-normal {
    > .ark-loader {
      position: absolute;
      display: inline-block;
      height: 12px;
      width: 12px;
      right: 0;
      left: 0;
      margin-left: 6px;
      transform: rotateZ(45deg);
      > .ark-cube-spin {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        transform: scale(1.1);
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          transform-origin: 100% 100%;
          animation: ark-cube-angle 2.4s infinite linear both;
        }
        &.ark-cube-spin2 {
          transform: scale(1.1) rotateZ(90deg);
          &::before {
            animation-delay: 300ms;
          }
        }
        &.ark-cube-spin3 {
          transform: scale(1.1) rotateZ(180deg);
          &::before {
            animation-delay: 600ms;
          }
        }
        &.ark-cube-spin4 {
          transform: scale(1.1) rotateZ(270deg);
          &::before {
            animation-delay: 900ms;
          }
        }
      }
    }
  }
  &.ark-theme-button {
    background-image: linear-gradient(180deg, $button-bg-sta, $button-bg-end);
    &.ark-theme-button-active {
      background-image: none;
      background-color: $button-bg-active;
    }
    &[disabled] {
      cursor: not-allowed;
      color: #fff;
    }
    > .ark-span-diabled {
      position: absolute;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      border-radius: $radius;
      background-color: rgba(199, 199, 199, 0.7);
    }
  }
  &.ark-theme-link {
    position: relative;
    color: $text-color-wh;
    background-color: $link-bg;
    background-image: none;
    border: 1px solid $link-border;
    > .ark-span-arrow {
      position: absolute;
      right: 8.8%;
      top: calc(50% - 2px);
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 5px solid $link-span;
    }
    &[disabled] {
      border: 1px solid transparent;
      background-color: #c7c7c7;
      cursor: not-allowed;
      > .ark-span-arrow {
        border: none;
      }
    }
    &.ark-theme-button-active {
      background-color: $link-bg-active;
      color: $link-text-active;
      > .ark-span-arrowspan {
        border-left: 5px solid $link-text-active;
      }
    }
    &.ark-size-big {
      > .ark-span-arrow {
        top: calc(50% - 2.5px);
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 8px solid $link-span;
      }
    }
    &.ark-size-small {
      > .ark-span-arrow {
        top: calc(50% - 1.5px);
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 4px solid $link-span;
      }
    }
  }
  &.ark-theme-text {
    position: relative;
    background-color: transparent;
    border: 1px solid transparent;
    color: $text-color-gr;
    transition: color 250ms;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 25%;
      border: 1px solid $text-color-gr;
      transition-property: height, border-color;
      transition-duration: 250ms;
    }
    &::before {
      top: 0;
      left: -1px;
      border-bottom: none;
    }
    &::after {
      bottom: 0;
      left: -1px;
      border-top: none;
    }
    > .ark-loadingIndicator {
      border-color: $text-color-gr $text-color-gr $text-color-gr transparent;
    }
    &:hover {
      color: #22bbff;
      &::after,
      &::before {
        height: 50%;
        border-color: #22bbff;
      }
    }
    &[disabled] {
      cursor: not-allowed;
      &::before,
      &::after {
        height: 50%;
      }
      &:hover {
        color: $text-color-gr;
        &::after,
        &::before {
          border-color: $text-color-gr;
        }
      }
    }
  }
  &.ark-theme-danger {
    border: 1px solid transparent;
    background-image: linear-gradient(
      135deg,
      rgba(109, 27, 19, 0.91),
      rgba(106, 19, 19)
    );
    &.ark-theme-button-active {
      background-image: none;
      background-color: #5b0d0d;
    }
    &[disabled] {
      cursor: not-allowed;
      > .ark-span-diabled {
        position: absolute;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        border-radius: $radius;
        background-color: rgba(199, 199, 199, 0.7);
      }
    }
  }
}
@keyframes show {
  0%,
  40% {
    opacity: 0;
  }
  41%,
  100% {
    opacity: 1;
  }
}
@keyframes pulse {
  0%,
  40% {
    background: #fdfdfd;
  }
  41%,
  100% {
    background: #dadada;
  }
}
@keyframes ark-circle-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes ark-cube-angle {
  0%,
  10% {
    opacity: 0;
    transform: perspective(140px) rotateX(-180deg);
  }
  25%,
  75% {
    opacity: 1;
    transform: perspective(140px) rotateX(0deg);
  }
  90%,
  100% {
    opacity: 0;
    transform: perspective(140px) rotateX(180deg);
  }
}
</style>