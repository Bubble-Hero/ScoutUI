<template>
  <div>
    <div class="intro">
      <index-header></index-header>
      <section>
        <intro-side></intro-side>
        <intro-cont></intro-cont>
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
      mounted(){

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
