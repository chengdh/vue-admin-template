<template>
  <div class="table-container">
  
    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      stripe
      size="small"
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
      @row-dblclick="rowDblclick"
    >
      <el-table-column type="index" :index="indexMethod"/>

      <el-table-column label="公司" prop="company" sortable="custom" align="center"/>
      <el-table-column label="所属工区" prop="part" sortable="custom" align="center"/>
      <el-table-column label="所属部门" prop="department" sortable="custom" align="center"/>
      <el-table-column label="姓名" prop="name"/>
      <el-table-column label="年龄" prop="age"/>
      <el-table-column label="身份证" prop="age"/>
      <el-table-column label="手机" prop="age"/>
      <el-table-column label="工作岗位" prop="job_station"/>
      <el-table-column label="录入时间" prop="create_time"/>
      <!-- <el-table-column
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-view" size="mini" @click="$emit('row-dblclick',scope.row)">查看</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>
<script>
import {
  fetchList
} from "@/api/staff";
import Pagination from "@/components/Pagination"; // Secondary package based on el-pagination
export default {
  name: "StaffTable",
  components: { Pagination },
  props: ["rowDblclick","listQuery"], 
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: false,
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ]
    };
  },
  created() {
    // this.getList();
  },
  methods: {
    indexMethod(i) {
      return i + 1
    },
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.results;
        this.total = response.count;
        this.listLoading = false;
      });
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.getList();
    }
  }
};
</script>
