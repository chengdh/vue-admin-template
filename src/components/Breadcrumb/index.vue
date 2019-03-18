<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span
          v-if="item.redirect==='noredirect'||index==levelList.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from "path-to-regexp";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  computed: {
    ...mapGetters(["current_content_cat"])
  },

  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      //判断是否传入了需要修改的title属性
      if (this.$route.params && this.$route.params.meta_title) {
        this.$route.meta.title = this.$route.params.meta_title;
      }
      let matched = this.$route.matched.filter(item => item.name);

      let { 0: first, [matched.length - 1]: last } = matched;

      if (first && first.name !== "home") {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      let { redirect, path, params } = item;
      if (item.name === "module_home") {
       params = {
          meta_title: this.current_content_cat.name,
          contentTypeCat: this.current_content_cat
        };
      }
      if (redirect) {
        if (redirect.name) {
          this.$router.push({ name: redirect.name, params: params });
          return;
        }
        if (redirect.path) {
          this.$router.push({ path: redirect.path, query: params });
          return;
        }
      }
      this.$router.push({ path: this.pathCompile(path), query: params });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
