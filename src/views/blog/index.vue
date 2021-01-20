<template>
  
  <div class="jumbotron my-3">
    <h1 class="display-3">{{ jumMsg }}</h1>
  </div>

  <div class="row">
    <div class="col-md-12 text-right">
      <router-link to='/blog/new' class="btn btn-primary">New</router-link>
    </div>
  </div>

  <div class="row" v-if="posts.length > 0">
    <div class="col-md-12" v-for="post in posts" :key="post.id">
        <Post :post="post"  />
    </div>
  </div>
  <div class="text-center" v-else>
    <h3>Data Not Found</h3>
  </div>

</template>

<script>
import Post from './Post';
export default {
  components: {
    Post
  },
  data() {
    return {
      jumMsg: "List of Posts",
      posts: [],
      toggle: false
    }
  },
  mounted() {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    DeletedPost(id) {
      this.posts = this.posts.filter(post => this.post !== id);
    }
  }
};
</script>

<style>
</style>