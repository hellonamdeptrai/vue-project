<template>
  <div>
    <div class="menu">
      <router-link to="/">Bai 9</router-link> | 
      <router-link to="/bai10-1">Bài 10.1</router-link> | 
      <router-link to="/bai10-2">Bài 10.2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
      //
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    // console.log(1)
    // let hihi = this
    // this.list.filter(function () {
    //   console.log(hihi.test)
    // })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
  font-family: Arial;
}

.menu {
  text-align: center;
  margin-bottom: 10px;
}
/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
