<template>
  <div class="jumbotron my-3">
    <h1 class="display-3">{{ jumMsg }}</h1>
  </div>

  <div class="row">
    <div class="col-md-4" v-for="post in posts" :key="post.id">
      <h3>
        <router-link
          :to="{ name: 'show-post', params: { id: post.id, slug: post.slug } }"
        >
          {{ post.title }}
        </router-link>
      </h3>
      <p class="lead">
        {{ post.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumMsg: "Lear vuejs 3",
      posts: []
    }
  },
  mounted() {
      fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err))
    }
};
</script>

<style>
</style>