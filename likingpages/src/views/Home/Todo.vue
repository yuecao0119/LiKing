<template>
  <div class="todo-main">
    
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["focusedByFather"],
  data() {
    return {
      focused: false,
      
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
    clickButton() {
      this.focused = true;
      this.$emit("changeFocused", true);
    },
  },
};
</script>

<style scoped>
.todo-main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
