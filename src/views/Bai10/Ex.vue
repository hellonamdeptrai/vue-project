<template>
  <div>
      <input  @change="fileImage" type="file"
        >
        <el-button type="primary" @click="onSubmit">Create</el-button>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    fileImage(e) {
      if (e.target.files.length) {
        this.image = e.target.files[0];
      }
    },
    onSubmit() {
      const formData = new FormData();
      formData.append("name", "Nam dep trai");
      formData.append("price", 9867);
      formData.append("image", this.image);

      axios({
        method: "post",
        url: "http://vuecourse.zent.edu.vn/api/products",
        data: formData,
      }).then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>