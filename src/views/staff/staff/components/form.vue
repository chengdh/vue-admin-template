<template>
  <div class="form-wrapper">
    <div class="header">人员资料</div>
    <el-form ref="form" :model="form" size="mini" :rules="rules" inline-message label-width="100px">
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

      <el-form-item label="工作岗位">
        <el-select v-model="form.blood" placeholder="工作岗位">
          <el-option v-for="(js,i) in job_stations" :key="i" :label="js.name" :value="js.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在工区">
        <el-select v-model="form.part" placeholder="所属工区">
          <el-option v-for="(part,i) in parts" :key="i" :label="part.name" :value="part.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属公司">
        <el-select v-model="form.company" placeholder="所属公司">
          <el-option v-for="(c,i) in companies" :key="i" :label="c.name" :value="c.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="施工班组">
        <el-select v-model="form.group" placeholder="施工班组">
          <el-option v-for="(team,i) in teams" :key="i" :label="team.name" :value="team.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="工作岗位">
        <el-select v-model="form.job_station" placeholder="工作岗位">
          <el-option v-for="(js,i) in job_stations" :key="i" :label="js.name" :value="js.id"></el-option>
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
      <el-button type="primary" @click="onSubmit('form')" size="small">保存</el-button>
      <el-button size="small">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "StaffForm",
  name: "StaffForm",
  data() {
    return {
      form: {
        staff_id: "1",
        company: "",
        part: "",
        group: "",
        department: "",
        job_station: "",
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
        company: [
          { required: true, message: "请选择所属机构", trigger: "change" }
        ]
      },
      companies: [],
      parts: [],
      teams: [],
      departments: []
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
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
