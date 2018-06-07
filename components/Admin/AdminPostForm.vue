<template lang="html">
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail" placeholder="jpg등의 확장자로 끝나는 링크를 복붙해주세요.">Thumbnail Link</AppControlInput>
    <!-- <AppControlInput control-type="file">Thumbnail file</AppControlInput> -->
    <AppControlInput
             control-type="textarea"
             v-model="editedPost.content">Content</AppControlInput>
     <AppControlInput
              control-type="textarea"
              v-model="editedPost.previewText">Preview Text</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton
             type="button"
             style="margin-left: 10px"
             btn-style="cancel"
             @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? {...this.post}
        : {
          author: '',
          title: '',
          thumbnail: '',
          content: '',
          previewText: '',
          likeCount: 0,
          comments: 0
        }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
      // console.log(this.editedPost);
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="css">
</style>
