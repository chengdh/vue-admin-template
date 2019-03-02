<template>
  <div class="home-wrapper">
    <el-row :gutter="20">
      <content-type-button
        v-for="(ct,i) in content_type_cat_rels_by_group_id_and_cat_id(1,contentTypeCat.id)"
        :content-type="ct"
        :key="i"
      />
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContentTypeButton from "./components/ContentTypeButton";

export default {
  components: {
    ContentTypeButton
  },
  props: ['contentTypeCat'],
  name: "Home",
  computed: {
    ...mapGetters(["content_type_cat_rels_by_group_id_and_cat_id"])
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
