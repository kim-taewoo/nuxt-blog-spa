<template lang="html">
  <div class="posts-page">
    <section class="search-section">
      <SearchBar v-model="search" />
    </section>
    <PostList :posts="filteredPosts" />
  </div>
</template>

<script>
// import PostList from '@/components/Posts/PostList.vue'
import axios from 'axios'
import SearchBar from '@/components/UI/SearchBar.vue'

export default {
  middleware: 'check-auth',
  components: {
    SearchBar
  },
  data() {
    return{
        search: ''
    }
  },

    // components: {
    //   PostList
    // },
    // fetch(context) {
      // if (context.store.state.loadedPosts.length > 0) {
      //   return null;
      // }
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({
    //         loadedPosts: [
    //           {
    //             id: "1",
    //             title: 'My Post',
    //             previewText: "This is our first Post!",
    //             thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //           },
    //           {
    //             id: "2",
    //             title: 'My Second Post',
    //             previewText: "This is our Second Post!",
    //             thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //           }
    //         ]
    //       })
    //     },1000)
    //     // reject(new Error())
    //   })
    //   .then(data => {
    //     context.store.commit('setPosts', data.loadedPosts)
    //   })
    //   // .then(data => {
    //   //   return data
    //   // })
    //   .catch(e => {
    //     context.error(e);
    //   });
    // },

    created() {
      return axios
        .get(process.env.baseUrl + '/posts.json')
        .then(res => {
          const postsArray =[]
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key})
          }
          this.$store.dispatch('setPosts', postsArray)
        })
        .catch(e => context.error(e));
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
      filteredPosts() {
        return this.loadedPosts.filter(post =>{
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
    // created() {
    //   this.$store.dispatch('setPosts', this.loadedPosts)
    // }
}
</script>

<style scoped lang="css">
.posts-page {
  padding-top: 50px;
}



.search-section {
  padding-top: 20px;
  margin: 0 auto;
  text-align: center;
}



</style>
