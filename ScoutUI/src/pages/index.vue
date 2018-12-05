<template>
    <div class="box">
      <index-header></index-header>
      <index-section></index-section>
     <copyright></copyright>
    </div>
</template>

<script>
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import IndexSection from "../components/indexComponents/IndexSection";
    import Copyright from "../components/footer-copyright/copyright";
    export default {
        name: "index",
      components: {Copyright, IndexSection, IndexHeader}
    }
</script>

<style scoped>
  html{
    background-image:url("../../static/img/bg1.jpg") ;
  }
.commonHeader{
  background:rgba(0,0,0,.6)!important;
}
.box{
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
}

</style>
