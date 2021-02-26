<template>
  <BaseLayout>
    <template v-slot:header>
      <h3>Tổng quát</h3>
    </template>
    <template v-slot:main>
      <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="Id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="date"
            label="Date"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Name"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Address">
        </el-table-column>
        <el-table-column
            label="Hành động">
            <template v-slot:default="scope" >
                <el-button @click="deleteProduct(scope.$index)" type="danger" icon="el-icon-delete" circle></el-button>
            </template>
        </el-table-column>
      </el-table>

      <el-pagination
          background
          layout="total,prev, pager, next,jumper"
          :total="50"
          style="float: right;margin-top: 10px">
      </el-pagination>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import { mapState,mapMutations } from 'vuex'

export default {
  components: {
    BaseLayout
  },
  computed: {
      ...mapState('product', [
        'tableData'
      ]),
    },
  methods: {
    ...mapMutations('product',[
        'deleteProduct'
      ]),
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    }
  },
}
</script>

<style scoped>
*{
  font-family: Calibri;
}
</style>
