<template>
  <div class="context">
    <div class="con-background"></div>
    <div class="left-container">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="" />
        <span>Liking</span>
      </div>
      <div class="text-box">
        <h3>让标准</h3>
        <p>成为人与自然之间的桥梁</p>
      </div>
      <div class="footer-box">
        <span class="footer-list">
          <a class="footer-about" target="_blank" href="/about">关于</a>
          <span class="footer-line"></span>
          <a class="footer-help" target="_blank" href="">帮助</a>
        </span>
        <span class="footer-copyright"> 2022 ©Liking </span>
      </div>
    </div>
    <div class="right-container">
      <div class="right-context">
        <!-- 点击按钮会显示不同组件 -->
        <component :is="loginOrRegister"></component>
      </div>
      <div class="right-footer-box">
        <div class="right-footer-login-box">
          <a class="forget-password" href="/about">忘记密码</a>
          <span class="footer-line"></span>
          <a class="quick-register" @click="toRegister">快速注册</a>
        </div>
        <div class="right-footer-register-box" style="display:none;">
          <span>已有账户？</span>
          <a class="quick-login" @click="toLogin">去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginRegister/LoginForm.vue";
import RegisterForm from "@/components/LoginRegister/RegisterForm.vue";

export default {
  name: "LoginRegister",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      loginOrRegister: "LoginForm",
    };
  },
  methods: {
    toRegister() {
      document.getElementsByClassName("right-footer-login-box")[0].setAttribute("style","display:none");
      document.getElementsByClassName("right-footer-register-box")[0].setAttribute("style","display");
      document.getElementsByClassName("right-container")[0].setAttribute("style", "height:420px; margin-top: -250px");
      this.loginOrRegister = "RegisterForm";
    },
    toLogin() {
      document.getElementsByClassName("right-footer-register-box")[0].setAttribute("style","display:none");
      document.getElementsByClassName("right-footer-login-box")[0].setAttribute("style","display");
      document.getElementsByClassName("right-container")[0].setAttribute("style", "height:350px; margin-top: -215px");
      this.loginOrRegister = "LoginForm";
    },
  },
};
</script>

<style scoped>
.context {
  margin: 0;
  padding: 0;
  /* 100%窗口高度 */
  height: 100vh;
  transition: all 0.5s;

  /* 渐变背景 */
  /* background: linear-gradient(200deg, #f3e7e9, #e3eeff); */
  /* background-image: url("../assets/login_background.jpg"); */
}
.con-background {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("../assets/login_background.jpg") no-repeat;
  background-size: cover;
}
.text-box {
  position: fixed;
  left: 10%;
  top: 45%;
  color: #fff;
  display: block;
  text-align: left;
}
.text-box h3 {
  font-size: 54px;
  letter-spacing: 0;
  font-weight: 700;
}
.text-box p {
  font-size: 32px;
  letter-spacing: 3.81px;
  font-weight: 300;
}
.logo-box {
  position: fixed;
  left: 6%;
  top: 9%;
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo-box span {
  margin-left: 10px;
  font-size: 30px;
  font-family: Times;
}
.logo-box img {
  height: 50px;
  width: 50px;
}
.footer-box {
  position: fixed;
  opacity: 0.78;
  left: 6%;
  bottom: 8%;
  font-size: 14px;
  color: #fff;
}
.footer-box a {
  color: #fff;
  text-decoration: none;
}
.footer-box a:hover {
  color: rgb(75, 105, 254);
  opacity: 1;
}
.footer-about .footer-help {
  opacity: 0.8;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.footer-line {
  display: inline-block;
  width: 2px;
  height: 12px;
  filter: alpha(opacity=78);
  opacity: 0.78;
  margin: 0 12px 0 13px;
  background: #fff;
  position: relative;
  top: 1px;
}
.footer-copyright {
  opacity: 0.54;
  font-size: 12px;
  color: #fff;
  display: inline-block;
  padding-left: 30px;
}
.right-container {
  top: 50%;
  margin-top: -215px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 170px;
  width: 420px;
  height: 350px; /* login的高度 */
  padding: 28px 35px 20px 35px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.5s;
}
.right-footer-box {
  text-align: center;
}
.right-footer-box a {
  color: rgb(100, 100, 100);
  text-decoration: none;
  cursor: pointer; /* 光标变小手 */
}
.right-footer-box a:hover {
  color: rgb(75, 105, 254);
  opacity: 1;
}
/* 窗口变化会导致text-box隐藏 */
@media screen and (max-width: 1000px) {
  /* max screen size */
  .text-box {
    display: none;
  }
}
/* 窗口自适应  登录/注册窗口 */
@media screen and (max-width: 1000px) {
  .context {
    animation: fadeIn 0.25s linear;
    display: flex;
    justify-content: center;
  }
  .right-container {
    right: auto;
  }
}
@media screen and (max-width: 550px) {
  .right-container {
    background-color: transparent !important;
    padding: 0 0;
    height: auto;
    width: 70%;
  }
  .con-background {
    background: #fff;
    background-size: cover;
  }
  .logo-box {
    display: none;
  }
  .footer-box {
    position: absolute;
    left: 41%;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    transition: all 0.5s;
  }
  .footer-box a {
    color: rgb(0, 0, 0);
  }
  .footer-copyright {
    color: rgb(100, 100, 100);
    padding-top: 0.3rem;
    padding-left: 2px;
  }
  .footer-line {
    background: rgb(100, 100, 100);
  }
}
</style>
