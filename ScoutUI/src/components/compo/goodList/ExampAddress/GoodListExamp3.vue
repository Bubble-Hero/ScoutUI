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
