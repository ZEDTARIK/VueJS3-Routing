<template>
  <h2>Show Post</h2>
  <div class="card" v-if="post">
    <div class="card-body">
      <h4 class="card-title">{{ post.title }}</h4>
      <p class="card-text">{{ post.body }}</p>
    </div>
  </div>

  <div class="text-center" v-else>Loading ....</div>
</template>

<script>
export default {
  props: ["id", "slug"],
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/posts/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>