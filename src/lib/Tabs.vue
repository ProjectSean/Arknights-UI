<template>
  <div class="ark-tabs">
    <div class="ark-tabs-nav">
      <div class="ark-tabs-nav-item selected" v-for="t in titles" :key="t.id">
        {{ t }}
      </div>
    </div>
    <div class="ark-tabs-content">
      <component
        class="ark-tabs-content-item"
        v-for="c in defaults"
        :is="c"
        :key="c.id"
      />
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { titles, defaults };
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
      // padding: 6px 0 4px;
      width: 20%;
      border-top: 2px solid transparent;
      margin-top: 4px;
      margin-right: 1px;
      font-size: 14px;
      text-align: center;
      &::after {
        position: absolute;
        top: 15%;
        right: -2px;
        content: "";
        width: 2px;
        height: 80%;
        background-color: $line-grey;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-left: 0;
        &::after {
          display: none;
        }
      }
      &.selected {
        border-top: 2px solid #0098dc;
        // box-shadow: ;
        background-color: #fff;
        color: $color;
        &::after {
          z-index: -1;
        }
      }
    }
  }
  &-content {
    min-height: 200px;
    background-image: linear-gradient(180deg, #fff 60%, #8f8f8f);
  }
}
</style>