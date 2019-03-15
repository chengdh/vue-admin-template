<template>
    <el-row :gutter="20">
        <content-type-button
          v-for="(ct,i) in content_type_cat_rels_by_cat_id(contentTypeCat.id)"
          :content-type="ct"
          :key="i"
        />
    </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import ContentTypeButton from "./components/ContentTypeButton";

export default {
  components: {
    ContentTypeButton
  },
  props: ["contentTypeCat"],
  name: "ModuleList",
  computed: {
    ...mapGetters(["content_type_cat_rels_by_cat_id"])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
