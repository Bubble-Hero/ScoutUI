<template>
    <div class="indexSection">
        <div class="logoBox">
          <img class="logoImg" src="../../assets/img/LOGO-transparent.png" alt="">
          <div class="logoBoxR">
            <h1>快速、强悍、性感</h1>
            <h2>ScoutUI  让开发者和设计师欲罢不能</h2>
            <h3>--基于Vue2.0组件库</h3>
          </div>
        </div>
        <div class="section1">
            <div class="whyBox">
              <div class="whyBoxInner">
                <h1 class="D-change">Why choose ScoutUI ?</h1>
                <router-link to="/intro">
                  <h1 class="D-change">Start</h1>
                </router-link>
                <a href="https://github.com/Bubble-Hero" target="_blank">
                  <h1 class="D-change">GITHUB</h1>
                </a>
              </div>
              <div class="feature">
                  <div class="feature1" :key="m" v-for="(i,m) in featureData">
                    <div class="feature1span"><span :class="i.span1"></span>{{i.spanText}}<span style="color: #641385;font-size: 15px;">{{i.spanR}}</span></div>
                    <div class="feature1spanContent">{{i.featureContent}}</div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexSection",
        data(){

          return{
            "featureData":[
              {
                "span1":"glyphicon glyphicon-thumbs-up",
                "spanText":"极简",
                "spanR":"Simple",
                "featureContent":"极简是视觉所见的外在，是开发所念的简易。即便零门槛望而却步，即刻阅读指南，便走进世外桃源！"
              },
              {
                  "span1":"glyphicon glyphicon-check",
                  "spanText":"强大",
                  "spanR":"Strong",
                  "featureContent":"寒冷冬季，也暖阳相待。等，春风十里，散作满天星辰，看那四季轮回，正是ScoutUI不灭的执念。"

              },
              {
                "span1":"glyphicon glyphicon-briefcase",
                "spanText":"专业",
                "spanR":"Specialty",
                "featureContent":"谁为你歌一曲长安，歌尽了悲欢。谁为你着羽衣霓裳，舞尽了凄婉。谁为你颂采薇情缘，诉尽了肠断。是我。"
              }
            ]
          }
      },
      methods:{
          changeColor(){
            let colorArr=["rgb(100, 19, 133)","#17b6ad","#ff0","#2D0","#3FA","#705"]
            //颜色随机
            $(".D-change").hover(function () {
              //放在里面。每移上一次，获取一次随机数
              let round=parseInt(Math.random()*colorArr.length-1)
              let Acolor=colorArr[round]
              $(this).css({color:Acolor})
                $(this).addClass("fff")
              console.log(Acolor)
            },function () {
              $(this).css({color:"#fff"})
              $(this).removeClass("fff")
            })
          }
      },
      mounted(){
          this.changeColor()
      },
      updated(){
        this.changeColor()
      }
    }
</script>

<style scoped>
  .fff{
   border-color:#fff!important;
  }
  .indexSection{
    padding-top:65px;
  }
  .logoBox{
  display: flex;
  align-items: center;
  justify-content: center;
}
  .logoImg{
    width: 250px;
    height: 250px;
    margin-right: 40px;
    cursor: pointer;
  }
  .logoBoxR h1{
    font-size:45px ;
    line-height:68px ;
    color: #fff;
  }
  .logoBoxR h2{
    font-size: 25px;
    line-height: 60px;
    color: #319281;
  }
  .logoBoxR h3{
    font-size:20px ;
    line-height:40px ;
    color: #17b6ad;
  }
  .section1{
    padding:40px 100px;
  }
  .whyBox{
    width: 100%;
    /*padding: 0 180px;*/
  }
  .whyBoxInner {
    height: 60px;
    background: rgba(0, 0, 0, .2);
    padding: 0 30px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .whyBoxInner h1{
    /*width: 60%;*/
    padding:0 40px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    border: 1px dashed #17b6ad;
    transition: border-radius .6s;
    margin-right: 20px;
    cursor: pointer;
    white-space: nowrap;
  }
  .whyBoxInner h1:hover{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .feature{
    display:flex;
    justify-content: space-between;
  }
  .feature1{
    flex: 1;
    text-align: center;
  }
  .feature1span{
    font-size:20px ;
    color: gray;
    line-height:45px;
  }
  .feature1span span{
    margin-right: 20px;
  }
  .feature1spanContent{
    width: 200px;
    margin: 0 auto;
    color:#17b6ad;
    font-sizd:25px;
    line-height: 30px;
  }
</style>
