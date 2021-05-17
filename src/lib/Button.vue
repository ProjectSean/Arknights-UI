<template>
  <button
    class="ark-button"
    :class="getClasses"
    :disabled="disabled"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <span v-if="loading" class="ark-loadingIndicator"></span>
    <div><slot /></div>
    <span :class="{ 'ark-span-arrow': theme === 'link' }"></span>
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
    > .ark-loadingIndicator {
      width: 20px;
      height: 20px;
      border-radius: 12px;
    }
  }
  &.ark-size-small {
    > .ark-loadingIndicator {
      width: 8px;
      height: 8px;
      border-radius: 6px;
    }
  }
  &.ark-theme-button {
    background-image: linear-gradient(180deg, $button-bg-sta, $button-bg-end);
    &.ark-theme-button-active {
      background-image: none;
      background-color: $button-bg-active;
    }
    &.ark-size-big {
      font-size: 24px;
      height: $h + 16px;
      padding: 0 32px;
    }
    &.ark-size-small {
      font-size: 8px;
      height: $h - 8px;
      padding: 0 16px;
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
    &.ark-theme-button-active {
      background-color: $link-bg-active;
      color: $link-text-active;
      > .ark-span-arrowspan {
        border-left: 5px solid $link-text-active;
      }
    }
    &.ark-size-big {
      font-size: 24px;
      height: $h + 16px;
      padding: 0 32px;
      > .ark-span-arrow {
        top: calc(50% - 2.5px);
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 8px solid $link-span;
      }
    }
    &.ark-size-small {
      font-size: 8px;
      height: $h - 8px;
      padding: 0 16px;
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
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 25%;
      border: 1px solid $text-color-gr;
      transition: height 250ms;
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
    &.ark-size-big {
      font-size: 24px;
      height: $h + 16px;
      padding: 0 32px;
    }
    > .ark-loadingIndicator {
      border-color: $text-color-gr $text-color-gr $text-color-gr transparent;
    }
    &.ark-size-small {
      font-size: 8px;
      height: $h - 8px;
      padding: 0 16px;
    }

    &:hover::after,
    &:hover::before {
      height: 50%;
    }
  }
  > .ark-loadingIndicator {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #fff #fff #fff transparent;
    border-style: solid;
    border-width: 2px;
    animation: ark-spin 1s infinite linear;
  }
}
@keyframes ark-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>