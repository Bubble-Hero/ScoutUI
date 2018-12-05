<template>
  <div class="con-section">
    <ul class="">
      <li>
        <h1>分类菜单二</h1>
        <p class="ullipLast">图片以及文字横向排列的分类菜单，如下面实例所示：</p>
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
                <div class="news">
                   <ul>
                     <li>
                              <a href="#">
                                <div>
                                  <h3>十月第三周</h3>
                                  <p>成交价量齐跌</p>
                                </div>
                                <img src="img/1.gif"/>
                              </a>
                            </li>
                     <li>
                              <a href="">
                                <div>
                                  <h3>十月第三周</h3>
                                  <p>成交价量齐跌</p>
                                </div>
                                <img src="img/1.gif"/>
                              </a>
                            </li>
                   </ul>
                   <ul>
                     <li>
                              <a href="#">
                                <div>
                                  <h3>十月第三周</h3>
                                  <p>成交价量齐跌</p>
                                </div>
                                <img src="img/1.gif"/>
                              </a>
                            </li>
                     <li>
                              <a href="#">
                                <div>
                                  <h3>十月第三周</h3>
                                  <p>成交价量齐跌</p>
                                </div>
                                <img src="img/1.gif"/>
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
              <classify-menu2></classify-menu2>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    import ClassifyMenu2 from "./ClassifyMenu2";
    export default {
        name: "ClassifyMenuCom2",
      components: {ClassifyMenu2}
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
