<template>
  <div class="navigation">
    <router-link class="footernav" to="/index"><i class="navIcon iconfont">&#xe654;</i>首页</router-link>
    <router-link class="footernav" to='/near'><i class="navIcon iconfont">&#xe687;</i>附近</router-link>
    <router-link class="footernav" to='/order'><i class="navIcon iconfont">&#xe64f;</i>订单</router-link>
    <router-link class="footernav" to='/me'><i class="navIcon iconfont">&#xe61c;</i>我的</router-link>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "footer02-lc",
    mounted(){
      $(".footernav").each(function(){
        $(this).hover(
          function(){
            $(this).css({color:"#28c0ac"});
            $(this).find("i").css({color:"#28c0ac"})
          },
          function(){
            $(this).css({color:"#848484"})
            $(this).find("i").css({color:"#848484"})
          }
        )
      })
    }

  }
</script>

<style scoped>
  .navigation{
    margin-top: 100px;
    padding: 8px;
    display:flex;/*设置五个导航条的内容由列排列变为行排列*/
    font-size: 1.6rem;
    background-color: #fff;
    position: relative;
    z-index: 10;
    border: 1px solid #eee;
  }
  .footernav{
    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
    flex-direction: column;
    flex: 1;/*设置五个导航条的内容等分*/
    line-height: 1.5rem;
    text-align: center;
    margin: 0 auto;
    margin-top: .9em;
    color:#848484;
  }
  .navIcon{
    margin:0 auto 4px;
    font-size: 2rem;
    color:#848484;

  }
  .router-link-active .navIcon{
    font-size: 2.5rem;
    color:#28c0ac;
  }
  .router-link-active{
    margin-top: .8em;
    color:#28c0ac;
    font-size: 1.1rem;
  }
</style>
