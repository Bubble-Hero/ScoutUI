<template>
  <div class="mt-wallet">
    <h2>美团钱包</h2>
    <ul class="wallet-list">
      <li :key ="i" v-for="(w,i) in list">
        <img :src="w.pic">
        <p>{{w.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "ClassifyMenu3",
      data(){
          return{
            "list":[
              {"pic":"../../../static/img/m_q.gif","title":"我的钱包"},
              {"pic":"../../../static/img/m_h.gif","title":"红包/卡券"},
              {"pic":"../../../static/img/m_y.gif","title":"余额"},
              {"pic":"../../../static/img/m_l.gif","title":"理财"},
              {"pic":"../../../static/img/m_c.gif","title":"手机充值"}
            ]

          }

      }
    }
</script>

<style scoped>
  .mt-wallet{
    padding: 0 10%;
    margin-top: 100px;
    background: #fff;
  }
  .mt-wallet h2{
    line-height: 80px;
    font-size: 16px;
    font-weight: 600;
  }
  .wallet-list{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #f6f6f6;
    justify-content: space-between;
    text-align: center;
  }
  .wallet-list li{
    width: 25%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:20px;
  }
  .wallet-list li img{
    margin: 0 auto;
  }
</style>
