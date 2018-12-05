<template>
  <div class="nav">
    <ul class="one" >
      <li class="first" data-toggle="collapse" data-target="#demo">
        <div href="">
          <span>NAVIGATION</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
      </li>
    </ul>

    <ul id="demo" class="collapse in two">

      <li v-for="(is,ts) in list" style="position: relative;" class="show">
        <a class="sec">
          <i :class="is.i1" class="padd"></i>
          <p class="dis">
            <span>{{is.span}}</span>
            <i :class="is.i2"></i>
          </p>
        </a>
        <div class="xiao" style=""></div>
        <ul style="display: none;" class="coo">
          <router-link to="/form">
          <li v-for="(iss,tss) in is.ulli" class="geta">
            <a href="">
              <i :class="iss.i3"></i>
              <span>{{iss.spp}}</span>
            </a>
          </li>
          </router-link>
        </ul>
      </li>
    </ul>

    <ul class="one">
      <li class="first">
        <div data-toggle="collapse" data-target="#demo1">
          <span>ORDERS SUMMARY</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
        <div id="demo1" class="collapse">
          <div class="chart1">
              <p>THIS WEEK SALES</p>
              <p>THIS WEEK BALANCE</p>
          </div>
        </div>
      </li>
      <li class="first">
        <div data-toggle="collapse" data-target="#demo2">
          <span>GENERAL SETTINGS</span>
          <i class="glyphicon glyphicon-menu-down"></i>
        </div>
        <div id="demo2" class="collapse">
          <p>switch ON</p>
          <p>switch OFF</p>
        </div>
      </li>
    </ul>

  </div>


</template>

<script>
    import $ from "jquery";
    export default {
        name: "LeftComponents",
        data(){
          return{
            list:[
              {
                "i1":"glyphicon glyphicon-fire",
                "span":"Dashboard"
              },
              {
                "i1":"glyphicon glyphicon-align-justify",
                "span":"Forms",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"common element"},
                  {"i3":"glyphicon glyphicon-play","spp":"validation"},
                  {"i3":"glyphicon glyphicon-play","spp":"Form Wizard"}
                  ]
              },
              {
                "i1":"glyphicon glyphicon-pencil",
                "span":"Interface",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"UI Element"},
                  {"i3":"glyphicon glyphicon-play","spp":"typography"},
                  {"i3":"glyphicon glyphicon-play","spp":"Tiles"}
                ]
              },
              {"i1":"glyphicon glyphicon-tint",
                "span":"Buttons & Icons"
              },
              {"i1":"glyphicon glyphicon-th",
                "span":"Grid Layout"
              },
              {"i1":"glyphicon glyphicon-th-large",
                "span":"Tables",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"Bootstrap Tables"},
                  {"i3":"glyphicon glyphicon-play","spp":"DataTables"}
                ]
              },
              {"i1":"glyphicon glyphicon-sd-video",
                "span":"Example Pages mails",
                "i2":"glyphicon glyphicon-plus",
                "ulli":[
                  {"i3":"glyphicon glyphicon-play","spp":"Login Pages"},
                  {"i3":"glyphicon glyphicon-play","spp":"Calendar"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page 404"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page 500"},
                  {"i3":"glyphicon glyphicon-play","spp":"Page Offline"}
                ]
              },
              {"i1":"glyphicon glyphicon-expand",
                "span":"Widgets"
              },
              {"i1":"glyphicon glyphicon-stats",
                "span":"Charts & Graphs"
              }
            ]
          }
        },
        mounted(){
            $(function(){
              $('.show').eq(0).children('.xiao').animate({left:"0"})
              //hover的时候改变字体颜色
              $('.geta').hover(function(){
                $(this).children('a').css({
                  "color":"#418208"
                })
                $(this).children('a').children('i').css({
                  "color":"#418208"
                })
                $(this).siblings().children('a').css({
                  "color":"#fff"
                })
                $(this).siblings().children('a').children('i').css({
                  "color":"#fff"
                })
              },function(){
                $(this).children('a').css({
                  "color":"#fff"
                })
                $(this).children('a').children('i').css({
                  "color":"#fff"
                })
              })
              //点击下拉菜单
              $('.sec').click(function(){
                $(this).siblings(".coo").slideToggle(300)
                $(this).parent().siblings("li").children(".coo").slideUp(300)
                //改变遮罩层的left
                // $(this).siblings('.xiao').animate({
                //   left:'0px'
                // })
                // $(this).parent().siblings("li").children(".xiao").not($('.xiao')[0]).css({left:'-250px',})
                //切换iconfont
                 $(this).children('p').children('i').stop().toggleClass("glyphicon glyphicon-minus")
                $(this).parent().siblings().find('p').children('i').stop().removeClass("glyphicon glyphicon-minus")
                  $('.dis').eq(3).children("i").add($('.dis').eq(4).children("i")).add($('.dis').eq(7).children("i")).add($('.dis').eq(8).children("i")).removeClass("glyphicon glyphicon-minus")
              })
            })

        }
    }
</script>

<style scoped>

  @media screen and (max-width: 960px){
    .show:hover{
      background: #333;
      /*width: 250px;*/
    }
    /*.show:hover .dis{*/
      /*opacity: 1;*/
    /*}*/
    .nav{
      width: 45px!important;
    }
    .padd{
      padding-left: 18px;
    }
    .dis{
      opacity: 0;
    }
    .one{
      display: none;
    }
    .xiao{
      width: 45px!important;
    }
  }

  html,body{
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  .nav{
    /*position: fixed;*/
    background: #17b6ad;
    color: #fff;
    width: 250px;
    height: 100%;
  }
  .nav .one{
    background: #17b6ad;
  }
  .nav .one li{
    list-style: none;
    padding-left: 15px;
    cursor: pointer;
  }
  .nav ul li a{
    text-decoration: none;
  }
  .nav .one .first{
    width: 100%;
    line-height: 45px;
  }
  .nav .one .first i{
    float: right;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .nav .one .first div{
    color: #aa7864;
  }
  .chart1 p{
    font-size: 12px;
    color: #fff;
    width: 100%;
  }
  .nav .two li:hover{
    cursor: pointer;
  }
  .nav .two li{
    z-index: 10000!important;
  }
  .nav .two li .sec{
    display: flex;
    height: 45px;
    color: #fff;
    background: #17b6ad;
  }
  .nav .two li .sec i{
    line-height: 45px;
  }
  .nav .two li .sec i:nth-of-type(1){
    width: 45px;
    height: 45px;
    text-align: center;
  }
  .nav .two li .sec .dis{
    line-height: 45px;
    flex: 1;
  }
  .nav .two li .sec .dis i{
    float: right;
  }
  .nav .two li .coo{
    padding-left: 20px;
    width: 100%;
    background: #17b6ad;
  }
  .nav .two li .coo li{
    line-height: 30px;
  }
  .nav .two li .coo li a{
    font-size: 12px;
    color: #fff;
  }
  .nav .two li .coo li a i{
    font-size: 10px;
    color: #fff;
  }
  #demo2 p{
    color: #fff;
  }
  .xiao{
    position: absolute;
    width: 250px;
    height: 45px;
    z-index: -1;
    /*background: linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,0));*/
    top: 0;
    left: 0px;
  }
</style>
