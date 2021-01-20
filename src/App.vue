<template>
  <Navbar />

  <div class="container">
    <div class="row">
      <div class="col-md-10 mx-auto my-2">
        <button @click="previous()" class="btn btn-success btn-sm">Previous</button>
        <button @click="redirect()" class="btn btn-primary btn-sm">Redirect</button>
        <button @click="next()" class="btn btn-warning btn-sm">Next</button>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
  methods: {
    previous() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.push("/");
    },
    next() {
      this.$router.go(1);
    },
  },
};
</script>


<style>
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