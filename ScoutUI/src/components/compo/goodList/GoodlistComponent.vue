<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>商品列表一</h1>
        <p>带有标题的商品列表，显示评价状态，常规实用。</p>
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
    <div class="orderNearByBox">
      <div class="orderNearByBoxHeader">
        <div class="orderNearByBoxHeaderL">
          <img src="../../../../assets/img/LOGO.png" alt="">
          <p>羹团美食</p>
        </div>
        <div class="orderNearByBoxHeaderR">
          <p>已评价</p>
        </div>
      </div>
      <div class="orderNearByBoxContent">
        <img src="../../../../assets/img/LOGO.png" alt="">
        <div class="orderNearByBoxContentR">
          <h1>瑞哈娜火锅代金券<i class="iconfont">&#xe63b;</i></h1>
          <h2>数量：1</h2>
          <h3>总价：￥888</h3>
        </div>
      </div>
    </div>
    <div class="orderNearByBox">
      <div class="orderNearByBoxHeader">
        <div class="orderNearByBoxHeaderL">
          <img src="../../../../assets/img/LOGO.png" alt="">
          <p>羹团美食</p>
        </div>
        <div class="orderNearByBoxHeaderR">
          <p>已评价</p>
        </div>
      </div>
      <div class="orderNearByBoxContent">
        <img src="../../../../assets/img/LOGO.png" alt="">
        <div class="orderNearByBoxContentR">
          <h1>瑞哈娜火锅代金券<i class="iconfont">&#xe63b;</i></h1>
          <h2>数量：1</h2>
          <h3>总价：￥888</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GoodListExamp"
    }
</script>

<style scoped>
  .orderNearByBox{
    border:.2rem solid #f6f6f7;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
    background: #ffffff;
    padding: 1.3rem 1.3rem 1.6rem;
    box-shadow:0rem 1rem 1.8rem #fee7d2 ;
    margin-bottom: 3rem;
  }
  .orderNearByBox:last-child{
    box-shadow:0rem 1rem 1.8rem #fef1ce;
  }
  .orderNearByBoxHeader{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.6rem;
  }
  .orderNearByBoxHeaderL{
    display: flex;
  }
  .orderNearByBoxHeaderL img{
    width:2.2rem;
    height:2.2rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: .5rem;
  }
  .orderNearByBoxHeaderL p{
    font-size:1.4rem ;
    lne-height:2.2rem;
  }
  .orderNearByBoxHeaderR p{
    font-size:1.3rem ;
    lne-height:2.2rem;
  }
  .orderNearByBoxContent{
    display: flex;
  }
  .orderNearByBoxContent img{
    width:3.2rem;
    height: 3.2rem;
    margin-right: 1rem;
  }
  .orderNearByBoxContentR h1{
    font-size:1.5rem ;
    line-height: 3.2rem;
    font-weight: 100;
  }
  .orderNearByBoxContentR h2{
    font-size:1.2rem ;
    line-height: 2.5rem;
    font-weight: 100;
  }
  .orderNearByBoxContentR h3{
    font-size:1.2rem ;
    line-height: 2.5rem;
    font-weight: 100;
  }
  .orderNearByBoxContentR i{
    font-size:1.1rem ;
    color: #7a7a7a;
    margin-left: .5rem;
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
              <good-list-examp></good-list-examp>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>

  import GoodListExamp from "./ExampAddress/GoodListExamp";
  export default {
    name: "GoodlistComponent",
    components: {GoodListExamp}
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
  .codeH{
    width: 90%;
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
