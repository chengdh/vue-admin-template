<template>
  <div class="module-home-wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ModuleHome",
  props: ["contentTypeCat"],
  mounted() {
    this.$router.push({name: 'module_list',params: {meta_title: this.contentTypeCat.name,contentTypeCat: this.contentTypeCat}})
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.module-home {
  &-wrapper {
    margin: 30px 10px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
