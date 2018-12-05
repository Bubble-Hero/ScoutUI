<template>
    <div class="commonHeader">
      <router-link to="/index"><p class="webName">Scout<span style="color: #641385;">UI</span></p></router-link>
      <div class="commonHeaderR">
        <input type="text" placeholder="Search...">
        <router-link to="/index" class="empt"><div class="dropdown">
          <div class="nav">
            首页
          </div>
        </div></router-link>
        <router-link to="/intro">
          <div class="nav">
             指南
          </div>
         </router-link>
        <router-link to="/compo/logincomcon1">
          <div class="nav">
            组件
          </div>
        </router-link>
        <router-link to="/team">
          <div class="nav">
            团队
          </div>
        </router-link>
        <router-link to="/example">
          <div class="nav">
            客户案例
          </div>
       </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHeader",
      methods:{
      }
    }
</script>

<style scoped>
  .empt{
    background: transparent!important;
  }
.commonHeader{
  z-index: 100;
  position:fixed;
  left: 0;
  top: 0;
  padding: 0 15px 0 80px;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#eee;
}
.webName{
    font-size: 40px;
    line-height: 65px;
    color: #17b6ad;

}
.commonHeaderR{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.commonHeaderR input{
  width: 188px;
  height: 35px;
  border: 1px solid #17b6ad;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 18px;
  background: transparent;
  color: #17b6ad;
  text-indent: 20px;
  font-size: 20px;
  margin-right: 10px;
}
.nav{
  justify-content: center;
  display: flex;
  align-items: center;
  width: 6rem;
  background: transparent;
  border: 1px solid #17b6ad;
  color: #17b6ad;
  height: 3.5rem;
  margin-right: 1rem;
  border-radius: 1rem;
}
.nav:hover{
  background: transparent;
  border: 1px solid #cccccc;
  color: white;
}

</style>
