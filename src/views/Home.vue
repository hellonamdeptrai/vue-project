<template>
  <div class="container">
    <div class="login">
      <div v-if="check" class="wrap">
        <div class="logo">
          <h3>{{count}}</h3>
          <img src="http://dev-fms.zentsoft.com/static/media/logo-login.2d516aef.png" alt="">
        </div>

        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" style="width: 100%">
          <el-form-item
              prop="email"
              :rules="[
                         { required: true, message: 'Email không được để trống', trigger: 'change' },
                          { type: 'email', message: 'Vui lòng nhập đúng định dạng email', trigger: ['blur', 'change'] }
                      ]"
          >
            <el-input placeholder="Email" v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
              prop="password"
              :rules="[
                         { required: true, message: 'Mật khẩu không được để trống', trigger: 'change' }
                      ]"
          >
            <el-input placeholder="Mật khẩu" type="password" v-model="dynamicValidateForm.password"></el-input>
          </el-form-item>
          <el-button type="text" @click="forget()" style="margin-left: 289px;margin-bottom: 25px">Quên Mật Khẩu</el-button>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="submitForm('dynamicValidateForm')">ĐĂNG NHẬP</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-else class="wrap">
        <h2>Lấy lại mật khẩu</h2>
        <p>Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.</p>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" style="width: 100%">
          <el-form-item
              prop="email"
              :rules="[
                         { required: true, message: 'Email không được để trống', trigger: 'change' },
                          { type: 'email', message: 'Vui lòng nhập đúng định dạng email', trigger: ['blur', 'change'] }
                      ]"
          >
            <el-input placeholder="Email" v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" :plain="true" @click="submitForm2('dynamicValidateForm')">GỬI EMAIL</el-button>
          </el-form-item>
          <el-button type="text" @click="login()" style="margin-left: 120px;margin-bottom: 25px"><i class="el-icon-back"></i>Trở về trang đăng nhập</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
 import { mapState } from 'vuex'
export default {
  data() {
    return {
      check: true,
      dynamicValidateForm: {
        password: '',
        email: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: 'admin' })
        } else {
          console.log('Lỗi đăng nhập!!');
          return false;
        }
      });
    },
    submitForm2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            showClose: true,
            message: 'Gửi email thành công',
            type: 'success'
          });
        } else {
          this.$message({
            showClose: true,
            message: 'Gửi không thành công',
            type: 'error'
          });
          return false;
        }
      });
    },
    forget() {
      this.check = false;
    },
    login() {
      this.check = true;
    }
  },
  computed: {
      ...mapState([
        'count'
      ])
    }
}
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: 0 auto;
  .login {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #0093e9;
    background: linear-gradient(160deg,#0093e9,#80d0c7);
  }
  .wrap {
    width: 444px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    //justify-content: space-between;
    padding: 24px;
    .logo {
      width: 100%;
      text-align: center;
      margin-bottom: 24px;
      img {
        width: 200px;
        display: inline-block;
      }
    }
    h2 {
      margin-left: 100px;
      margin-bottom: 30px;
    }
    p {
      margin-top: 10px;
      padding-bottom: 5px;
    }
  }
}
</style>
