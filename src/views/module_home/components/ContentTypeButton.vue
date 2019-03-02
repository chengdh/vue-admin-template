<template>
  <el-col :span="3">
    <div class="big-button-wrapper">
      <el-button size="medium">
        <i class="el-icon-star-off big-icon"></i>
        <p>
        {{ contentType.name }}
        </p>
      </el-button>
    </div>
  </el-col>
</template>
<script>
export default {
  name: "BigButton",
  props: {
    contentType: {
      type: Object,
      required: true
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.big-button-wrapper {
  margin: 5px;
  .big-icon {
      font-size: 40px;
      color: red;
  }
}
</style>


