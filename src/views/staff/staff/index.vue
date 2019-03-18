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
    <staff-table ref="table" :row-dblclick="rowDblclick"/>
    <router-view></router-view>
    <slideout-panel ref="panel"></slideout-panel>
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
  data() {
    return {
      panel: undefined
    };
  },
  methods: {
    handleCreate() {
      this.panel = this.$showPanel({
        component: StaffForm,
        width: 460,
        props: {
          //传递callback函数给form
          onSave: this.onSave,
          disabled: false,
          closePanel: this.closePanel
          //any data you want passed to your component
        }
      });

      // this.$router.push({ name: "new_staff" });
    },
    onSave(staff) {
      console.log("on save");
      if (this.panel) {
        this.panel.hide();
      }
      this.$refs["table"].getList();
    },
    onDestroy(staff) {
      console.log("on destroy");
    },
    //关闭弹出窗口
    closePanel(){
      if(this.panel){
        this.panel.hide()
      }

    },
    //鼠标双击事件
    rowDblclick(row, col, evt) {
      console.log("row dblclick");
      const staffId = row.staff_id
      this.panel = this.$showPanel({
        component: StaffForm,
        width: 460,
        props: {
          //传递callback函数给form
          onSave: this.onSave,
          disabled: true,
          staffId: staffId,
          closePanel: this.closePanel
          //any data you want passed to your component
        }
      });


    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.filter-container {
  margin-bottom: 10px;
}
</style>