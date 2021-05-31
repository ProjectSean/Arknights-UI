<template>
  <article class="markdown-body">
    <h1>介绍</h1>
    <p>Ark-UI 是一款基于Vue 3 和 TypeScript 的 UI 组件库</p>
    <p>
      我在学习完 Vue3，部分 TypeScript 和 vite 的相关知识后，
      为夯实前端框架基础，编写了这套组件库。
    </p>
    <p>
      虽然只是新人编写的组件库，但也欢迎下载使用。如您发现漏洞，欢迎提交在github上提交issue。这套组件库代码放在了
      <a href="https://github.com/ProjectSean/Arknights-UI.git"
        >ProjectSean/Arknights-UI.git</a
      >
      仓库。或者您只是想浏览我的代码，也欢迎交流心得。历史提交比较规范，您可以按照提交顺序逐个查看。运行方法见
      README.md
    </p>
    <p>下一节：<a href="#/home/training">安装</a></p>
  </article>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
article {
  color: #fff;
  & h1 {
    font-size: 40px;
  }
  & p {
    font-size: 20px;
    & a {
      // text-decoration: none;
      color: skyblue;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>