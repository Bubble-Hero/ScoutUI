<template>
  <div class="section-con">
    <form id="form2">
      <div class="section-pass">
        <input v-model="psd" id="t2" :type="this.registration_data.pwdType"
               placeholder="请输入密码" @on-change="changeType" @input="changebtncolor"/>
        　<img :src="this.registration_data.src" @click="changeType"/>
        <!--<input type="password" placeholder="请输入密码"/>-->
        <!--<i class="iconfont icon-icon-copy"></i>-->
      </div>
      <div class="errbox"></div>
      <button class="sub-btn"  @click="login" type="button">登录</button>
      <div class="login-type">
        <router-link to="/compro/logincompon/logincomcon1">
          <p class="ft">验证码登录</p>
        </router-link>
        <p class="ft">忘记密码</p>
      </div>
    </form>
    <div class="logining"></div>
  </div>
</template>

<script>
    export default {
        name: "LoginComCon2",
      data () {
        return {
          name:"",
          psd:"",
          registration_data:{
            pwdType:"password",
            src:"../../../../static/img/m_m1.gif"
          },
          timer:null
        }
      },
      methods:{
        changebtncolor(){
          //密码输入事件让errbox内容消失
          $(".errbox").html("")
          //如果密码不为空 改变button颜色
          if(!$("#t1").val()==""&&!$("#t2").val()==""){
            $(".sub-btn").css({
              backgroundColor:"#1bbfb3"
            })
          }
        },
        getpressdown(){
          $("#t2").keyup(function () {
            if($("#t2").val()==""){
              $(".sub-btn").css({
                backgroundColor:"#b1f2ee"
              })
            }
          })
        },
        changeType(){
          if(this.registration_data.pwdType=="password"){
            this.registration_data.pwdType="text"
          }else{
            this.registration_data.pwdType="password"
          }
          this.registration_data.src=this.registration_data.src
          ==require("../../../../static/img/m_m2.gif")?
            require("../../../../static/img/m_m1.gif")
            :require("../../../../static/img/m_m2.gif");
        },
        login(){
          //获取父级数据
          this.getName()
          if(!$("#t1").val()==""&&!$("#t2").val()==""){
            //让errbox内容消失
            $(".errbox").html("")
            //改变btn
            $(".sub-btn").html("登录中...")
            $(".logining").fadeIn(100)
            //启动定时器
            let count=0
            this.timer=setInterval(()=>{
              count++
              if(count==1){
                $(".logintxt").html("登录中.")
              }else if(count==2){
                $(".logintxt").html("登录中..")
              }else if(count==3){
                $(".logintxt").html("登录中...")
              }
            },200)
            this.$http.post("http://bgs09143010.gotoip1.com/MeiYuan-webapp-php/loginCheck.php", {//这里是将表单的数据提交到该地址
              "username":this.name,//我将表单的两个文本传过去
              "userpass":this.psd
            },{
              emulateJSON:true
            }).then((res)=> {//这个是获取到了刚传过去文件该文件的整个数据
              //消失毛玻璃
              $(".logining").hide(100)
              //改变btn内容
              $(".sub-btn").html("登录")
              //停止定时器
              clearInterval(this.timer)
              this.timer=null
              //判断
              if(res.data==this.name){
                //用户名先存到本地
                window.localStorage.setItem("username",this.name)
                this.$router.push({name:'MeAll',params:{name:this.name}});
              }else{
                $(".errbox").html("账号或密码错误，请重新输入")
              }
            })
          }
        },
        getName(){
          this.name=$("#t1").val()
        }
      },
      mounted(){
        this.$nextTick(()=>{
          //获取父级的input内容
          this.getName()
          this.getpressdown()
        })
      }
    }
</script>

<style scoped>
  .errbox{
    color:red;
    background-color: transparent;
    font-size: 1.2rem;
    height: 2rem;
  }
  .section-pass{
    position: relative;
    height: 5.6rem;
    line-height: 5.6rem;
    background: #fff;
    border-bottom: 2px solid #dfdfdf;
  }
  .section-pass img{
    position: absolute;
    right: .8rem;
    top: 50%;
    font-size: 1.2rem;
  }
  .ft{
    font-size: 1.4rem;
  }
  input{
    width: 100%;
    color: #111;
    font-size: 1.6rem;
    height: 5.6rem;
    border:none;
    outline: none;
  }
  .section-con button{
    width:100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 3rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
  .login-type{
    display: flex;
    justify-content: space-between;
    height: 6.2rem;
    line-height: 6.2rem;
  }
</style>
