<template>
  <div class="navigation">
    <router-link class="nav" to="/index"><i class="navIcon iconfont">&#xe604;</i>首页</router-link>
    <router-link class="nav" to='/near'><i class="navIcon iconfont">&#xe645;</i>附近</router-link>
    <router-link class="nav" to='/find'><i class="navIcon iconfont">&#xe6cd;</i>发现</router-link>
    <router-link class="nav" to='/order'><i class="navIcon iconfont">&#xe6cf;</i>订单</router-link>
    <router-link class="nav" to='/me'><i class="navIcon iconfont">&#xe8da;</i>我的</router-link>
  </div>

</template>

<script>
    export default {
        name: "footer01-lc"
    }
</script>

<style scoped>
  .navigation{
    margin-top: 100px;
    padding: 8px;
    display:flex;/*设置五个导航条的内容由列排列变为行排列*/
    height: 8vh;
    font-size: 1rem;
    background-color: #fff;
    position: relative;
    z-index: 1000;
    border: 1px solid #eee;
  }
  .nav{
    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
    flex-direction: column;
    flex: 1;/*设置五个导航条的内容等分*/
    line-height: 1.5rem;
    text-align: center;
    margin: 0 auto;
    margin-top: .9em;
    color:#555;
  }
  .navIcon{
    margin:0 auto;
    font-size: 2.4rem;
    color:#333;
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
