<template>
  <div>
    <div class="section-tel">
      <div class="area">
        <p class="eightsix">+86</p>
        <i class="iconfont">&#xe63b;</i>
      </div>
      <div class="tel"><input id="t1" type="text" placeholder="请输入手机号"/></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "loginCompon"
    }
</script>

<style scoped>
  .logining{

    position: fixed;
    background-color: rgba(0,0,0,.2);
    height: 100%;
    width: 100%;
    z-index: 100000;
    display: flex;
  }
  .loading{
    margin: auto;
    display: flex;
    background-color: rgba(0,0,0,0.3);
    flex-direction: column;
    justify-content: space-between;
    width: 7rem;
    height: 8rem;
    text-align: center;
    border-radius: .8rem;
    color: #fff;
    padding: .5rem;

  }
  .loading span{
    margin: auto;font-size: 1.2rem;
  }
  .all{
    background-color: #fff;
  }
  .login-footer{
    margin-top: 25rem;
    width: 100%;

  }
  .type{
    height: 11.5rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 8rem;
  }
  .tip{
    color: #8c8c8c;
    height: 2.8rem;
    text-align: center;
    font-size: 1.4rem;
  }
  .type img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin: auto 0;
  }
  header{
    height: 5rem;
    background:#fff;
    display: flex;
    justify-content: space-between;
  }
  header p{
    width: 5rem;
    text-align: center;
    font-size: 1.4rem;
    color: #10bba9;
    margin: auto 0;
  }
  section{
    background: #fff;
    position: relative;
  }
  .section-content {
    background: #fff;
    padding-top: 4rem;
    margin: 0 2rem;

  }

  section .tip span{
    color: #1bbfb3;
  }
  .eightsix{
    font-size: 1.6rem;white-space: nowrap;
  }
  section h2{
    height: 8rem;
    text-align: center;
    font-size: 2.6rem;
    background: #fff;
    letter-spacing:0.2rem ;
  }
  .section-tel{
    height: 5.6rem;
    line-height: 5.6rem;
    background: #fff;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content:space-between;
  }
  .area{
    display: flex;
    justify-content: space-between;
    color: #575757;
    align-items: center;
  }
  .area i{
    margin-left: .5rem;
    font-size: 1.2rem;
    margin-top: .3rem;
  }
  .tel{
    width: 96%;
    height: 5.6rem;
  }
  .tel input{
    width: 100%;
    height: 100%;
    padding-left: 1.2rem;
    color: #111;
    font-size: 1.6rem;
    height: 2.6rem;
    border:none
  }
  .foo-box{
    display: flex;
    justify-content: space-between;
  }
  section .con p{
    color: #bababa;
    height: 3.8rem;
    line-height: 3.8rem;
    font-size: 1.4rem;
  }
  section .con button{
    width:100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 3rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }
  .type img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin: auto 0;
  }
  section .tip{
    color: #8c8c8c;
  }
  section .tip span{
    color: #1bbfb3;
  }
</style>
