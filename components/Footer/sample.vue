<template lang="pug">
  footer.footer-wrap
    a(href='https://letswrite.tw/sitemap/') 網站地圖
    |  / 
    a(href='https://letswrite.tw/privacy-policy/') 隱私權政策
    br
    a(href='https://www.facebook.com/letswrite.tw/', target='_blank') Facebook
    |  / 
    a(href='https://twitter.com/letswrite_tw', target='_blank') Twitter
    |  / 
    a(href='https://t.me/letswritetw', target='_blank') Telegram
    |  / 
    a(href='https://www.instagram.com/letswrite.tw/', target='_blank') Instagram
    |  / 
    a#coffee-tw-footer(href='https://p.ecpay.com.tw/5ABF9', target='_blank') 請喝咖啡
    br
    p &copy; {{ year }} Let's Write. All Rights Reserved.

</template>

<script>
  export default {
    name: 'footer-sample',
    data: () => {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped lang="sass">
  .footer-wrap
    line-height: 2
    font-size: 12px
    font-family: -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol", 微軟正黑體, "microsoft jhenghei"
    a
      text-decoration: none
      color: #686868
      &:hover
        text-decoration: underline
    p
      margin: 0
</style>