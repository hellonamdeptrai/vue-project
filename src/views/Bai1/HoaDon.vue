<template>
  <BaseLayout>
    <template v-slot:header>
      <h3>Quản lý hóa đơn</h3>
    </template>
    <template v-slot:main>
      <el-calendar v-model="value">
      </el-calendar>
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
      value: new Date()
    }
  }
}
</script>

<style scoped>
*{
  font-family: Calibri;
}
</style>
