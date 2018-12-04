<template>

  <div class="compo">
    <index-header></index-header>
    <section>
      <intro-side></intro-side>
      <div class="row">
        <!-----------组件-------------->
        <div class="com">
          <div class="com-header">
            <h1>组件</h1>
            <p>无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。</p>
          </div>
          <!--------------组件1------------>

          <!--模板盒子（向下添加自己的分类组件）--------------------------->
          <common-box></common-box>
          <!--模板盒子--------------------------->



          <div class="page-component-up-box">
            <div class="page-component-up">
              <i class="glyphicon glyphicon-triangle-top"></i>
            </div>
          </div>
          </div>
        </div>
    </section>
  </div>


</template>

<script>
    import $ from "jquery"
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import IntroSide from "../components/intro/introSide";
    import CommonBox from "../components/compo/commonBox";
    export default {
        name: "compo",
      components: {CommonBox, IntroSide, IndexHeader},
      mounted(){
          $(".page-component-up-box").click(function(){
              var speed=300;//滑动的速度
              $('body,html').animate({ scrollTop: 0 }, speed);
              return false;
          })
          // $(".compo").scroll(function(){
          //   let offSetTop = $(".compo").scrollTop();
          //   if(offSetTop>1500){
          //     $(".page-component-up-box").css({
          //       display:"block"
          //     });
          //   }else{
          //     $(".page-component-up-box").css({
          //       display:"none"
          //     });
          //   }
          // });
      }
    }
</script>

<style scoped>
  .compo{
    display: flex;
    flex-direction: column;
  }
  section{
    display: flex;
    margin-top: 65px;
  }
  .row{
    width: 100%;
    padding: 50px;
  }
  .com{
    width: 100%;
    height: 100%;}
  .com-header{
    padding:0 0 60px;
    margin-left: 20px;
    margin-right: 160px;
    /*background: linear-gradient(to right ,#17b6ad,white);*/
    border-bottom: 2px solid #17b6ad;
  }
  .com-header h1{
    line-height: 60px;
    font-size: 32px;
  }
  .com-header p{
    color: #641385;
    margin-top: 15px;
    font-size: 16px;
  }
  .page-component-up{
    background-color: #fff;
    position: fixed;
    right: 8px;
    bottom: 65px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 5;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    display: flex;
  }
  .glyphicon-triangle-top{
    color: #17b6ad;
    margin: auto;
    font-size: 15px;

  }
  .page-component-up-box{
    /*display: none;*/
    /*opacity: 0;*/
  }
</style>
