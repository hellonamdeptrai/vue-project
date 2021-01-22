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
export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  },
  methods: {
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
