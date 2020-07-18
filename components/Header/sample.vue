<template lang="pug">
  header.header-wrap
    h1 Let's Write
    p 前端工程師 Augustus 的學習筆記 — solving problems, in simple ways.
    p 本篇筆記文：
      a(href="https://letswrite.tw/storybook-init/") 用 StoryBook 做一個 UI 整理集
</template>

<script>
  export default {
    name: 'header-sample',
    data: () => {
      return {}
    }
  }
</script>

<style scoped lang="sass">
  .header-wrap
    text-align: center
    font-family: -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol", 微軟正黑體, "microsoft jhenghei"
    color: #555
  h1
    margin: 0 0 1rem
    font-weight: bold
    font-size: 2.25rem
  p
    margin: 0 0 1rem
    font-size: 1rem
  a
    color: #00A7E5
    &:hover
      text-decoration: none
</style>