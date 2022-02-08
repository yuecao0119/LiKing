<template>
  <div class="home">
    <el-container>
      <!-- 背景图片 -->
      <div class="home-background" :class="{ focusedbg: this.focused == true }">
        <div :class="{ markbg: this.focused == true }"></div>
      </div>
      <!-- 头部导航 -->
      <el-header>
        <!-- LOGO -->
        <div class="logo">
          <a href="/" @click="this.activeURL = 0"
            ><img src="../assets/logo.png" alt="logo"
          /></a>
        </div>
        <!-- 菜单栏 -->
        <div class="menu" router>
          <!-- <div class="menu-item" :key="0">
            <a href="/" @click="this.activeURL = 0">首页</a>
            <div
              class="menu-underline"
              :class="{ activedPage: this.activeURL == 0 }"
            ></div>
          </div> -->
          <div
            class="menu-item"
            @click="this.activeURL = index"
            v-for="(item, index) in this.$router.options.routes[0].children"
            :key="index"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
            <div
              class="menu-underline"
              :class="{ activedPage: this.activeURL == index }"
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
      <div class="main-box" @click="toHome($event)">
        <el-main>
          <!-- 时间 -->
          <div class="time-box">
            <router-link
              to="/commonApp"
              @click="this.activeURL = 1"
              style="text-decoration: none"
              ><Time
            /></router-link>
          </div>
          <!-- 主题内容 -->
          <router-view :focusedByFather="this.focused" @changeFocused="changeFocusedVal"/>
        </el-main>
      </div>
      <!-- 底部信息 -->
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Time from "../components/Home/Time.vue";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "Home",
  components: {
    Time,
    Footer,
  },
  data() {
    return {
      activeURL: 0,
      focused: false,
    };
  },
  methods: {
    toHome(event) {
      if (
        event.target.className !== "main-box" &&
        event.target.className !== "el-main"
      ) {
        return;
      }
      this.activeURL = 0;
      this.focused = false;
      this.$router.push("/");
    },
    changeFocusedVal(val) {
      this.focused = val;
    }
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
  object-fit: cover;
  transition: 0.25s;
  z-index: -10;
}
.markbg {
  z-index: -9;
  opacity: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
  transition: 0.25s;
}
.focusedbg {
  transform: scale(1.1);
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
.person {
  padding: 0;
}
.main-box {
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 0px;
}
.el-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.time-box {
  margin-top: 3%;
}
.time-box:hover {
  animation: zoom 0.7s;
}
@keyframes zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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
