<template lang="html">
  <div class="post-preview">
    <article class="grow">
      <nuxt-link :to="postLink">
        <div
        class="post-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')', borderRadius: '10px 10px 0 0'}"></div>
      </nuxt-link>
      <div class="post-content">
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      </div>
    </article>
      <button @click="liked" :class="{'animate-like-button': isLiked}" class="like-button">
        <i class="fa fa-heart" :class="{'animate-like': newLike}" aria-hidden="true"></i> {{likeCountTem}}
      </button>
      <modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal = false">
          로그인하지 않아도 표시는 되지만, 카운트되지 않습니다.
          <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
        </span>
      </modal>

  </div>
</template>

<script>


export default {
  name: 'PostPreview',
  data() {
    return {
      isLiked: false,
      newLike: false,
      likeCountTem: this.likeCount,
      showModal: false
    }
  },
  methods: {
    liked() {
      if (localStorage.getItem(this.id)) {
        localStorage.removeItem(this.id)
        this.isLiked = false
        this.newLike = false
        if (localStorage.getItem('token')) {
          this.likeCountTem -= 1
        } 
      } else {
        localStorage.setItem(this.id, true)
        this.isLiked = true
        this.newLike = true
        if (localStorage.getItem('token')) {
          this.likeCountTem += 1
        } else {
          this.showModal =true;
        }
      }
    },
  },
  beforeDestroy() {
    if (this.likeCount != this.likeCountTem) {
      this.$store.dispatch('editPost', {...this.post, likeCount: this.likeCountTem})
    }
  },
  mounted() {
    if (localStorage.getItem(this.id)) {
      this.isLiked = true
      // if (localStorage.getItem('token')) {
      //   return;
      // } else {
      //   this.likeCountTem += 1
      // }
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    likeCount: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    },
  }
}
</script>

<style scoped lang="css">
.post-preview {
  width: 90%;
  margin: 7px;
}

article {
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  border-radius: 10px;
  transition: all .3s ease-in-out;
  position: relative;
  width: 100%;
}



a {
  text-decoration: none;
  color: black;
}

h1 {
  margin: 5px auto;
}

p {
  color: gray;
  margin: 5px auto;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}



.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}


article:hover,
article:active {
  /* box-shadow: 0 0 0 2px #00FFF0; */
  transform: translateY(3px);
}

.like-button {
    line-height: 36px;
    padding: 0 12px;
    display: block;
    border-radius: 4px;
    margin: -10px 20px 0 auto;
    cursor: pointer;
    transition: all 0.3s;
    box-sizing: border-box;
    text-align: center;
    outline: none;
    text-decoration: none;
    background-color: white;
    border: 1px solid #e9f2f9;
    box-shadow: 0 2px 2px #ccc;
    position: relative;
    z-index: 10;
}

.like-button:hover {
	  transform: translateY(-3px);
}

.animate-like-button {
  background: #ed2553;
  border-radius: 3px;
  box-shadow: 0 10px 20px -8px rgb(240, 75, 113);
  border: 1px solid #ed2553;
  color: #ffffff;
  outline: none;
  text-decoration: none;
}

.animate-like {
	animation-name: likeAnimation;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	animation-duration: 0.65s;
  color: #ffffff;
}
@keyframes likeAnimation {
  0%   { transform: scale(20); }
  50% { color: #ed2553;}
  100% { transform: scale(1); }
}

</style>
