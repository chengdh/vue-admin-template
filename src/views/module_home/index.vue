<template>
  <div class="module-home-wrapper">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "ModuleHome",
  props: ["contentTypeCat"],
  computed: {
    ...mapGetters(["current_content_cat"])
  },
  beforeRouteUpdate (to, from, next) {
    console.log("before route update")
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  mounted() {

    console.log("mounted")
    const content_type_cat = this.contentTypeCat || this.current_content_cat 
    this.$router.push({name: 'module_list',params: {meta_title: content_type_cat.name,contentTypeCat: content_type_cat}})
    this.$store.dispatch("SetCurrentContentCat",content_type_cat)
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
