<template>
  <div class="fileSystems-main">
    
  </div>
</template>

<script>
export default {
  name: "FileSystems",
  props: ["fFocused"],
  data() {
    return {
      focused: false,
      
    };
  },
  components: {},
  watch: {
    // 监听父组件的focused属性值
    fFocused: function (val) {
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
.fileSystems-main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
