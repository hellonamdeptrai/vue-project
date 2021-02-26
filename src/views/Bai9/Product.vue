<template>
  <div>
    <el-button type="primary" round @click="dialogFormVisible = true"
      >Thêm sản phẩm</el-button
    >

    <el-dialog title="Thêm sản phẩm mới" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Tên" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Miêu tả" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Giá bán" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Thoát</el-button>
        <el-button type="primary" @click="dialogFormVisible = false ,addProduct()"
          >Tạo mới</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="Sửa sản phẩm" :visible.sync="dialogFormEdit">
      <el-form :model="form">
        <el-form-item label="Tên" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Miêu tả" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Giá bán" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormEdit = false">Thoát</el-button>
        <el-button type="primary" @click="dialogFormEdit = false ,editProduct(tempRow)"
          >Sửa</el-button
        >
      </span>
    </el-dialog>

    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Tên" prop="name"> </el-table-column>
      <el-table-column label="Miêu tả" prop="description"> </el-table-column>
      <el-table-column label="Giá bán" prop="price"> </el-table-column>
      <el-table-column label="Ngày tạo" prop="created_at"> </el-table-column>
      <el-table-column label="Ngày chỉnh sửa" prop="updated_at"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" @click="searchTest(scope.row)" size="mini" placeholder="Tìm kiếm tên sản phẩm" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row),dialogFormEdit=true"
            >Sửa</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="DeleteProduct(scope.row)"
            >Xóa</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
    layout="prev, pager, next"
    :total="50">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      search: "",
      dialogFormVisible: false,
      dialogFormEdit: false,
      tempRow: '',
      form: {
        name: "",
        description: "",
        price: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    addProduct() {
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: {
          name: this.form.name,
          description: this.form.description,
          price: this.form.price
        },
      }).then(() => {
        this.form.name = '';
        this.form.description = '';
        this.form.price = '';
        this.getProducts();
      })
    },
    handleEdit(row) {
      this.tempRow = row.id
    },
    searchTest(row) {
      console.log(row)
    },
    editProduct(row) {
      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/products/'+row,
        data: {
          name: this.form.name,
          description: this.form.description,
          price: this.form.price
        },
      }).then(() => {
        this.form.name = '';
        this.form.description = '';
        this.form.price = '';
        this.getProducts();
      })
    },
    DeleteProduct(row) {
      axios({
        method: 'delete',
        url: 'http://vuecourse.zent.edu.vn/api/products/'+row.id
      }).then(() => {
        this.getProducts();
      })
    },
    getProducts() {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/products",
      })
        .then((response) => {
          this.tableData = response.data.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
</style>