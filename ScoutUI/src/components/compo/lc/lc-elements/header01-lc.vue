<template>
  <div class="nav-box">
    <a href="javascript:void(0)">
      <div>西安
        <i class="iconfont">&#xe615;</i>
      </div>
      <span>多云5℃</span>
    </a>
    <div class="input-box">
      <div class="lr-box search-box">
        <i class="iconfont">&#xe637;</i>
      </div>
      <input type="text" placeholder="(热门电影)"/>
      <!--<div class="lr-box dingdong-box">-->
      <!--</div>-->
    </div>
    <a href="javascript:void(0)">
      <i class="iconfont">&#xe650;</i>
    </a>
  </div>
</template>

<script>
    export default {
        name: "header01-lc"
    }
</script>

<style lang="scss">

  $wt:#fff;
  .nav-box {
   // margin-top: 40px;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    z-index: 333;
    width: 100%;
    border-bottom: .08rem solid #eee;
  a {
    display: flex;
    flex-direction: column;
    width: 3.8rem;
    height: 3.8rem;
  // background-color: rgba(0, 0, 0, 0.3);
  // color: $wt;
    border-radius: 50%;
    line-height: 1rem;
  i{
    color: #111;
  }
  }
  a:first-child{
    justify-content: space-between;padding: .4rem 0;
  div{
    color:#111;font-size: 1.3rem;white-space: nowrap;font-weight: bolder;
  i{
    font-size: 1.3rem;font-weight: bolder;
  }
  }
  span{
    color: #666;font-size: .85rem;
  }
  }
  a:last-child {
    margin-left: auto !important;
  i{
    font-size: 2.5rem;
    margin:auto;
  }
  }
  .input-box {
    flex: 1;
    margin: 0 1.1rem;
    position: relative;
    display: flex;justify-content: center;
  input {
    background-color:#eee;
    border-radius:1rem;
    border: 0;
    padding: .5rem 3.5rem;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .lr-box {
    position: absolute;
    min-width: 3.5rem;
    height: 100%;
    display: flex;
    top: 0;
  }
  .search-box {
    left: 10%;
  i {
    font-size: 1.9rem;
    color: #9b9b9b;
    margin: auto;
    font-weight: 600;
  }
  }
  .dingdong-box {
    right: 0;
  img {
    width: 1.9rem;
    height: 2.1rem;
    margin: auto;
  }
  }
  }
  }

</style>
