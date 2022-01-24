<template>
  <div>
    <el-form
      class="login-form"
      ref="ref-loginform"
      :model="loginForm"
      :rules="loginRules"
    >
      <h3>登 录</h3>
      <el-form-item prop="account">
        <input type="text" v-model="loginForm.account" required />
        <div class="input-underline"></div>
        <label>账户</label>
      </el-form-item>
      <el-form-item prop="password">
        <input type="password" v-model="loginForm.password" required />
        <div class="input-underline"></div>
        <label>密码</label>
      </el-form-item>
      <el-form-item prop="securityCode" inline="true" class="security-code-box">
        <input
          type="text"
          autocomplete="false"
          v-model="loginForm.securityCode"
          style="width: 58%"
          required
        />
        <div class="input-underline"></div>
        <label>验证码</label>
        <el-button
          class="security-code-button"
          type="primary"
          @click="getSecurityCode"
          >获取验证码</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      securityCodeUrl: "",
      loginForm: {
        account: "",
        password: "",
        securityCode: "",
      },
    };
  },
  methods: {
    getSecurityCode() {
      alert("获取验证码");
    },
    submitLogin() {
      alert("Login");
    },
  },
};
</script>

<style scoped>
.login-form{
  margin: 0 0.6rem;
}
.login-form h3 {
  text-align: center;
  font-size: 2.3rem;
  padding-bottom: 15px;
  width: 100%;
  /* 大写 */
  text-transform: uppercase;
}
.login-form input {
  font-size: 1rem;
  background: rgba(39, 39, 41, 0.025);
  /* background: rgba(255, 255, 255, 0); */
  border-radius: 0.5rem;
  padding-left: 1rem;
  /* border: 1px solid transparent; */
  border: none;
  height: 46px;
  width: 100%;
  line-height: 150%;
  color: #25262b;
}
.login-form input:focus {
  /* border: rgb(180, 193, 255) solid 1px; */
  outline: none;
  background: rgba(255, 255, 255, 0.04);
}
.login-form label {
  font-size: 1rem;
  position: absolute;
  bottom: 10px;
  left: 1rem;
  color: rgba(65, 65, 65, 0.6);
  pointer-events: none;
  transition: all 0.3s ease;
}
/* 关联input与label  input的focus触发会改变label的属性  */
.login-form input:focus ~ label,
.login-form input:valid ~ label {
  /* :valid选择器是如果合法触发，所以输入框记得加required属性 */
  transform: translateY(-1.8rem) translateX(-0.5rem);
  font-size: 0.85rem;
  letter-spacing: 0.05rem;
  /* color: rgba(75, 105, 254, 0.7); */
}
.login-form .input-underline {
  position: absolute;
  bottom: 0px;
  height: 1.4px;
  width: 95%;
  left: 2.5%;
}
.login-form .security-code-box .input-underline {
  width: 55%;
}
/* 不理解这里加before选择器是为了什么 */
.login-form .input-underline:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  /* background: rgba(75, 105, 254, 0.7); */
  background: rgba(129, 129, 129, 0.3);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.login-form input:focus ~ .input-underline:before{
  transform: scaleX(1);
}
.login-form button {
  width: 100%;
  background-image: linear-gradient(
    130deg,
    rgb(75, 105, 254) 0%,
    rgba(150, 152, 253, 0.75) 100%
  );
  border-radius: 10px;
  backdrop-filter: blur(24px);
  border: none;
  cursor: pointer;
  height: 48px;
  font-size: 16px;
}
.login-form .security-code-box >>> div {
  display: flex;
  justify-content: space-between;
}
.login-form .security-code-button {
  background-image: linear-gradient(
    130deg,
    #93a8f1b6 0%,
    rgba(152, 171, 255, 0.6) 100%
  );
  width: 35%;
  font-size: 0.9rem;
}
</style>
