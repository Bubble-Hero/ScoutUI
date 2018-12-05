<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>底部组件1</h1>
        <p>为页面和功能提供底部的菜单列表，用于 WebApp 底部，起到页面切换的效果。组件一为底部提供五个菜单(图标和文字)。</p>
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
                <div class="navigation">
                  <router-link class="nav" to="/index"><i class="navIcon iconfont">&#xe604;</i>首页</router-link>
                  <router-link class="nav" to='/near'><i class="navIcon iconfont">&#xe645;</i>附近</router-link>
                  <router-link class="nav" to='/find'><i class="navIcon iconfont">&#xe6cd;</i>发现</router-link>
                  <router-link class="nav" to='/order'><i class="navIcon iconfont">&#xe6cf;</i>订单</router-link>
                  <router-link class="nav" to='/me'><i class="navIcon iconfont">&#xe8da;</i>我的</router-link>
                </div>
              </template>
                        <script>
    export default {
      name: "footer01-lc"
    }
</script>
                        <style scoped>
  .navigation{
    margin-top: 100px;
    display:flex;/*设置五个导航条的内容由列排列变为行排列*/
    height: 8vh;
    font-size: 1rem;
    background-color: #fff;
    position: relative;
    z-index: 1000;
    border-top: .8px solid #eee;
  }
  .nav{
    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/
    flex-direction: column;
    flex: 1;/*设置五个导航条的内容等分*/
    line-height: 1.5rem;
    text-align: center;
    margin: 0 auto;
    margin-top: .9em;
    color:#555;
  }
  .navIcon{
    margin:0 auto;
    font-size: 2.4rem;
    color:#333;
  }
  .router-link-active .navIcon{
    font-size: 2.5rem;
    color:#28c0ac;
  }
  .router-link-active{
    margin-top: .8em;
    color:#28c0ac;
    font-size: 1.1rem;
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
              <!--//....子组件....-->
              <footer01-lc></footer01-lc>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import Footer01Lc from "./lc-elements/footer01-lc";
    export default {
        name: "footer01",
      components: {Footer01Lc}
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
