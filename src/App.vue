<template>
  <!-- <About/> -->
  <router-view/>
</template>

<script>
// import About from "./views/Ex01"

export default {
  components: {
    // About
  },
  data() {
    return {
      // list: [1, 2, 3, 4, 5, 6],
      // test: 'a'
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
}
</style>
