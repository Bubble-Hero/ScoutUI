<template>
  <!--..shareTo...-->
  <div class="shareTo">
    <p>分享到</p>
    <div class="shareToi">
      <a href="">
        <i class="iconfont shareToi01">&#xe61c;</i>
        <span>微信好友</span>
      </a>
      <a href="">
        <i class="iconfont shareToi02">&#xe5e3;</i>
        <span>朋友圈</span>
      </a>
      <a href="">
        <i class="iconfont shareToi03">&#xe6d3;</i>
        <span>QQ</span>
      </a>
      <a href="">
        <i class="iconfont shareToi04">&#xe658;</i>
        <span>微博</span>
      </a>
      <a href="">
        <i class="iconfont shareToi05">&#xe648;</i>
        <span>github</span>
      </a>
      <a href="">
        <i class="iconfont shareToi06">&#xe719;</i>
        <span>更多</span>
      </a>
    </div>
    <div class="off"  @click="goBottom">取消</div>
  </div>

</template>

<script>
    export default {
        name: "SlideExamp3"
    }
</script>

<style scoped>
  /*....shareTo....*/
  .shareTo{
    width: 94%;
    margin: 3%;
    background: #daf0ee;
    border-radius: .8rem;
    margin-bottom: 6rem;
    z-index: 3;
  }
  .shareTo p{
    width: 100%;
    height: 5.6rem;
    line-height: 5.6rem;
    text-align: center;
    font-size: 1.4rem;
    color: #272727;
    font-weight: bold;
  }
  .shareToi{
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 0;
  }
  .shareToi a{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .shareToi a i{
    font-size:3.2rem ;
    text-align: center;
  }
  .shareToi a span{
    font-size: 1.2rem;
    text-align: center;
    margin:.8rem;
  }
  .off{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.3rem;
    color: #8f8b8b;
    border-top: .1rem solid #cecccc;
  }
  .shareToi01{
    color: #45c77c;
  }
  .shareToi02{
    color: #1ae871;
  }
  .shareToi03{
    color: #30cff1;
  }
  .shareToi04{
    color: #edc00e;
  }
  .shareToi05{
    color: #565348;
  }
  .shareToi06{
    color: #18dba6;
  }

</style>
