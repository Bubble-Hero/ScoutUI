  <template>
    <!-----------------nearnav------------->
    <div class="nearnav fixed">
      <ul>
        <li class="cli" v-for="(p,index) in nav1"><p>{{p.title}}</p><span></span></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "NearNav",
    props:["nav1"],
    mounted(){
      this.$nextTick(()=> {
        $('.cli').click(function () {
          $(this).addClass('active').siblings('li').removeClass('active');
          var i = $(this).index();
          $('.nearnav-li').eq(i).show().siblings('.nearnav-li').hide();
          $('.nearnav-li').eq(i).find('.secondNav-a').eq(0).addClass('changeStyle')
          //让点过的所有li里的a样式都消失 只保证当前进来的第一个有样式
          $('.nearnav-li').eq(i).siblings().find('.secondNav-a').removeClass('changeStyle')
          //再次点击当前让当前其他li里文字样式消失
          $('.nearnav-li').eq(i).find('.secondNav-a').not($('.nearnav-li').eq(i).find('.secondNav-a').eq(0)).removeClass('changeStyle')
          //页面同步
          $(".buf3").css({//"translate3d(-375px,0px,0px)",
            transform:function(){
              return "translate3d("+0+"px,0px,0px)"    //拼接字符串
            },
            transitionDuration:"300ms"
          })
          //滑到最左边
          $(".nav-ul").animate({
            scrollLeft:0+"px"
          },200)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  .nearnav{
    background: #fff;
    z-index: 10000;
    width: 100%;
  }

  .nearnav ul{
    display: flex;
    padding: 1rem;
    justify-content: space-around;
  }
  .nearnav ul li{
    font-size: 1.3rem;
    color:#111;
    position: relative;
    display: flex;flex-direction: column;
    span{
      height:.2rem;
      width: 2rem;
      margin: auto;
      border-radius: 1rem;
    }
  }
  .active{
    color:red!important;
    font-size:1.4rem!important;
    font-weight: bold;
    position: relative;
    top:-.15rem;
    span{
      display: block;
      background-color: red;

    }
  }


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
