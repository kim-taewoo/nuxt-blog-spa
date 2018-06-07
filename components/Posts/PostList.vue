<template lang="html">
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :post="post"
      :likeCount="post.likeCount"
      :comments="post.comments"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped lang="css">
.post-list {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
