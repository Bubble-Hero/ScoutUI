<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>顶部组件1</h1>
        <p>为页面和功能提供头部的菜单列表，用于 WebApp 顶部，起到标题、返回、其部分小的效果。组件一为美团首页顶部。</p>
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
  <div class="nav-box">
    <a href="javascript:void(0)">
      <div>西安
        <i class="iconfont">&#xe615;</i>
      </div>
      <span>多云5℃</span>
    </a>
    <div class="input-box">
      <div class="lr-box search-box">
        <i class="iconfont">&#xe637;</i>
      </div>
      <input type="text" placeholder="(热门电影)"/>
      <!--<div class="lr-box dingdong-box">-->
      <!--</div>-->
    </div>
    <a href="javascript:void(0)">
      <i class="iconfont">&#xe650;</i>
    </a>
  </div>
</template>

<script>
    export default {
      name: "header01-lc"
    }
</script>

<style lang="scss">

  $wt:#fff;
  .nav-box {
    margin-top: 40px;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    z-index: 333;
    width: 100%;
    border-bottom: .08rem solid #eee;
    a {
      display: flex;
      flex-direction: column;
      width: 3.8rem;
      height: 3.8rem;
      // background-color: rgba(0, 0, 0, 0.3);
      // color: $wt;
      border-radius: 50%;
      line-height: 1rem;
      i{
        color: #111;
      }
    }
    a:first-child{
      justify-content: space-between;padding: .4rem 0;
      div{
        color:#111;font-size: 1.3rem;white-space: nowrap;font-weight: bolder;
        i{
          font-size: 1.3rem;font-weight: bolder;
        }
      }
      span{
        color: #666;font-size: .85rem;
      }
    }
    a:last-child {
      margin-left: auto !important;
      i{
        font-size: 2.5rem;
        margin:auto;
      }
    }
    .input-box {
      flex: 1;
      margin: 0 1.1rem;
      position: relative;
      display: flex;justify-content: center;
      input {
        background-color:#eee;
        border-radius:1rem;
        border: 0;
        padding: .5rem 3.5rem;
        height: 100%;
        width: 100%;
        text-align: center;
      }
      .lr-box {
        position: absolute;
        min-width: 3.5rem;
        height: 100%;
        display: flex;
        top: 0;
      }
      .search-box {
        left: 10%;
        i {
          font-size: 1.9rem;
          color: #9b9b9b;
          margin: auto;
          font-weight: 600;
        }
      }
      .dingdong-box {
        right: 0;
        img {
          width: 1.9rem;
          height: 2.1rem;
          margin: auto;
        }
      }
    }
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
              <header01-lc></header01-lc>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import Header01Lc from "./lc-elements/header01-lc";
    export default {
        name: "header01",
      components: {Header01Lc}
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
