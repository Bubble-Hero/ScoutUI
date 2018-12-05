<template>
  <header>
    <router-link to="/find"><i class="iconfont headeri">&#xe63c;</i></router-link>
    <span>美团头条</span>
    <p><i class="iconfont headeri" @click="goTop">&#xe6d4;</i></p>
  </header>
</template>

<script>
    export default {
        name: "header02-lc"
    }
</script>

<style scoped>
  header{
    width: 100%;
    line-height: 5rem;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-bottom: 1px solid #bdbdbd;
    z-index: 2;
    padding: 0 1.2rem;
  }
  .headeri{
    font-size: 2.4rem;
    color: #292929;
    height: 100%;
    line-height: 5rem;
  }
  header span{
    color: black;
    font-size: 1.6rem;
  }

</style>
