<template>
    <div class="box">
      <index-header></index-header>
      <index-section></index-section>
    </div>
</template>

<script>
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import IndexSection from "../components/indexComponents/IndexSection";
    export default {
        name: "index",
      components: {IndexSection, IndexHeader}
    }
</script>

<style scoped>
.commonHeader{
  background:rgba(0,0,0,.6)!important;
}
.box{
  width: 100%;
  height: 100%;
  background: url("../assets/img/bg1.gif") no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

</style>
