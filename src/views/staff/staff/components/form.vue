<template>
  <div class="form-wrapper">
    <div class="header">人员资料</div>
    <el-form
      ref="form"
      :model="form"
      size="mini"
      :disabled="disabled"
      inline-message
      label-width="100px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="血型">
        <el-select v-model="form.blood" placeholder="血型">
          <el-option label="A" value="A"></el-option>
          <el-option label="B" value="B"></el-option>
          <el-option label="O" value="O"></el-option>
          <el-option label="AB" value="AB"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份证号" prop="id_card">
        <el-input v-model="form.id_card"></el-input>
      </el-form-item>

      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="form.birth_place"></el-input>
      </el-form-item>

      <el-form-item label="所在工区">
        <el-select v-model="form.part_id" placeholder="所属工区">
          <el-option v-for="(part,i) in parts" :key="i" :label="part.name" :value="part.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作岗位">
        <el-select v-model="form.job_station_id" placeholder="工作岗位">
          <el-option v-for="(js,i) in job_stations" :key="i" :label="js.name" :value="js.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属公司">
        <el-select v-model="form.company_id" placeholder="所属公司">
          <el-option v-for="(c,i) in companies" :key="i" :label="c.name" :value="c.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="施工班组">
        <el-select v-model="form.group_id" placeholder="施工班组">
          <el-option v-for="(team,i) in teams" :key="i" :label="team.name" :value="team.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-switch v-model="form.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>
      <div class="header">头像</div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form>
    <!-- <el-form-builder :config="formConfig" v-model="formValues" label-width="80px"></el-form-builder> -->
    <div class="footer">

      <el-button type="primary" v-if="disabled" @click="disabled=false" size="small">编辑</el-button>
      <el-button type="primary" v-if="!disabled" @click="onSubmit('form')" size="small">保存</el-button>
      <el-button type="danger" v-if="staffId" @click="destroy('form')" size="small">删除</el-button>
      <el-button size="small" @click="closePanel()">取消</el-button>
    </div>
  </div>
</template>
<script>

import { createStaff,fetchStaff,updateStaff } from "@/api/staff";
import { fetchCompanyList } from "@/api/company";
import { fetchDepartmentList } from "@/api/department";
import { fetchTeamList } from "@/api/team";
import { fetchPartList } from "@/api/part";
import { fetchJobStationList } from "@/api/job_station";
export default {
  name: "StaffForm",
  props: {
    disabled: {type: Boolean,default: false}, 
    onSave: Function,
    onDestroy: Function,
    staffId: String,
    closePanel: Function,
    companies: {type: Array, default: []},
    parts: {type: Array, default: []},
    teams: {type: Array, default: []},
    departments: {type: Array, default: []},
    job_stations: {type: Array, default: []}
  },
  data() {
    return {
      form: {
        staff_id: undefined,
        company_id: "",
        part_id: "",
        group_id: "",
        department_id: "",
        job_station_id: "",
        name: "",
        sex: "男",
        age: 25,
        birth_place: "",
        address: "",
        phone: "",
        id_card: "",
        id_card_photo: "",
        blood: "A",
        medical_history: "无",
        state: 1,
        note: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        id_card: [
          { required: true, message: "请输入身份证号", trigger: "blur" }
        ],
        company_id: [
          { required: true, message: "请选择所属机构", trigger: "change" }
        ]
      },
    
    };
  },
  created() {
    if(this.staffId){
      fetchStaff(this.staffId).then(response => {
        this.form = response
      })
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        this.disabled = true;
        if (valid) {
          if(this.form.staff_id){
            updateStaff(this.form.staff_id,this.form).then(resonse => {
              this.$message({
                type: 'success',
                message: '更新人员资料成功!'
              })
            })
          }
          else{
            createStaff(this.form).then(response => {
              this.$message({
                type: 'success',
                message: '创建人员资料成功!'
              })
            })
          }
          this.onSave(this.form)

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    destroy(form){
      this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.form-wrapper {
  padding: 5px;
  .header {
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
    padding: 5px;
    margin-bottom: 5px;
  }
  .footer {
    padding: 5px;
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
