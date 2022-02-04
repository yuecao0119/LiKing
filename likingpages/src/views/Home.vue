<template>
  <div class="home">
    <el-container>
      <!-- 背景图片 -->
      <div class="home-background"></div>
      <!-- 头部导航 -->
      <el-header>
        <!-- LOGO -->
        <div class="logo">
          <a href="/" @click="activeURL = 0"
            ><img src="../assets/logo.png" alt="logo"
          /></a>
        </div>
        <!-- 菜单栏 -->
        <div class="menu" router>
          <div class="menu-item" :key="0">
            <a href="/" @click="activeURL = 0">首页</a>
            <div
              class="menu-underline"
              :class="{ activedPage: activeURL == 0 }"
            ></div>
          </div>
          <div
            class="menu-item"
            @click="activeURL = index + 1"
            v-for="(item, index) in this.$router.options.routes[0].children"
            :key="index + 1"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
            <div
              class="menu-underline"
              :class="{ activedPage: activeURL == index + 1 }"
            ></div>
          </div>
        </div>
        <!-- 个人 -->
        <div class="person">
          <div class="person-img">
            <img src="../assets/person.png" alt="" />
          </div>
          <!-- TODO 点击头像下拉框 -->
        </div>
      </el-header>
      <!-- 主体部分 -->
      <el-main>
        <!-- 时间 -->
        <div class="time-box">
          
        </div>
        <!-- 主题内容 -->
        <router-view />
      </el-main>
      <!-- 底部信息 -->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../components/Home/Footer.vue"

export default {
  name: "Home",
  components: { Footer },
  data() {
    return {
      activeURL: 0,
    };
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
.home-background {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("../assets/home_background.jpg") no-repeat;
  background-size: cover;
  z-index: -1;
}
.el-header {
  width: 100%;
  height: 50px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  opacity: 0;
  transition: all 0.5s ease;
}
.el-header:hover {
  padding-top: 15px;
  opacity: 1;
}
.el-header .logo {
  height: 35px;
}
.el-header .logo img {
  height: 100%;
}
.el-header .menu {
  width: 30%;
  height: 35px;
  left: 35%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  line-height: 35px; /* 垂直居中 */
}
.el-header .menu-item {
  width: 32px;
}
.el-header .menu-item .menu-underline {
  width: 10px;
  height: 5px;
  background-color: #ffffffcc;
  border-radius: 5px;
  margin-left: calc(50% - 5px); /* 注意空格，否则无效！ */
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.el-header .menu-underline.activedPage {
  transform: scaleX(1);
}
.el-header .menu-item a {
  color: #ffffffcc;
  text-decoration: none;
}
.el-header .menu-item a:hover {
  color: #fff;
}
.person {
  display: flex;
  justify-content: right;
}
.person .person-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* border: 4px solid rgba(255, 255, 255, 0.3); */
  overflow: hidden;
}
.person .person-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.person .settings {
  padding: 0;
}

.el-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding-bottom: 12px;
  height: inherit;
}
</style>
