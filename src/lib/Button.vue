<template>
  <button
    class="ark-button"
    :class="[
      `ark-theme-${theme}`,
      { 'ark-theme-button-active': mousedownflag },
    ]"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div><slot /></div>
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
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
    margin-left: 8px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.ark-theme-button {
    background-image: linear-gradient(180deg, $button-bg-sta, $button-bg-end);
    &.ark-theme-button-active {
      background-image: none;
      background-color: $button-bg-active;
    }
  }
  &.ark-theme-link {
    position: relative;
    color: $text-color-wh;
    background-color: $link-bg;
    background-image: none;
    border: 1px solid $link-border;
    > span {
      position: absolute;
      right: 6px;
      top: 12px;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 5px solid $link-span;
    }
    &.ark-theme-button-active {
      background-color: $link-bg-active;
      color: $link-text-active;
      > span {
        border-left: 5px solid $link-text-active;
      }
    }
  }
  &.ark-theme-text {
    position: relative;
    background-color: transparent;
    border: none;
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
    &:hover::after,
    &:hover::before {
      height: 50%;
    }
  }
}
</style>