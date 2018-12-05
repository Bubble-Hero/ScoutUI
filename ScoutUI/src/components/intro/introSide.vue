<template>
  <div class="side">
    <div class="logo">
      <img src="../../assets/img/LOGO-transparent.png" >
      <h3>Scout<b style="color:#641385;">UI</b></h3>
    </div>

    <span class="liTitle">指南     ></span>
    <ul class="slideUL">
      <li>关于 Scout UI</li>
      <li>设计理念</li>
      <li>兼容</li>
      <li>相关链接</li>
    </ul>
    <span class="liTitle">组件     ></span>
    <ul class="slideUL">
      <li>功能一</li>
      <li>功能二</li>
      <li>功能三</li>
      <li>功能四</li>
    </ul>
    <span class="liTitle">团队     ></span>
    <ul class="slideUL">
      <li>团队介绍</li>
      <li>团队成员</li>
    </ul>
    <span class="liTitle">客户案例     ></span>
    <ul class="slideUL">

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
              $(this).next().stop().slideToggle(500);
            });
        })

      }

    }

</script>

<style lang="scss" scoped>
ul{
    li{
      cursor: pointer;
    }
  }
.side span:hover{
      color:#641385;
}

.liTitle{
  cursor: pointer;
  margin-top: 30px;
}
.side li:hover{
  background:rgba(23,173,182,.4);color:white;
}
.slideUL{
  padding-top: 20px;
}
.s-m-b{
  margin-bottom: 30px;
}
  .side{
      width: 270px;
      background: rgba(226,226,226,.5);
      padding: 83px 0 40px;
      border: 1px solid lightgray;
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      overflow-y: scroll;
  }

::-webkit-scrollbar {
  width: 14px;
  background:linear-gradient(to right,#17b6ad 50%,#641385) ;
}


/*!*定义滚动条轨道 内阴影+圆角*!*/
/*::-webkit-scrollbar-track*/
/*{*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
  /*border-radius: 10px;*/
  /*background-color: #F5F5F5;*/
/*}*/

/*!*定义滑块 内阴影+圆角*!*/
/*::-webkit-scrollbar-thumb {*/
  /*border-radius: 10px;*/
  /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);*/
  /*background-color: #555;*/
/*}*/
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
