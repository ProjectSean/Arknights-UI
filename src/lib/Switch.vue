<template>
  <button
    class="ark-switch"
    :class="{ 'ark-checked': value }"
    @click="toggleButton"
  >
    <p v-show="value" class="ark-consfont">ON</p>
    <p v-show="!value" class="off ark-consfont">OFF</p>
    <span class="ark-switch-content"></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleButton = () => {
      context.emit("update:value", !props.value);
    };
    return { toggleButton };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h + 2px;
.ark-switch {
  height: $h;
  width: $h * 2.5;
  border: none;
  background: rgb(85, 85, 85);
  border-radius: $h/2;
  position: relative;
  > p {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translate(0, -50%);
    color: #fff;
    font-size: 12px;
  }
}

p.off {
  right: -12px;
}
span.ark-switch-content {
  position: absolute;
  top: -1.5px;
  left: -1px;
  height: calc(#{$h2} - 1.5px);
  width: calc(#{$h2} - 1.5px);
  background-color: #fff;
  border-radius: $h2 / 2;
  box-shadow: -2px 2px 2px rgb(85, 85, 85, 0.4);
  transition: left 250ms;
}
.ark-switch.ark-checked {
  background-color: rgb(227, 99, 47);
}
.ark-switch.ark-checked > span {
  left: calc(100% - #{$h2} + 2px);
}
.ark-switch:focus {
  outline: none;
}
</style>