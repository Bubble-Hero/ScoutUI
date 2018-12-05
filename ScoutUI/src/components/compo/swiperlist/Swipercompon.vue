<template>
  <div class="con-section">
    <ul class="">
      <li>
        <h1>组件1</h1>
        <p>Vue插件使用Swiper插件，三层嵌套点击轮播插件</p>
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

                      <div class="swiper-wrapper buf3" style="height: 100%;">
            <div class="swiper-slide">
              <ul class="life-ul">
                <li>
                  <router-link to="">
                  <div class="left-picture">
                    <img src="" alt="">
                  </div>
                  <div class="right-other">
                    <div class="other-top">
                      <p></p>
                      <span></span>
                    </div>
                    <div class="other-cen">
                      <img src="" alt="">
                      <span></span>
                      <span></span>
                    </div>
                    <div class="sale"></div>
                    <div class="last">
                      <img src="" alt="">
                      <p></p>
                    </div>
                  </div>
                  </router-link>
                  </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li>
                  <router-link to="">
                    <div class="left-picture">
                      <img src="" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p></p>
                        <span></span>
                      </div>
                      <div class="other-cen">
                        <img src="" alt="">
                        <span></span>
                        <span></span>
                      </div>
                      <div class="sale"></div>
                      <div class="last">
                        <img src="" alt="">
                        <p></p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
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
              <second></second>
            </div>
          </div>
        </div>


      </li>
    </ul>
  </div>
</template>

<script>
    import Second from "./second";
    export default {
        name: "Swipercompon",
      components: {Second}
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
    border:1px solid #dddddd }
</style>
