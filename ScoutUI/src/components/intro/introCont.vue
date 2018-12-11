<template>
  <div class="guide">

    <!--...大标题。。。-->
    <h2>指南</h2>
    <div class="about">
      <h3>关于 Scout UI</h3>
      <p>
        ScoutUI 是一套基于 Vue.js 的开源 UI 组件库，主要服务于PC和移动端界面的产品。<br /><br />
        主要基于elementUI组件库无法满足项目实际中对 vue.js 组件得需求，我们将其进行框架化，并拓展更多的组件和功能，
        且保持最初的高质量、功能丰富； 友好的 API ，自由灵活地使用空间；事无巨细的文档；细致、漂亮的 UI；
        使用单文件的 Vue 组件化开发模式；基于 npm + webpack + babel 开发等特性，希望给您带来高效快捷的体验。<br /><br />
        基于 Angular.js 和 react.js 的版本后续研发，尽情期待。
      </p>
    </div>
    <div class="about">
      <h3>设计理念</h3>
      <p>	一致性 Consistency<br />
        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br />
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。<br /><br />
        反馈 Feedback<br />
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<br />
        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。<br /><br />
        效率 Efficiency<br />
        简化流程：设计简洁直观的操作流程；<br />
        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<br />
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<br /><br />
        可控 Controllability<br />
        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<br />
        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等
      </p>
    </div>
    <div class="about" style="padding-bottom: 150px">
      <h3>兼容</h3>
      <p>
        目前只支持 Vue.js 2.x 版本。<br />
        由于 Vue.js 是基于Object.defineProperty实现数据追踪，故不支持IE8及更低版本的浏览器。
      </p>
    </div>
    <div class="about">
      <h3>相关链接</h3>
      <p>
        scoutUI 部分组件和样式代码参考了以下网站：
        <a href="https://cn.vuejs.org/">. Vue</a>
        <a href="http://element-cn.eleme.io/#/zh-CN">. elementUI</a>
        <a href="https://100phone.cn/">. 大前端</a>
        <a href="http://www.mobiletrain.org/page/html5.html?pinzhuanbdtg=biaoti">. HTML5课程</a>
      </p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "introCont"
    }
</script>

<style scoped>
  .guide{
    padding: 50px;
    width: 100%;
    padding-top:40px ;
    padding-bottom: 30px;
    background-color: #fff;
  }
  .guide h2{
    font-size: 32px;
    color: #25313d;
  }
  .about{
    padding-bottom: 100px;
  }
  .about h3{
    font-size:22px ;
    color: #2c3e50;
    margin:40px 0 20px;
  }
  .about p{
    width: 70%;
    font-size: 15px;
    color: #324d68;
    line-height: 28px;
    border-top:2px solid #17b6ad;
    padding: 20px 5px;
  }
  .about a{
    display: block;
    font-size: 16px;
    color: #17b6ad;
    line-height: 45px;
    margin-left: 10px;
  }
</style>
