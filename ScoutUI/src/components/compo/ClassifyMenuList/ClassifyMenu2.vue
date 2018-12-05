<template>
  <div class="news">
    <ul>
      <li>
          <div>
            <h3>十月第三周</h3>
            <p>成交价量齐跌</p>
          </div>
          <img src="../../../assets/img/i-f-1.png"/>
      </li>
      <li>
          <div>
            <h3>十月第三周</h3>
            <p>成交价量齐跌</p>
          </div>
          <img src="../../../assets/img/i-f-2.png"/>
      </li>
    </ul>
    <ul>
      <li>
          <div>
            <h3>十月第三周</h3>
            <p>成交价量齐跌</p>
          </div>
          <img src="../../../assets/img/i-f-1.png"/>
      </li>
      <li>
          <div>
            <h3>十月第三周</h3>
            <p>成交价量齐跌</p>
          </div>
          <img src="../../../assets/img/i-f-1.png"/>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "ClassifyMenu2"
    }
</script>

<style scoped>
  .news{
    padding: 20px 0;
    width:100%;
    margin: 25px 0;}
  .news ul{
    margin:8px 22px;
    height:62px;
    display: flex;
  justify-content: space-between}
  .news ul li{
    width: 48%;
    background: #f9f9f9;
    height:64px;
    font-size:13px;
    display: flex;
    justify-content: space-between;
  }
  .news li div{
    line-height: 64px;
    width: 100px;
    height:47px;
    line-height:1.5;}
  .news ul li img{
    width: 100px;
    height: 62px;
  margin-right: 1%}
  .news ul li  div h3{
    padding-left:10px;
    font-size: 14px;
    color:#5a5c5b;
    margin: 10px 0;
  line-height:10px}
  .news ul li div p{padding-left:10px;color: #cdcdcf;}
</style>
