<template>
  <div class="con-section">
    <ul class="">
      <li>
        <h1>商品列表三</h1>
        <p>带有地址，显示距离，显示价格以及原价。</p>
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
  <div>
    <div class="orderVistsBox">
      <img src="../../../../assets/img/LOGO.png" alt="">
      <div class="orderVistsBoxR">
        <div class="hh1"><h1>羹团</h1><p>8.6km</p></div>
        <h2>
          羹团外卖
        </h2>
        <h3><p>￥88</p>&nbsp;&nbsp;原价：￥99</h3>
      </div>
    </div>
  </div>
  <div>
    <div class="orderVistsBox">
      <img src="../../../../assets/img/LOGO.png" alt="">
      <div class="orderVistsBoxR">
        <div class="hh1"><h1>羹团</h1><p>8.6km</p></div>
        <h2>
          羹团外卖
        </h2>
        <h3><p>￥88</p>&nbsp;&nbsp;原价：￥99</h3>
      </div>
    </div>
  </div>
  <div>
    <div class="orderVistsBox">
      <img src="../../../../assets/img/LOGO.png" alt="">
      <div class="orderVistsBoxR">
        <div class="hh1"><h1>羹团</h1><p>8.6km</p></div>
        <h2>
          羹团外卖
        </h2>
        <h3><p>￥88</p>&nbsp;&nbsp;原价：￥99</h3>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
      name: "GoodListExamp3"
    }
</script>

<style scoped>
  .orderVistsBox{
    display: flex;
    border-top: .2rem solid #f7f7f7;
    padding: 1.4rem 0;
    background: #ffffff;
  }
  .orderVistsBox img{
    width:7.7rem;
    height: 5.8rem;
    margin: auto 0;
    margin-right: 1rem;
  }
  .orderVistsBoxR{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .orderVistsBoxR .hh1 {
    display: flex;
    justify-content: space-between;
  }
  .orderVistsBoxR h1{
    font-size:1.5rem ;
    font-weight:100 ;
  }
  .orderVistsBoxR h1 img{
    width: 1.5rem;
    height: 1.5rem;
    /*margin-top:1rem;*/
  }
  .orderVistsBoxR h2{
    font-size:1.2rem ;
    font-weight:100 ;
    display: flex;
  }

  .orderVistsBoxR h3{
    font-size:1.2rem ;
    font-weight:100 ;
    display: flex;
    align-items: center;
  }
  .orderVistsBoxR h3 p{
    font-size:1.6rem ;
    color: #ff5a15;
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
              <good-list-examp3></good-list-examp3>
            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import GoodListExamp3 from "./ExampAddress/GoodListExamp3";
    export default {
        name: "GoodlistComponent3",
      components: {GoodListExamp3}
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
    width:100%;
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

