<template>
  <div class="time">
    <h1>
      {{ this.hours }}
      <span>:</span>
      {{ this.minutes }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      timer: "", // 定时器
      hours: "00",
      minutes: "00",
    };
  },
  // 组件创建时设置计时器定时获取时间
  created() {
    this.timer = setInterval(this.getTime, 1000); // 周期调用函数获取时间
  },
  //   在Vue实例销毁前，清除定时器
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    getTime() {
      // new Date() 时间类 获取当前时间
      // new Date()返回的值是静态值，并不是实时更新的，所以需要周期性获取）
      this.hours = new Date().getHours();
      this.hours = this.hours <= 9 ? "0" + this.hours : this.hours;
      this.minutes = new Date().getMinutes();
      this.minutes = this.minutes <= 9 ? "0" + this.minutes : this.minutes;
    },
  },
};
</script>

<style scoped>
.time {
  animation: delayedFadeIn 2s;
  margin: 0;
  color: #fff;
  font-size: 1.5em;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
}
.time h1 {
  font-weight: 320;
}
.time span {
  font-weight: 320;
  animation: blink 1s ease infinite;
}
/* 秒 闪烁 */
@keyframes blink {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
/* 打开主页延迟显示2s显示时间组件 */
@keyframes delayedFadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
