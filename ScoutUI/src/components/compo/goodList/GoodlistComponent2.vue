<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>商品列表二</h1>
        <p>带有五星评价小图标，包括地址显示位置，价格以及最近活动图标显示。</p>
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
<div>
    <div class="orderCollectBox">
      <img src="../../../../assets/img/LOGO.png" alt="">
      <div class="orderCollectBoxR">
        <h1>羹团外卖豆乳盒子<img src="../../../../assets/img/LOGO.png" alt=""></h1>
        <h2>
          <p>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
            <i class="iconfont">&#xe622;</i>
          </p>
          人均：￥88
        </h2>
        <h3>科技四路&nbsp;&nbsp;立人科技</h3>
      </div>
    </div>
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
            <div class="code-body">
              <!--//....子组件....-->
<good-list-examp2></good-list-examp2>
            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>

  import GoodListExamp2 from "./ExampAddress/GoodListExamp2";
  export default {
    name: "GoodlistComponent2",
    components: {GoodListExamp2}
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
