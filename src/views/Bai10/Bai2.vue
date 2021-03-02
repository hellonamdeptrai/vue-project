<template>
  <div>
    <el-button
      class="addProduct"
      type="primary"
      round
      @click="(dialogFormVisible = true), addNewProduct()"
      >Thêm sản phẩm</el-button
    >
    <el-input
      style="width: 300px"
      @keyup.enter.native="searchTest()"
      placeholder="Tìm kiếm sản phẩm"
      v-model="input"
    ></el-input>

    <el-dialog title="Thêm sản phẩm mới" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form" label-position="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Ảnh" prop="image">
              <input @change="fileImage" type="file" id="file" class="inputfile" />
              <label for="file">
                <img class="imageHover" v-if="url" :src="url" alt="">
                <img v-else src="../../assets/SD-default-image.png" alt="">
              </label>
              <i v-show="buttonCloseCheck" @click="buttonCloseImage" class="el-icon-close buttonClose"></i>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Tên" prop="name">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Miêu tả" prop="description">
              <el-input
                v-model="form.description"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Giá bán" prop="price">
              <el-input
                type="number"
                v-model="form.price"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Thoát</el-button>
        <el-button type="primary" :plain="true" @click="addProduct('form')"
          >Tạo mới</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="Sửa sản phẩm" :visible.sync="dialogFormEdit">
      <el-form :model="form" :rules="rules" ref="form" label-position="top">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Ảnh" prop="image">
              <input @change="fileImage" type="file" id="file" class="inputfile" />
              <label for="file">
                <img class="imageHover" v-if="url" :src="url" alt="">
                <img v-else src="../../assets/SD-default-image.png" alt="">
              </label>
              <i v-show="buttonCloseCheck" @click="buttonCloseImage" class="el-icon-close buttonClose"></i>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Tên" prop="name">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Miêu tả" prop="description">
              <el-input
                v-model="form.description"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Giá bán" prop="price">
              <el-input
                type="number"
                v-model="form.price"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormEdit = false">Thoát</el-button>
        <el-button type="primary" :plain="true" @click="editProduct(tempRow)"
          >Sửa</el-button
        >
      </span>
    </el-dialog>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Tên">
        <template slot-scope="scope">
          <div class="center">
            <el-avatar
              v-if="scope.row.image"
              :src="'http://vuecourse.zent.edu.vn/storage/' + scope.row.image"
            ></el-avatar>
            <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Miêu tả" prop="description"> </el-table-column>
      <el-table-column label="Giá bán">
        <template slot-scope="scope">
          <p>
            {{
              scope.row.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </p>
        </template>
      </el-table-column>
      <el-table-column label="Ngày tạo">
        <template slot-scope="scope">
          <p>{{ formatDate(scope.row.created_at) }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Ngày chỉnh sửa">
        <template slot-scope="scope">
          <p>{{ formatDate(scope.row.updated_at) }}</p>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row), (dialogFormEdit = true)"
            >Sửa</el-button
          >
          <el-button size="mini" type="danger" @click="DeleteProduct(scope.row)"
            >Xóa</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :page-size="5"
      :total="dataPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      buttonCloseCheck: false,
      url: null,
      input: "",
      dataPage: 0,
      tableData: [],
      search: "",
      dialogFormVisible: false,
      dialogFormEdit: false,
      tempRow: "",
      form: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Tên không được để trống",
            trigger: "blur",
          },
          {
            min: 2,
            max: 200,
            message: "Tên phải lớn hơn 2 và bé hơn 200 ký tự",
            trigger: "blur",
          },
        ],
        description: [
          {
            required: true,
            message: "Mô tả không được để trống",
            trigger: "blur",
          },
          {
            min: 2,
            max: 2000,
            message: "Mô tả phải lớn hơn 2 và bé hơn 2000 ký tự",
            trigger: "blur",
          },
        ],
        price: [
          {
            required: true,
            message: "Giá bán không được để trống",
            trigger: "blur",
          },
        ],
        image: [
          {
            required: true,
            message: "Ảnh không được để trống",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    fileImage(e) {
      if (e.target.files.length) {
        let targetfile = e.target.files[0];
        this.form.image = targetfile;
        this.url = URL.createObjectURL(targetfile);
        this.buttonCloseCheck = true
      }
    },
    buttonCloseImage() {
      this.url = null;
      this.form.image = '';
      this.buttonCloseCheck = false;
    },
    addNewProduct() {
      this.form.name = "";
      this.form.description = "";
      this.form.price = "";
      this.url = null;
      this.buttonCloseCheck = false;
    },
    addProduct(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData();
          formData.append("name", this.form.name);
          formData.append("description", this.form.description);
          formData.append("price", this.form.price);
          formData.append("image", this.form.image);

          axios({
            method: "post",
            url: "http://vuecourse.zent.edu.vn/api/products",
            data: formData,
          }).then(() => {
            this.form.name = "";
            this.form.description = "";
            this.form.price = "";
            this.form.image = "";
            this.getProducts();
            this.$message({
              message: "Thêm sản phẩm thành công",
              type: "success",
            });
            this.dialogFormVisible = false;
            this.buttonCloseImage();
          });
        } else {
          this.$message({
            type: "info",
            message: "Xin kiểm tra lại",
          });
          return false;
        }
      });
    },
    handleEdit(row) {
      this.tempRow = row.id;
      this.form.name = row.name;
      this.form.description = row.description;
      this.form.price = row.price;
      this.url = null;
      this.buttonCloseCheck = false;
    },
    searchTest() {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/products",
      }).then((response) => {
        this.tableData = response.data.data.data.filter((product) => {
          return product.name.toLowerCase().match(this.input.toLowerCase());
        });
        if (this.input) {
          this.dataPage = this.tableData.length;
        } else {
          this.dataPage = response.data.data.total;
        }
      });
    },
    editProduct(row) {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      formData.append("price", this.form.price);
      if (this.form.image) {
        formData.append("image", this.form.image);
      }

      axios({
        method: "post",
        url: "http://vuecourse.zent.edu.vn/api/products/" + row,
        data: formData,
      }).then(() => {
        this.form.name = "";
        this.form.description = "";
        this.form.price = "";
        this.form.image = "";
        this.getProducts();
        this.$message({
          message: "Sửa sản phẩm thành công",
          type: "success",
        });
        this.dialogFormEdit = false;
        this.buttonCloseImage();
      });
    },
    DeleteProduct(row) {
      this.$confirm("Bạn có muốn xóa không?", "Cảnh báo", {
        confirmButtonText: "Có",
        cancelButtonText: "Không",
        type: "warning",
        center: true,
      })
        .then(() => {
          axios({
            method: "delete",
            url: "http://vuecourse.zent.edu.vn/api/products/" + row.id,
          }).then(() => {
            this.getProducts();
            this.$message({
              type: "success",
              message: "Xóa thành công",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Xóa thất bại",
          });
        });
    },
    handleSizeChange(val) {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/products?page=" + val,
      }).then((response) => {
        this.tableData = response.data.data.data;
      });
    },
    handleCurrentChange(val) {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/products?page=" + val,
      }).then((response) => {
        this.tableData = response.data.data.data;
      });
    },
    formatDate(dateString) {
      return moment(dateString).format("HH:mm | DD/MM/YYYY");
    },
    getProducts() {
      axios({
        method: "get",
        url: "http://vuecourse.zent.edu.vn/api/products",
      })
        .then((response) => {
          this.tableData = response.data.data.data;
          this.dataPage = response.data.data.total;
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
.addProduct {
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}

.center {
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}

.page {
  margin: 10px;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: contents;
  cursor: pointer;
  img {
    width: 100%;
    transition: .5s;
  }
  .imageHover:hover {
    filter: grayscale(100%);
  }
}

.buttonClose {
  position: absolute;
      top: 0;
      right: 0;
      font-size: 30px;
      cursor: pointer;
}
</style>