<template>
  <div class="search-main">
    <!-- 搜索框 -->
    <div class="search-box">
      <button
        class="search-box-button"
        @click="clickSearchBoxButton"
        :class="{ show: this.focused == false }"
      >
        搜索
      </button>
      <input
        type="text"
        class="search-input"
        :class="{ show: this.focused == true }"
      />
    </div>
    <!-- 常用浏览页 -->
    <div class="common-box"></div>
    <!-- 言 -->
    <div class="words-box" :class="{ showByOpacity: this.focused == true }">
      <span class="words-bg"></span>
      <p class="words-content">
        {{ this.words.content }}
      </p>
      <p class="words-origin">
        {{ this.words.origin }}
      </p>
      <div class="words-operations"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["focusedByFather"],
  data() {
    return {
      focused: false,
      words: {
        id: "0",
        content: "「\ 时人莫小池中水，浅处无妨有卧龙\ 」",
        origin: "——《醉中赠符载》唐·窦庠",
      },
    };
  },
  components: {},
  watch: {
    // 监听父组件的focused属性值
    focusedByFather: function (val) {
      this.focused = val;
    },
  },
  methods: {
    clickSearchBoxButton() {
      this.focused = true;
      this.$nextTick(function () {
        document.getElementsByClassName("search-input")[0].focus();
      });
      this.$emit("changeFocused", true);
    },
  },
};
</script>

<style scoped>
.search-main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-box {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-box-button {
  outline: 0;
  border: none;
  position: absolute;
  width: 230px;
  height: 42px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 30px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  display: none;
}
.search-box-button:hover {
  width: 540px;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(77, 77, 77, 0.75);
}
.search-input {
  outline: 0;
  border: none;
  position: absolute;
  width: 540px;
  height: 42px;
  font-size: 1rem;
  border-radius: 30px;
  text-align: center;
  display: none;
}
.words-box {
  position: absolute;
  width: 100%;
  height: 75px;
  bottom: 125px;
  align-items: center;
  cursor: default;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
}
.words-bg {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(90deg, #fff, #00000000);
  opacity: 0;
  transition: all 0.5s ease;
}
.words-box:hover .words-bg {
  opacity: 1;
}
.words-box p {
  font-size: smaller;
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: 0.25s;
}
.words-origin {
  opacity: 0;
}
.words-box:hover p {
  opacity: 1;
  color: rgba(0, 0, 0, 0.9);
}
.show {
  display: block;
}
.showByOpacity {
  opacity: 1;
}
@media screen and (max-width: 650px) {
  .search-box-button:hover {
    width: 80%;
  }
  .search-input {
    width: 80%;
  }
}
</style>
