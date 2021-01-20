<template>
  
  <div class="row my-5">
    <div class="col-md-6 mx-auto">
        <div class="card">
          <h4 class="card-header">New Post</h4>
          <div class="card-body">
            
            <form @submit.prevent="onSubmit()" class="form-horizontal">

              <div class="form-group row">
                <label for="Title">Title:</label>
                <input v-model="title" type="text" class="form-control" id="Title" placeholder="Title">
              </div>

              <div class="form-group row">
                <label for="Body">Body:</label>
                <textarea v-model="body" class="form-control" id="Body" cols="5" rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-success  btn-block">Submit</button>

            </form>

          </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
methods: {
  onSubmit() {
    let post = {
        id: Math.floor(Math.random(56)*74),
        title: this.title,
        slug: this.title.split(' ').join('-'), // replace space with -
        body: this.body
      }

   fetch('http://localhost:3000/posts', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body : JSON.stringify(post)
    }
    )
    .then(()=> this.$router.push('/blog') )
    .catch(err => console.log(err))
  }
}
}
</script>

<style>

</style>