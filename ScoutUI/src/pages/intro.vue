<template>
    <div class="intro">
      <index-header></index-header>
      <section>
        <intro-side></intro-side>
        <intro-cont></intro-cont>
      </section>
    </div>
</template>

<script>

    import IntroSide from "../components/intro/introSide";
    import IntroCont from "../components/intro/introCont";
    import IndexHeader from "../components/indexComponents/IndexHeader";
    export default {
        name: "intro",
      components: {IndexHeader, IntroCont, IntroSide}
    }
</script>

<style scoped>
.intro{
  display: flex;
  flex-direction: column;
}
section{
  display: flex;
  margin-top: 65px;
}

</style>
