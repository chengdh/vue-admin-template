<template>
  <div class="staff-container">
    <div class="filter-container">
      <el-input placeholder="姓名/电话" style="width: 200px;" v-model="listQuery.name" size="small" class="filter-item"/>
      <el-select placeholder="所属工区" size="small" v-model="listQuery.part_id"  >
        <el-option v-for="(part,i) in parts" :key="i" :label="part.name" :value="part.id"></el-option>
      </el-select>
      <el-select placeholder="工作岗位" size="small" v-model="listQuery.job_station_id"   >
        <el-option v-for="(js,i) in job_stations" :key="i" :label="js.name" :value="js.id"></el-option>
      </el-select>
      <el-select placeholder="所属公司" size="small"  v-model="listQuery.company_id"  >
        <el-option v-for="(c,i) in companies" :key="i" :label="c.name" :value="c.id"></el-option>
      </el-select>

      <el-select placeholder="施工班组" size="small" v-model="listQuery.group_id"   >
        <el-option v-for="(team,i) in teams" :key="i" :label="team.name" :value="team.id"></el-option>
      </el-select>

      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-search"
        size="small"
        round
        @click="handleQuery"
      >查询</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        size="small"
        round
        @click="handleCreate"
      >新建</el-button>
    </div>
    <staff-table ref="table" :row-dblclick="rowDblclick" :list-query.sync="listQuery" />
    <router-view></router-view>
    <slideout-panel ref="panel"></slideout-panel>
  </div>
</template>
<script>
import { fetchCompanyList } from "@/api/company";
import { fetchDepartmentList } from "@/api/department";
import { fetchTeamList } from "@/api/team";
import { fetchPartList } from "@/api/part";
import { fetchJobStationList } from "@/api/job_station";
import StaffTable from "./components/table";
import StaffForm from "./components/form";
export default {
  name: "StaffComponent",
  components: {
    StaffTable
  },
  data() {
    return {
      panel: undefined,
      companies: [],
      parts: [],
      teams: [],
      departments: [],
      job_stations: [],
      listQuery:{
        page: 1,
        limit: 20,
        name: "",
        company_id: undefined,
        part_id: undefined,
        group_id: undefined,
        job_station_id: undefined
      }
    };
  },
  created() {
    // fetchCompanyList().then(response => {
    //   this.companies = response.results;
    // });
    // fetchPartList().then(response => {
    //   this.parts = response.results;
    // });
    // fetchTeamList().then(response => {
    //   this.teams = response.results;
    // });
    // fetchDepartmentList().then(response => {
    //   this.departments = response.results;
    // });
    // fetchJobStationList().then(response => {
    //   this.job_stations = response.results;
    // });
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
          closePanel: this.closePanel,
          companies: this.companies,
          parts: this.parts,
          departments: this.departments,
          teams: this.teams,
          job_stations: this.job_stations
          //any data you want passed to your component
        }
      });
    },
    handleQuery(){
      this.$refs['table'].getList()
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
      if (this.panel) {
        this.panel.hide();
      }
      this.$refs["table"].getList();
    },
    //关闭弹出窗口
    closePanel() {
      if (this.panel) {
        this.panel.hide();
      }
    },
    //鼠标双击事件
    rowDblclick(row, col, evt) {
      console.log("row dblclick");
      const staffId = row.staff_id;
      this.panel = this.$showPanel({
        component: StaffForm,
        width: 460,
        props: {
          //传递callback函数给form
          onSave: this.onSave,
          onDestroy: this.onDestroy,
          disabled: true,
          staffId: staffId,
          closePanel: this.closePanel,
          companies: this.companies,
          parts: this.parts,
          departments: this.departments,
          teams: this.teams,
          job_stations: this.job_stations
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