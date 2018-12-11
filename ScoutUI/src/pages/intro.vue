<template>
  <div>
    <div class="intro">
      <index-header></index-header>
      <section>
        <intro-side></intro-side>
        <intro-cont class="content"></intro-cont>
      </section>
    </div>
    <copyright-two></copyright-two>
  </div>
</template>

<script>

    import IntroSide from "../components/intro/introSide";
    import IntroCont from "../components/intro/introCont";
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import CopyrightTwo from "../components/footer-copyright/copyright-two";
    export default {
        name: "intro",
      components: {CopyrightTwo, IndexHeader, IntroCont, IntroSide},
      methods:{
          Scroll(){
            $(window).scroll(function () {
             let Top= $(this).scrollTop()

                $(".slideUL").slideDown(500);

              if(Top>=60){
                $(".slideUL").children("li").eq(0).addClass("add")
                $(".slideUL").children("li").eq(0).siblings().removeClass("add")
              }
              if(Top>=400){
                $(".slideUL").children("li").eq(1).addClass("add")
                $(".slideUL").children("li").eq(1).siblings().removeClass("add")
              }
              if(Top>=1100){
                $(".slideUL").children("li").eq(2).addClass("add")
                $(".slideUL").children("li").eq(2).siblings().removeClass("add")
              }
              if(Top>=1320){
                $(".slideUL").children("li").eq(3).addClass("add")
                $(".slideUL").children("li").eq(3).siblings().removeClass("add")
              }
            })
          }
      },
      mounted(){
        this.Scroll()
      }
    }
</script>

<style scoped>

.intro{
  display: flex;
  flex-direction: column;
  padding-left: 27rem;
}
section{
  display: flex;
 padding-top: 65px;
}
.footer{
  background-color: #fff;
}

</style>
