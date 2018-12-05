<template>
  <div class="con-section">
    <ul class="">
      <li>
        <h1>分类菜单一</h1>
        <p class="ullipLast">图片以及文字竖向排列分类菜单，如下面实例所示：</p>
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
                    <textarea style="resize:none;" name="" id="" cols="30" rows="10"
                              readonly="readonly">
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
                                <i>
                                  <img src="../../../../static/img/xinfang.gif"/>
                                </i>
                                <span>新房</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i>
                                  <img src="../../../../static/img/zufang.gif"/>
                                </i>
                                <span>租房</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i>
                                  <img src="../../../../static/img/haiwai.gif"/>
                                </i>
                                <span>海外</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i>
                                  <img src="../../../../static/img/zhuangxiu.gif"/>
                                </i>
                                <span>装修</span>
                              </a>
                            </li>
                          </ul>
                          <ul>
                              <li>
                                <a href="">
                                  <i>
                                    <img src="../../../../static/img/ershoufang.gif"/>
                                  </i>
                                  <span>帮我找房</span>
                                </a>
                              </li>
                              <li>
                                <a href="baike.html">
                                  <i>
                                    <img src="../../../../static/img/haiwai.gif"/>
                                  </i>
                                  <span>百科</span>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <i>
                                    <img src="../../../../static/img/xinfang.gif"/>
                                  </i>
                                  <span>找小区</span>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <i>
                                    <img src="../../../../static/img/zhuangxiu.gif"/>
                                  </i>
                                  <span>查成交</span>
                                </a>
                              </li>
                              <li>
                                <a href="jingji.html">
                                  <i>
                                    <img src="../../../../static/img/zufang.gif"/>
                                  </i>
                                  <span>找经纪人</span>
                                </a>
                              </li>
                            </ul>
                        </div>
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
            <div class="code-body right">
              <!--//....子组件....-->
              <classify-menu></classify-menu>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import ClassifyMenu from "./ClassifyMenu";
    export default {
        name: "ClassifyMenuCom",
      components: {ClassifyMenu}
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
    background: #fff;
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
    margin:auto
  }
  .right{
    width: 85%;
    height: 450px;
    overflow: auto;
    margin:auto
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
