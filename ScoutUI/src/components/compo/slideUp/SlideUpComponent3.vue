<template>
  <!--组件单例模板-->
  <div class="con-section">
    <ul class="">
      <li>
        <h1>上拉菜单三</h1>
        <p>分享上拉菜单，包含分享到微信qq的卡片。</p>
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
                    <textarea style="resize:none;" name="" id="" cols="30" rows="10"  readonly="readonly">
<template>
  <!--..shareTo...-->
  <div class="shareTo">
    <p>分享到</p>
    <div class="shareToi">
      <a href="">
        <i class="iconfont shareToi01">&#xe61c;</i>
        <span>微信好友</span>
      </a>
      <a href="">
        <i class="iconfont shareToi02">&#xe5e3;</i>
        <span>朋友圈</span>
      </a>
      <a href="">
        <i class="iconfont shareToi03">&#xe6d3;</i>
        <span>QQ</span>
      </a>
      <a href="">
        <i class="iconfont shareToi04">&#xe658;</i>
        <span>微博</span>
      </a>
      <a href="">
        <i class="iconfont shareToi05">&#xe648;</i>
        <span>github</span>
      </a>
      <a href="">
        <i class="iconfont shareToi06">&#xe719;</i>
        <span>更多</span>
      </a>
    </div>
    <div class="off"  @click="goBottom">取消</div>
  </div>

</template>

<script>
    export default {
      name: "SlideExamp3"
    }
</script>

<style scoped>
  /*....shareTo....*/
  .shareTo{
    width: 94%;
    margin: 3%;
    background: #daf0ee;
    border-radius: .8rem;
    margin-bottom: 6rem;
    z-index: 3;
    position: fixed;
    left: 0;
    bottom: 0;
    display: none;
  }
  .shareTo p{
    width: 100%;
    height: 5.6rem;
    line-height: 5.6rem;
    text-align: center;
    font-size: 1.4rem;
    color: #272727;
    font-weight: bold;
  }
  .shareToi{
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 0;
  }
  .shareToi a{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .shareToi a i{
    font-size:3.2rem ;
    text-align: center;
  }
  .shareToi a span{
    font-size: 1.2rem;
    text-align: center;
    margin:.8rem;
  }
  .off{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.3rem;
    color: #8f8b8b;
    border-top: .1rem solid #cecccc;
  }
  .shareToi01{
    color: #45c77c;
  }
  .shareToi02{
    color: #1ae871;
  }
  .shareToi03{
    color: #30cff1;
  }
  .shareToi04{
    color: #edc00e;
  }
  .shareToi05{
    color: #565348;
  }
  .shareToi06{
    color: #18dba6;
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
            <div class="code-body codeH">
              <!--//....子组件....-->
              <slide-examp3></slide-examp3>

            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>

  import SlideExamp3 from "./slideExamp/SlideExamp3";
  export default {
    name: "SlideUpComponent3",
    components: {SlideExamp3}
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
    /*background: #fff;*/
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
  .codeH{
    width: 70%;
    margin: auto;
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
    border:1px solid #dddddd }
</style>
