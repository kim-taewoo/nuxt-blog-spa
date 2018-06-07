<template lang="html">
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on {{loadedPost.updatedDate | date}}</div>
        <div class="post-detail">Written by {{loadedPost.author}}</div>
      </div>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post via comments or by sending me a mail to <br><i style="color:red;">acoustic0419@gmail.com</i></a></p>
    </section>
    <section class="post-comments">
      <CommentBody />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import CommentBody from '@/components/Comment/CommentBody.vue'

export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return axios.get(process.env.baseUrl + '/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
  },
  transition: {
      name: 'bounce',
      mode: 'out-in'
  },
  components: {
    CommentBody
  }
  // computed: {
  //   parseDate() {
  //     return this.loadedPost.updatedDate.slice(0, 10)
  //   }
  // }
}
</script>

<style scoped lang="css">
.single-post-page {
  padding: 30px;
  padding-top: 50px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback p {
  color: dimgray;
}



</style>
