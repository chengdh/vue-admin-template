<template>
  <div class="home-wrapper">
    <el-row :gutter="20">
      <content-type-cat-button
        v-for="(cat,i) in content_type_cats"
        :content-type-cat="cat"
        :key="i"
      />
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentTypeCatButton from "./components/ContentTypeCatButton";

export default {
  components: {
    ContentTypeCatButton
  },
  name: "Home",
  computed: {
    ...mapGetters(["content_type_cats"])
  }
  
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
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