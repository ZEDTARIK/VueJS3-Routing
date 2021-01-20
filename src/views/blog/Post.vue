<template>
  <h3 @click="toggle = !toggle">{{ post.title }}</h3>
      <p class="lead" v-if="toggle">
        {{ post.body }}
      </p>

      <div class="my-3">
        <router-link
          :to="{ name: 'show-post', params: { id: post.id} }"
          class="btn btn-sm btn-info">
          Show
        </router-link>
        <router-link :to="{name: 'edit-post', params: { id: post.id }}" class="btn btn-sm btn-warning ml-3">Update</router-link>
        <button class="btn btn-sm btn-danger ml-3" @click="onDelete()">Delete</button>
      </div>

</template>

<script>
export default {
    props: ['post'],
    data() {
        return {
            toggle: false
        }
    },
    methods: {
        onDelete() {
           fetch(`http://localhost:3000/posts/${this.post.id}` , { method: 'DELETE'})
            .then(()=> this.$emit('deletedPost',this.post.id)) 
            .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>