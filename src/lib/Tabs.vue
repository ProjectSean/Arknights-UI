<template>
  <div class="ark-tabs">
    <div class="ark-tabs-nav">
      <div
        class="ark-tabs-nav-item"
        v-for="t in titles"
        :key="t.id"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
    </div>
    <div class="ark-tabs-content">
      <component
        class="ark-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
        :key="c.id"
      />
      <!-- <component class="ark-tabs-content-item" :is="currentSelected" /> -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const currentSelected = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title) => {
      context.emit("update:selected", title);
    };
    return { currentSelected, titles, defaults, select };
  },
  components: {
    Tab,
  },
};
</script>

<style lang="scss">
$bg-grey: rgba(86, 86, 86, 0.8);
$line-grey: #454545;
$color: #404040;
$border-color: #999;
.ark-tabs {
  &-nav {
    display: flex;
    position: relative;
    color: #fff;
    background-color: $bg-grey;
    border-bottom: 1px solid #727272;
    &-item {
      position: relative;
      bottom: -1px;
      width: 16.6%;
      margin-top: 6px;
      margin-right: 1px;
      padding: 3px 4px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      user-select: none;
      @media (max-width: 500px) {
        width: 20%;
        padding: 3px 6px;
      }
      &::before {
        position: absolute;
        content: "";
        top: -2px;
        left: 50%;
        width: 0;
        height: 4.5px;
        background: transparent;
        transform: translateX(-50%);
        transition: width 500ms;
      }
      &::after {
        position: absolute;
        top: 15%;
        right: -1px;
        content: "";
        width: 2px;
        height: 80%;
        background-color: $line-grey;
      }
      &:last-child {
        margin-left: 0;
        &::after {
          display: none;
        }
      }
      &.selected {
        background-color: #fff;
        color: $color;
        &::before {
          width: 100%;
          background: #0098dc;
        }
        &::after {
          z-index: -1;
        }
      }
    }
  }
  &-content {
    padding: 10px 15px;
    min-height: 200px;
    background-image: linear-gradient(180deg, #fff 60%, #8f8f8f);
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>