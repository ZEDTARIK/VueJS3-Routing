<template>
  
  <div class="row my-5">
    <div class="col-md-6 mx-auto">
        <div class="card">
          <h4 class="card-header">New Post</h4>
          <div class="card-body">
            
            <form @submit.prevent="onSubmit()" class="form-horizontal">

              <div class="form-group row">
                <label for="Title">Title:</label>
                <input type="text" class="form-control" id="Title" placeholder="Title">
              </div>

              <div class="form-group row">
                <label for="Body">Body:</label>
                <textarea class="form-control" id="Body" cols="5" rows="3"></textarea>
              </div>

              <button class="btn btn-success  btn-block">Submit</button>

            </form>

          </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
methods: {
  onSubmit() {
    
  }
}
}
</script>

<style>

</style>