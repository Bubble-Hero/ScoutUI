<template>
    <div class="commonHeader">
      <router-link to="/index"><p class="webName">Scout<span style="color: #641385;">UI</span></p></router-link>
      <div class="commonHeaderR">
        <input type="text" placeholder="Search...">
        <router-link to="/"><div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            首页
          </button>
        </div></router-link>
        <router-link to="/intro"><div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
             指南
          </button>
        </div></router-link>
        <router-link to="/compo"><div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            组件
          </button>
        </div></router-link>
        <router-link to="/team"><div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            团队
          </button>
        </div></router-link>
        <router-link to="/"><div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            客户案例
          </button>
        </div></router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>
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
  background:rgba(0,0,0,.08);
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
button{
  background: transparent;
  border: 1px solid #17b6ad;
  color: #17b6ad;
}
button:hover{
  background: transparent;
  border: 1px solid #cccccc;
  color: #cccccc;
}
 .open > .dropdown-toggle.btn-default:hover {
  /*color: transparent;*/
  background-color: transparent;
  border-color: transparent;
}

.dropdown{
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    margin:0 10px;
  background: transparent;
  }
</style>
