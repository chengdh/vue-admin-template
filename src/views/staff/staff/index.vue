<template>
  <div class="staff-container">
    <div class="filter-container">
      <el-input placeholder="姓名/电话" style="width: 200px;" class="filter-item"/>

      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        size="small"
        round
        @click="handleCreate"
      >新建</el-button>
    </div>
    <staff-table/>
    <router-view></router-view>
    <slideout-panel></slideout-panel>
  </div>
</template>
<script>
import StaffTable from "./components/table";
import StaffForm from "./components/form";
export default {
  name: "StaffComponent",
  components: {
    StaffTable
  },
  methods: {
    handleCreate() {
      const panelInstance = this.$showPanel({
        component: StaffForm,
        width: 460,
        props: {
          //any data you want passed to your component
        }
      });

      // this.$router.push({ name: "new_staff" });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.filter-container {
  margin-bottom: 10px;
}
</style>