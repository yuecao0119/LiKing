<template>
  <div class="footer">
    <span>© 2022</span>
    <a href="#" title="Light Ink" target="_blank" class="link">{{
      this.name
    }}</a>
    <span> | </span>
    <span class="records">
      <a
        href="#"
        title="工业和信息化部域名信息备案管理系统"
        target="_blank"
        class="link"
        >{{ this.ICP }}</a
      >
      <span> | </span>
      <a
        href="#"
        title="全国互联网安全管理服务平台"
        target="_blank"
        class="link"
        >{{ this.netSecRecord }}</a
      >
      <span> | </span>
    </span>
    <a href="#" title="关于" target="_blank" class="link">关于</a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {
      name: "Light Ink",
      ICP: "豫ICP备10000000号-1",
      netSecRecord: "豫公网安备10000000000000号",
    };
  },
};
</script>

<style scoped>
.footer span {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  padding: 0 3px;
}
.link {
  font-size: 0.7rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}
.link:hover {
  color: #fff;
}
@media screen and (max-width: 550px) {
  .records {
    display: none;
  }
}
</style>
