<template>
  <h2>Show Post</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit sunt
    atque commodi laudantium illum doloribus assumenda voluptatibus delectus
    nesciunt!
  </p>

  <pre>
      Params id : {{ id }}
      Params Slug : {{ slug }}
  </pre>
</template>

<script>
export default {
  props:['id', 'slug'],
  data() {
    return {
    };
  },
};
</script>

<style>
</style>