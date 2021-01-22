<template>
  <el-container>
    <el-aside width="250px">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span><router-link to="admin" style="text-decoration:none;color: white">Tổng quát</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-shop"></i>
          <router-link to="sanpham" style="text-decoration:none;color: white">Quản lý sản phẩm</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <router-link to="hoadon" style="text-decoration:none;color: white">Quản lý hóa đơn</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-data-analysis"></i>
          <router-link to="thongke" style="text-decoration:none;color: white">Báo cáo thông kê</router-link>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lý chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt động">
            <el-menu-item index="1-1">Sản phẩm</el-menu-item>
            <el-menu-item index="1-2">Đơn hàng</el-menu-item>
            <el-menu-item index="1-3">Khách hàng</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="1-4">Doanh thu</el-menu-item>
            <el-menu-item index="1-5">Tồn kho</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span>Cài đặt hệ thống</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row style="margin-top: 8px">
          <el-col :span="22" style="margin-top: 8px">
            <slot name="header"></slot>
          </el-col>
          <el-col :span="1" style="margin-top: 12px">
            <el-badge :value="12" class="item">
              <i class="el-icon-bell"></i>
            </el-badge>
          </el-col>
          <el-col :span="1">
            <el-dropdown @command="handleCommand" >
              <span class="el-dropdown-link">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">Thông tin tài khoản</el-dropdown-item>
                <el-dropdown-item command="b">Đổi mật khẩu</el-dropdown-item>
                <el-dropdown-item command="c">Cấu hình</el-dropdown-item>
                <el-dropdown-item command="e" divided><router-link to="/">Đăng xuất</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  components: {
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

  }
}
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-header, .el-footer {
  background-color: #f2f6fe;
  color: black;
  text-align: left;
}

.el-aside {
  background-color: #001529;
}

.el-main {
  background-color: white;
  text-align: left;
  height: 600px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5)
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
