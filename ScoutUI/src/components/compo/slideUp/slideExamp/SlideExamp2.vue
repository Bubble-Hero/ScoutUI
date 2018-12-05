<template>
  <div class="fastDownBoX">
    <div class="fastDown">
      <div class="carList">
        <img src="../../../../assets/img/LOGO.png" style="margin-left: 30px;margin-right: 20px;"/>
        <div class="goodsDetial">
          <h1>cute press 美女与野兽丝绒雾面唇釉02#true love 西柚色</h1>
          <h2>色号：02#true love</h2>
          <div class="moneyAndAddCut">
            <h3 style="color: red;">¥ 56.00</h3>
            <h3 style="color: #CCCCCC;text-decoration: line-through;margin-right: 30px;">¥ 89</h3>
          </div>

        </div>
        <div class="iconClose" style="margin-right:10px;">
          <i class="iconfont icon-close" style="display: block;font-size: 15px;"></i>
        </div>
      </div>
      <div class="colorBox">
        <h3>色号</h3>
        <h1>02#true love</h1>
        <h2>03#my beast</h2>
      </div>
      <div class="colorBox">
        <h3>运费</h3>
        <h3>满88元包邮 不足需支付运费8.00元</h3>
      </div>
      <div class="colorBox" style="justify-content: space-between;padding-bottom: 10px;">
        <h3>选择数量</h3>
        <div class="addCutBox">
          <p class="add">-</p>
          <p class="number">1</p>
          <p class="cut">+</p>
        </div>
      </div>
      <div class="fastSpend">立即支付</div>
    </div>
  </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "SlideExamp2",
      mounted() {
        //		立即支付页面点击颜色切换按钮背景
        $(".colorBox h1").click(function(){
          $(".colorBox h1").css({
            color:"white",
            background:"#fb5957"
          });
          $(".colorBox h2").css({
            color:"#7a7a7a",
            background:"#f4f4f4"
          });
        });
        $(".colorBox h2").click(function(){
          $(".colorBox h2").css({
            color:"white",
            background:"#fb5957"
          });
          $(".colorBox h1").css({
            color:"#7a7a7a",
            background:"#f4f4f4"
          });
        });

      }
    }
</script>

<style scoped>
  .carList{
    display: flex;
    height: 108px;
    width: 100%;
    align-items: center;
    background: white;
    border-bottom: 1px solid #f9f9f9;
  }
.fastDownBoX{
  height: 388px;
  position: relative;
}

.fastDown{
  width: 375px;
  height: 343px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  /*display: none;*/
}
.colorBox{
  /*width: 100%;*/
  height: 58px;
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.colorBox h3{
  font-size: 12px;
  color: #7a7a7a;
  line-height: 58px;
  margin-right: 30px;
}
.colorBox h1{
  width: 109px;
  height:28px ;
  background:#fb5957 ;
  font-size: 12px;
  color: white;
  line-height: 28px;
  margin-right: 20px;
  border-radius: 10px;
  text-align: center;
}
.colorBox h2{
  width: 109px;
  height:28px ;
  background:#f4f4f4 ;
  font-size: 12px;
  color: #7a7a7a;
  line-height: 28px;
  border-radius: 10px;
  text-align: center;
}
.fastSpend{
  width: 100%;
  height: 50px;
  background:#fb5957 ;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
}
.carList img{
  width:73px ;
  height: 85px;
  margin-right: 6px;
}
.moneyAndAddCut{
  display: flex;
  justify-content: space-between;
}
.carList h1{
  font-size: 14px;
  color:#6d6d6d ;
  line-height: 16px;
  font-weight: 100;
}
.carList h2{
  font-size: 12px;
  color:#9b9b9b ;
  line-height: 25px;
  font-weight: 100;
  margin-bottom: 5px;
}
.carList h3{
  font-size: 14px;
  color:#6d6d6d ;
  line-height: 25px;
}
.addCutBox{
    display: flex;
    width: 96px;
    height:30px ;
    background:white;
    text-align: center;
    margin-right: 30px;
  }
.add{
  width: 32px;
  height: 30px;
  font-size: 14px;
  color:#b6b6b6 ;
  line-height: 16px;
  font-weight: 100;
  margin-right: 3px;
  background:#f6f6f6 ;
  border-top-left-radius: 10px;
  border-bottom-left-radius:10px ;
  padding-top: 8px;
  box-sizing: border-box;
}
.number{
  width: 29px;
  font-size: 14px;
  color:#b6b6b6 ;
  line-height: 16px;
  font-weight: 100;
  margin-right: 3px;
  background:#f6f6f6 ;
  padding-top: 8px;
  box-sizing: border-box;
}
.cut{
  width: 32px;
  height: 30px;
  font-size: 14px;
  color:#b6b6b6 ;
  line-height: 16px;
  font-weight: 100;
  background:#f6f6f6 ;
  border-top-right-radius: 10px;
  border-bottom-right-radius:10px ;
  padding-top: 8px;
  box-sizing: border-box;
}
.carDonw{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 41px;
  background: white;
  margin-bottom: 12px;
}
.carDownLeft{
  display: flex;
  align-items: center;
}
.carDownLeft h1{
  font-size: 11px;
  color: #bfbfbf;
  line-height:41px ;
  font-weight:100 ;

}
.carDownLeft img{
  width:34px ;
  height: 16px;
  margin-right: 5px;
  margin-left: 45px;
}
.carDownRight{
  display: flex;
  align-items: center;
  margin-right: 14px;
}

.carDownRight h1{
  font-size: 14px;
  color: #7a7a7a;
  line-height:41px ;
  font-weight:100 ;
  margin-right: 12px;
}
.carDownRight img{
  width:13px ;
  height: 16px;
  /*margin-right: .05rem;*/
}
</style>
