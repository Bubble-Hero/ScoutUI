<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>上拉菜单一</h1>
        <p>上拉菜单，点击购买淡出购买方式卡片，包含关闭按钮</p>
        <p class="ullipLast">如下面实例所示：</p>
        <div class="case">
          <div class="code">
            <div class="code-header">
              <form class="form-inline">
                <button type="button" class="btn btn-default">
                  源代码:
                </button>
              </form>
            </div>
            <div class="code-body"  style="overflow: auto;">
                    <textarea style="resize:none;" name="" id="" cols="30" rows="10"  readonly="readonly">
<template>
  <div>
    <div class="footerDiv">
      <div class="footSlide footSlide2">
        <div class="footSlideHeaderBox">
          <div></div>
          <p>确认支付</p>
          <i class="iconfont icon-guanbi1"></i>
        </div>
        <div class="footSlideBox">
          <div class="footSlideBox1">
            <h1>价格</h1>
            <h2>售价：￥17.1</h2>
          </div>
        </div>
        <div class="footSlideBox">
          <div class="footSlideBox1">
            <h1>优惠券</h1>
            <h2>没有有用的优惠券</h2>
          </div>
        </div>
        <div class="footSlideBox">
          <div class="footSlideBox1">
            <h1>奖学金</h1>
            <h2>￥0.0</h2>
          </div>
        </div>
        <div class="footSlideBox">
          <div class="footSlideBox1">
            <h1>支付方式</h1>
            <h2 class="paying">微信<i class="iconfont icon-xiangyou"></i></h2>
          </div>
        </div>
      </div>
      <footer>
      <div class="footerLeft">
        <h1>售价：￥17.1</h1>
        <h2>(市场价：￥42.8)</h2>
      </div>
      <div class="footerRight"><h3>购买</h3></div>
    </footer>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "SlideExamp1",
    mounted(){
      $(".footerRight").click(function(){
        $(".footSlide2").fadeToggle(500);
      })
      $(".footSlideHeaderBox .icon-guanbi1").click(function(){
        $(".footSlide2").fadeToggle(500);
      })

    }
  }
</script>

<style scoped>
  .footerDiv{
    position: relative;
    height: 280px;
    padding-bottom: 25px;
  }
  footer{
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .footSlide2{
    position: absolute;
    left: 0;
    bottom: 50px;
    /*display: none;*/
  }
  /*-------------------------------------------下方弹出窗*/
  .footSlide{
    width: 100%;
    background: white;
    height:266px;
    position: relative;
    left: 0;
    bottom: 0;
  }
  .footSlideHeaderBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ebebeb;
  }
  .footSlideHeaderBox p{
    font-size: 16px;
  }
  .footSlideHeaderBox i{
    display: block;
    font-size: 15px;
    color: #b9b9b9;
  }
  .footSlideBox{
    padding:0 15px;
    background: white;
  }
  .footSlideBox1{
    border-bottom: 1px solid #ebebeb;
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
  }
  .footSlideBox1 h1{
    font-size: 13px;
    color: #808080;
    font-weight: 100;
  }
  .footSlideBox1 h2{
    font-size: 13px;
    color: #808080;
    font-weight: 100;
  }
  .footSlideBox1 i{
    font-size: 13px;
    color: #259eff;
    font-weight: 100;
  }
  .footerLeft{
    width: 100%;
  }
  .footerLeft h1{
    font-size:12px ;
    color: #000;
    line-height: 17px;
    margin-left: 17px;
    font-weight: 100;
  }
  .footerLeft h2{
    font-size:10px ;
    color: #919191;
    line-height:14px ;
    text-decoration: line-through;
    margin-left: 17px;
    font-weight: 100;
  }
  .footerRight{
    width: 125px;
    height: 100%;
    background: #3ba8ff;
  }
  .footerRight h3{
    font-size:15px ;
    color: white;
    text-align: center;
    line-height:50px ;
    font-weight: 100;
  }
</style>
                    </textarea>
            </div>
          </div>
          <div class="result">
            <div class="code-header">
              <form class="form-inline">
                <button type="button" class="btn btn-default">
                  运行结果
                </button>
              </form>
            </div>
            <div class="code-body codeH">
              <!--//....子组件....-->
              <slide-examp1></slide-examp1>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>

  import SlideExamp1 from "./slideExamp/SlideExamp1";
  export default {
    name: "SlideUpComponent1",
    components: {SlideExamp1}
  }
</script>

<style scoped>
  .con-section{
    width: 100%;
    /*height: 100%;*/
    padding: 0 20px 50px;
    border-bottom: 1px solid #17b6ad;
  }
  ul li h1{
    width: 100%;
    line-height: 40px;
    font-size: 22px;
    /*background: #fff;*/
    margin: 20px 0 10px;
  }
  ul li p{
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
    margin-right: 140px;
  }
  .ullipLast{
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 12px;
  }
  .case{
    line-height: 20px;
    margin: 0;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
  }
  .code{
    width:49%;
    height: 497px;
    border:1px solid #dddddd }
  .code-header{
    padding: 5px 10px;
    border-bottom: 1px solid #dddddd;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background:#f6f6f6
  }
  .code-body{
    width: 100%;
    height: 450px;
    overflow: auto;
  }
  .codeH{
    width: 70%;
    margin: auto;
  }
  textarea{
    width: 100%;
    border:none;
    height: 100%;
  }
  .btn-default{
    color: #17b6ad;
    background-color: #fff;
    border-color: #ccc;
  }
  .btn{

    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle
  }
  .case .result{
    width:49%;
    height: 497px;
    border:1px solid #dddddd }
</style>
