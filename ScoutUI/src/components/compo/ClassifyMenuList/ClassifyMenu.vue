<template>
  <div id="fenlei">
    <ul>
      <li>
        <a href="">
          <i><img src="../../../../static/img/ershoufang.gif"/></i>
          <span>二手房</span>
        </a>
      </li>
      <li>
        <a href="xinfang.html">
          <i><img src="../../../../static/img/xinfang.gif"/></i>
          <span>新房</span>
        </a>
      </li>
      <li>
        <a href="">
          <i><img src="../../../../static/img/zufang.gif"/></i>
          <span>租房</span>
        </a>
      </li>
      <li>
        <a href="">
          <i><img src="../../../../static/img/haiwai.gif"/></i>
          <span>海外</span>
        </a>
      </li>
      <li>
        <a href="">
          <i><img src="../../../../static/img/zhuangxiu.gif"/></i>
          <span>装修</span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">
          <i><img src="../../../../static/img/ershoufang.gif"/></i>
          <span>帮我找房</span>
        </a>
      </li>
      <li>
        <a href="baike.html">
          <i><img src="../../../../static/img/haiwai.gif"/></i>
          <span>百科</span>
        </a>
      </li>
      <li>
        <a href="">
          <i><img src="../../../../static/img/xinfang.gif"/></i>
          <span>找小区</span>
        </a>
      </li>
      <li>
        <a href="">
          <i><img src="../../../../static/img/zhuangxiu.gif"/></i>
          <span>查成交</span>
        </a>
      </li>
      <li>
        <a href="jingji.html">
          <i><img src="../../../../static/img/zufang.gif"/></i>
          <span>找经纪人</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "ClassifyMenu",
      data(){
          return{
            "classifymenu":[
              {"title":"二手房","pic":"../../../../static/img/ershoufang.gif"},
              {"title":"新房","pic":"../../../../static/img/xinfang.gif"},
              {"title":"租房","pic":"../../../../static/img/zufang.gif"},
              {"title":"海外","pic":"../../../../static/img/haiwai.gif"},
              {"title":"装修","pic":"../../../../static/img/zhuangxiu.gif"},

            ]
          }
      }
    }
</script>

<style scoped>
  #fenlei ul{
    width: 80%;
    padding: 50px 0 0 0;
    font-size:13px;
    color:#6b6b6d;
    display: flex;
    margin: 0 auto;

    text-align: center;
  }
  #fenlei ul li{
    flex:1;
    width:180px;
    height: 70px;
    display: flex;
    text-align: center;
    margin:12px 8px}
  #fenlei ul li img{
    width:46px;
    height: 46px;
    margin: auto;
    margin-bottom: 12px;}
  #fenlei ul li span{
    display: inline-block;
    width:55px;color: #747577;}
  #fenlei .circle{width:.34rem;height:.34rem;
  }
</style>
