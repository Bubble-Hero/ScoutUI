<template>
  <div class="team">
    <index-header></index-header>
    <main>
      <right-introduce></right-introduce>
    </main>
    <copyright-two></copyright-two>
  </div>
</template>

<script>
    import Font from "../../static/font/iconfont.css"
    import RightIntroduce from "../components/team/RightIntroduce";
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import CopyrightTwo from "../components/footer-copyright/copyright-two";
    export default {
        name: "team",
      components: {CopyrightTwo, IndexHeader, RightIntroduce}
    }
</script>

<style lang="scss" scoped>
  main{
    width: 100%;
    /*background: red;*/
    overflow: hidden;
    margin-top: 65px;
  }
  .team{
    background-color: #fff;
  }
</style>
