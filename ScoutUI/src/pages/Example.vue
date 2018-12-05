<template>
    <div id="example">
      <index-header></index-header>
      <copyright-two></copyright-two>
    </div>
</template>

<script>
    import IndexHeader from "../components/indexComponents/IndexHeader";
    import CopyrightTwo from "../components/footer-copyright/copyright-two";
    export default {
        name: "Example",
      components: {CopyrightTwo, IndexHeader}
    }
</script>

<style lang="scss" scoped>
    #example{
      height: 100%;
      background-color: #fff;
    }
</style>
