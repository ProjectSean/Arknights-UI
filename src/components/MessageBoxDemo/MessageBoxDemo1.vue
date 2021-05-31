<demo>常规用法</demo>
<template>
  <div>
    <Button @click="toggle">切换</Button>
    <MessageBox
      v-model:visible="msboxValue"
      :closeOnClickOverlay="false"
      :ok="ok"
      :cancel="cancel"
    >
      <template v-slot:content>
        <div>我是第一</div>
        <div>我是第二</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </MessageBox>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../../lib/Button.vue";
import MessageBox from "../../lib/MessageBox.vue";
export default {
  setup() {
    const msboxValue = ref(false);
    const toggle = () => {
      msboxValue.value = !msboxValue.value;
    };
    const ok = () => {
      return false;
    };
    const cancel = () => {
      return true;
    };

    return { msboxValue, toggle, ok, cancel };
  },
  components: {
    MessageBox,
    Button,
  },
};
</script>
