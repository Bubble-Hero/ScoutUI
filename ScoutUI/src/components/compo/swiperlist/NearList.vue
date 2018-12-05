<template>
      <div class="nearnav-li">
        <div class="swiper-container">
            <div class="swiper-wrapper buf4 nav-ul">
              <div v-for="(bb,index) in items[0]" class="secondNav"><a class="secondNav-a">{{bb.title}}</a></div>
            </div>
        </div>
        <div class="swiper-container childSwiper">
          <div class="swiper-wrapper buf3" style="height: 100%;">
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[1]">
                  <router-link to="">
                  <div class="left-picture">
                    <img :src="cc.pic1" alt="">
                  </div>
                  <div class="right-other">
                    <div class="other-top">
                      <p>{{cc.p1}}</p>
                      <span>{{cc.span1}}</span>
                    </div>
                    <div class="other-cen">
                      <img :src="cc.pic2" alt="">
                      <span>{{cc.span2}}</span>
                      <span>{{cc.span3}}</span>
                    </div>
                    <div class="sale">{{cc.sale}}</div>
                    <div class="last">
                      <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                      <p>{{cc.p2}}</p>
                    </div>
                  </div>
                  </router-link>
                  </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[2]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[3]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[4]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[5]">
                  <router-link to="/">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[6]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[7]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[8]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="life-ul">
                <li v-for="(cc,index) in items[9]">
                  <router-link to="">
                    <div class="left-picture">
                      <img :src="cc.pic1" alt="">
                    </div>
                    <div class="right-other">
                      <div class="other-top">
                        <p>{{cc.p1}}</p>
                        <span>{{cc.span1}}</span>
                      </div>
                      <div class="other-cen">
                        <img :src="cc.pic2" alt="">
                        <span>{{cc.span2}}</span>
                        <span>{{cc.span3}}</span>
                      </div>
                      <div class="sale">{{cc.sale}}</div>
                      <div class="last">
                        <img v-for="(iss,tss) in cc.pic3" :src="iss" alt="">
                        <p>{{cc.p2}}</p>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
  import Swiper from "swiper"
  export default {
    name: "NearList",
    props:["items"],
    methods:{
      initSwiper(){
        new Swiper('.s3',{
          observer:true,
          observeParents:true,
        })
      }

    },
    mounted(){
     // console.log(this.items[9])
      this.$nextTick(()=>{
        //初始化
        $(".cli").eq(0).addClass('active');
        $('.nearnav-li').eq(0).show();
        //第一个页面第一次显示的时候 给第一个li的文字添加样式
        $(".secondNav-a").eq(0).addClass("changeStyle")

        new Swiper('.childSwiper',{
          slidesPerView: 'auto',
          centeredSlides: true,
          preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
          // observer:true,                //修改swiper自己或子元素时，自动初始化swiper
          // observeParents:true,        //修改swiper的父元素时，自动初始化swiper
          on: {
            transitionStart: function () {
              ss(this.activeIndex)       //导航栏同步滑动 底线与字体颜色的同步改变
            }
          }
        })
        //点导航栏点击，页面同步
        $(".secondNav-a").click(function () {
          $(this).addClass("changeStyle")
          $(".secondNav-a").not($(this)).removeClass("changeStyle")
          // 页面滑动
          let width= $("header")[0].offsetWidth

          let index=$(".changeStyle").parent().index()
          //导航智能滑动
          if(index>2){
            $(".nav-ul").animate({
              scrollLeft:(index-2)*80+"px"
            },100)
          }
          if(index>0&&index<=2){
            $(".nav-ul").animate({
              scrollLeft:"0px"
            },100)
          }
          //页面同步
          $(".buf3").css({//"translate3d(-375px,0px,0px)",
            transform:function(){
              let transX=index*width*-1;
              return "translate3d("+transX+"px,0px,0px)"    //拼接字符串
            },
            transitionDuration:"300ms"
          })
        })
        //滑动页面，导航栏同步
        function ss(num){
          $(".secondNav").eq(num).find(".secondNav-a").addClass("changeStyle")
          $(".secondNav").eq(num).siblings().find(".secondNav-a").removeClass("changeStyle")
          if(num>2){
              $(".nav-ul").animate({
                scrollLeft:(num-2)*80+"px"
              },200)
          }
          if(num>0&&num<=2){
            $(".nav-ul").animate({
              scrollLeft:"0px"
            },200)
          }
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import'../../../../static/css/swiper.css';
  ::-webkit-scrollbar{
    display:none;
  }
  .secondNav{
    flex:1;text-align: center;
  }
  .secondNav:last-child{
    margin-right: 2rem;
  }
  .changeStyle{
    background: #ffe9e6;
    color: #f94024;
  }
  .nearnav-li{
    display: none;
    position: relative;
  }
  .nearnav-li .life-ul{
    padding: .5rem 1rem;
  }
  .nearnav-li .nav-ul{
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    line-height: 2rem;
    display: flex;
    div{                                         //改li
      white-space: nowrap;
      margin-right: .8rem;
      font-size: 1.2rem;
      a{
        display: block;
        border-radius: 2rem;
        padding:.4rem 1rem;
      }
    }

  }
  .nearnav-li .nav-ul div:first-child{                     //改li
    margin-left: 1rem;
  }
  .nearnav-li .life-ul li{
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 1.2rem 0;
  }
  .nearnav-li .life-ul li a{
    display: flex;
    width: 100%;
  }
  .nearnav-li .life-ul li a .left-picture{
    width: 7.8rem;
    height: 5.8rem;
    border: 1px solid #cec3c1;
  }
  .nearnav-li .life-ul li a .left-picture img{
    width: 7.8rem;
    height: 5.8rem;
  }
  .nearnav-li .life-ul li a .right-other{
    flex: 1;
    width: 100%;
    padding-left: .9rem;
    /*background: #f00;*/
  }
  .nearnav-li .life-ul li a .right-other .other-top{
    position: relative;
    display: flex;
    width: 100%;
  }
  .nearnav-li .life-ul li a .right-other .other-top p{
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nearnav-li .life-ul li a .right-other .other-top span{
    display: inline-block;
    position: absolute;
    width: 4.1rem;
    height: 1.6rem;
    right: 0;
    background: #f4f4f6;
    text-align: center;
    border-bottom-left-radius: .9rem;
    color: #727274;
  }
  .nearnav-li .life-ul li a .right-other .other-cen{
    display: flex;
    align-items: center;
  }
  .nearnav-li .life-ul li a .right-other .other-cen img{
    width: 5rem;
    height: .9rem;
  }
  .nearnav-li .life-ul li a .right-other .other-cen span{
    padding-left: .7rem;
  }
  .nearnav-li .life-ul li a .right-other .sale{
    width: 4.6rem;
    text-align: center;
    line-height: 1.3rem;
    border: 1px solid #ffad70;
    color: #f75b0e;
    margin-top: .4rem;
  }
  .nearnav-li .life-ul li a .right-other .last{
    display: flex;
    padding-top: .4rem;
  }
  .nearnav-li .life-ul li a .right-other .last img{
    width: 1.5rem;
    height: 1.5rem;
    margin-top: .4rem;
    margin-right: .2rem;
  }
</style>
