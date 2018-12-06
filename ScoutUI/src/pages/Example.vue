<template>
    <div id="example">
      <index-header></index-header>
      <intro-side></intro-side>
      <div class="iphoneBox">
        <div class="main">
          <!--<div class="top"></div>-->
          <img src="../../static/img/IphoneXR-2.png">
          <VIDEO src="../../static/mp4/MeiTuan.mp4" class="MP4" controls="controls" preload autoplay="autoplay"></VIDEO>
          <a href="http://bgs09143010.gotoip1.com" class="goAPP" target="_blank">前往WebAPP</a>
        </div>
        <copyright-two></copyright-two>
      </div>

    </div>
</template>

<script>
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import CopyrightTwo from "../components/footer-copyright/copyright-two";
    import IntroSide from "../components/intro/introSide";
    export default {
        name: "Example",
      components: {IntroSide, CopyrightTwo, IndexHeader}
    }
</script>

<style lang="scss" scoped>
    #example{
      height: 100%;
      padding-top:6.5rem;
      background-color: #fff;
      .iphoneBox{
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 28rem;
        img{
          margin: auto;
          margin-top: 40px;
          width: 280px;
          position: relative;
          z-index: 2;
        }
      }
      .goAPP{
        margin: 0 auto;
        margin-top: 2rem  ;
        color:#28c0ac;
        font-size: 16px;
      }
      .MP4{
        margin: 0 auto;
        width:250px ;
        position: absolute;
        top:56px;
        left: 14px;
        height: 530px;
        z-index: 1;
      }
      .main{
        margin: auto;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      /*.top{*/
        /*width:100%;*/
        /*position: absolute;*/
        /*background-color: #fff;*/
        /*top:0;*/
      /*}*/
    }
</style>
