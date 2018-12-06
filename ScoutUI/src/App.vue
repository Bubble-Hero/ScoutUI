<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Copyright from "./components/footer-copyright/copyright";
export default {
  name: 'App',
  components: {Copyright}
}
</script>

<style>
  html,body{
    width:100%;
    height:100%;
  }
#app{
  width: 100%;
  height: 100%;

}
  body{
    background: url("assets/img/bg1.gif");
    background-size:cover ;
  }
</style>
