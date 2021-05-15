<template>
  <div>
    导航栏 | <router-link to="/">Sean</router-link> |
    <router-link to="/xxx">Sean2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
