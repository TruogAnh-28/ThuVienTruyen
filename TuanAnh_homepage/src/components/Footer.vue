<template lang="pug">
.footer-container
  .container
    .col-md-3
      img(src="https://truyen.tangthuvien.vn/images/logo-web-gray.png" height="60")
    .footer-right.col-md-9
      span
        | © 2007 Tàng Thư Viện -
        a(href="http://www.tangthuvien.vn/policy/privacy_mobile.html" target="_blank" rel="nofollow") Chính sách
      | <br>
      | Tàng Thư Viện là sân chơi mở và free cho cộng đồng fan kiếm hiệp, tiên hiệp, ngôn tình.
      | Chúc các bạn có những giây phút thư giãn thoải mái sau giờ làm việc và học tập căng thẳng.
</template>

<script>
export default {
  name: 'Footer'
  // Optional: add props, data, methods as needed
}
</script>

<style lang="stylus" scoped>
.footer-container
  background-color #f0f0f0
  padding 20px 0
  color #333
  font-size 14px

  width 100%
  margin-top:2rem

.container
  display flex
  align-items center
  justify-content space-between
  max-width 1200px
  margin 0 auto

.col-md-3
  img
    height 60px

.footer-right
  margin-left 20px
  a
    margin-left:4px
    color:#333
    text-decoration: none

@media (max-width: 768px)
  .container
    flex-direction column
</style>
