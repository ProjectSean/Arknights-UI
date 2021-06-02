<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="ark-mb-overlay" @click="OnClickOverlay"></div>
      <div class="ark-mb-wrapper">
        <div class="ark-mb">
          <header>
            <slot name="title" />
            <span class="ark-mb-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button theme="danger" @click="cancel">Cancel</Button>
            <Button @click="ok" style="min-width: 105px">OK</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const OnClickOverlay = () => {
      props.closeOnClickOverlay && close();
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        close();
      }
    };
    return { close, OnClickOverlay, ok, cancel };
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.ark-mb {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  // border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  width: 70vw;
  min-height: 35vh;
  max-width: 800px;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding-bottom: 12px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    flex-grow: 1;
    padding: 12px 0;
  }
  > footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid $border-color;
    padding-top: 12px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>