<template>
  <div class="row my-5">
    <div class="col-md-6 mx-auto">
      <div class="card">
        <h4 class="card-header">Edit Post</h4>
        <div class="card-body">
          <form @submit.prevent="onUpdatePost()" class="form-horizontal">
            <div class="form-group row">
              <label for="Title">Title:</label>
              <input
                v-model="post.title"
                type="text"
                class="form-control"
                id="Title"
                placeholder="Title"
              />
            </div>

            <div class="form-group row">
              <label for="Body">Body:</label>
              <textarea
                v-model="post.body"
                class="form-control"
                id="Body"
                cols="5"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-warning btn-block">
              Updated
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: `http://localhost:3000/posts/${this.id}`,
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    onUpdatePost() {
      fetch(this.url, {
        method: 'PUT',
         headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(this.post),
      })
        .then(() => this.$router.push("/blog"))
        .catch((err) => err.message);
    },
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>