<template>
  <div class="jumbotron my-3">
    <h1 class="display-3">{{ jumMsg }}</h1>
  </div>

  <div class="row">
    <div class="col-md-4" v-for="post in posts" :key="post.id">
      <h3>
        <router-link :to="{ name: 'show-post', params: { id: post.id,  slug: post.slug } }">
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
      posts: [
        {
          userId: 1,
          id: 1,
          slug:"Learn-Angular",
          title: "Learn Angular",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          slug:"Learn-Java",
          title: "Learn Java",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          userId: 1,
          id: 3,
          slug:"Learn-Vuejs",
          title: "Learn VueJS",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
          userId: 1,
          id: 4,
          slug:"Learn-Laravel",
          title: "Learn Laravel",
          body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
        {
          userId: 1,
          id: 5,
          slug:"Learn-SQL",
          title: "Learn SQL SERVER",
          body:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        },
      ],
    };
  },
};
</script>

<style>
</style>