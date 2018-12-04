<template>
  <div class="side">
    <div class="logo">
      <img src="../../assets/img/LOGO-transparent.png" >
      <h3>Scout<b style="color:#641385;">UI</b></h3>
    </div>

    <span>指南     ></span>
    <ul>
      <li>关于 Scout UI</li>
      <li>设计理念</li>
      <li>兼容</li>
      <li>相关链接</li>
    </ul>
    <span>组件     ></span>
    <ul>
      <li>功能一</li>
      <li>功能二</li>
      <li>功能三</li>
      <li>功能四</li>
    </ul>
    <span>关于我们     ></span>
    <ul>
      <li>功能一</li>
      <li>功能二</li>
      <li>功能三</li>
      <li>功能四</li>
    </ul>
  </div>

</template>

<script>
  import $ from "jquery"
    export default {
        name: "introSide",
      mounted(){
          $(function(){
            $(".side span").stop().click(function(){
              $(this).next().toggle(500);
            });

            $(".side span").each(function(){
              $(this).hover(
                function(){
                  $(this).css({color:"#641385"});
                },
                function(){
                  $(this).css({color:"#17b6ad"});
                }
              );
            });
            $(".side li").each(function(){
              $(this).hover(
                function(){
                  $(this).css({background:'rgba(23,173,182,.4)',color:"white"})
                },
                function(){
                  $(this).css({background:'',color:"#324d68"})
                }
              )
            });
        })

      }

    }

</script>

<style scoped>
  .side{
    width: 290px;
    height: 100%;
    background: rgba(0,0,0,.02);
    padding:60px 0 40px;
    border: 1px solid lightgray;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
  }
  .logo{
    display: flex;
    padding-left: 30px;
  }
  .side h3{
    font-size: 20px;
    color: #17b6ad;
    margin-top: 20px;
  }
  .side img{
    width: 28px;
    height: 28px;
    margin-right: 5px;
    margin-top: 12px;
  }
  .side span{
    display: block;
    font-size: 18px;
    color: #17b6ad;
    margin: 30px 0;
    font-weight: 600;
    padding-left: 30px;
  }
  .side li{
    font-size: 16px;
    color: #324d68;
    margin-left: 10px;
    padding:6px 30px;
  }
</style>
