<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>顶部组件2</h1>
        <p>为页面和功能提供头部的菜单列表，用于 WebApp 顶部，起到标题、返回、其部分小的效果。组件一为美团发现顶部。</p>
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
              <!--.....源代码。。。。。 -->
              <textarea style="resize:none;" name="" id="" cols="30" rows="10"  readonly="readonly">
<template>
  <header>
    <router-link to="/find"><i class="iconfont headeri">&#xe63c;</i></router-link>
    <span>美团头条</span>
    <p><i class="iconfont headeri" @click="goTop">&#xe6d4;</i></p>
  </header>
</template>

<script>
    export default {
      name: "header02-lc"
    }
</script>

<style scoped>
  header{
    width: 100%;
    line-height: 5rem;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-bottom: 1px solid #bdbdbd;
    z-index: 2;
    padding: 0 1.2rem;
  }
  .headeri{
    font-size: 2.4rem;
    color: #292929;
    height: 100%;
    line-height: 5rem;
  }
  header span{
    color: black;
    font-size: 1.6rem;
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
            <div class="code-body">
              <header02-lc></header02-lc>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import Header02Lc from "./lc-elements/header02-lc";
    export default {
        name: "header02",
      components: {Header02Lc}
    }
</script>

<style scoped>
  .con-section{
    width: 100%;
    /*height: 100%;*/
    padding: 0 20px 50px;
    padding-left: 0;
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
    border:1px solid #dddddd
  }
</style>
