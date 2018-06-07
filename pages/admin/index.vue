<template lang="html">
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton style="margin-left: 10px;" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList
        :isAdmin="true"
        :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
// import PostList from '@/components/Posts/PostList.vue'
// import AppButton from '@/components/UI/AppButton.vue'
export default {
  layout: 'default',
  //middleware 순서 중요!
  middleware: ['check-auth','auth'],
  // components: {
  //   PostList,
  //   AppButton
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.$router.push("/admin/auth");
    }
  }
}
</script>

<style scoped lang="css">
.admin-page {
  padding: 20px;
  padding-top: 50px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
