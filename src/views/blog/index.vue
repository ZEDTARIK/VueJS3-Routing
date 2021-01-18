<template>
  <div class="jumbotron my-3">
    <h1 class="display-3">{{jumMsg}}</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumMsg: 'Lear vuejs 3'
    }
  }
};
</script>

<style>
</style>