<template>
  <div class="home-page">
    <section class="intro">
      <div class="intro-content">
        <h1 v-show="isZoomIn" :class="['animated', {'zoomIn':isZoomIn}]">WELCOME</h1>
        <p v-show="isFadeInUp" :class="['animated', {'fadeInUp':isFadeInUp}]">My name is Taewoo Kim</p>
        <nuxt-link to="/about">
          <i v-show="isBounce" class="fa fa-angle-double-down animated bounce infinite"></i>
        </nuxt-link>
      </div>
      <div id="overlay" class="animated fadeInDown"></div>
    </section>
    <!-- <PostList :posts="loadedPosts" /> -->
    <div v-if="scrollDiv" style="background-color:red;" class="about-me">
      Hello there
    </div>
  </div>
</template>

<script type="text/javascript">
  // import PostList from '@/components/Posts/PostList'
  export default {
    data() {
      return {
        isZoomIn: false,
        isFadeInUp: false,
        isBounce:false,
        scrollDiv: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.isZoomIn = true
        setTimeout(() => {
          this.isFadeInUp = true
          setTimeout(()=>{
            this.isBounce=true
          },1000)
        },1000)
      },1000)
    },
    // methods: {
    //   handleScroll(event) {
    //     if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    //       this.scrollDiv = true
    //     }
    //   }
    // },
    // created() {
    //   window.addEventListener('scroll',this.handleScroll);
    // },
    // destroyed() {
    //   window.removeEventListener('scroll', this.handleScroll)
    // }

    // components: {
    //   PostList
    // },
    // computed: {
    //   loadedPosts() {
    //     return this.$store.getters.loadedPosts
    //   }
    // }
    // asyncData(context, callback) {
    //   setTimeout(() => {
    //     callback(null, {
    //       loadedPosts: [
    //         {
    //           id: "1",
    //           title: 'My Post',
    //           previewText: "This is our first Post!",
    //           thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //         },
    //         {
    //           id: "2",
    //           title: 'My Second Post',
    //           previewText: "This is our Second Post!",
    //           thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //         }
    //       ]
    //     })
    //   },1000)
    // }
    // data() {
    //   return{
    //     loadedPosts: []
    //   };
    // },
    // created() {
    //   setTimeout(()=> {
    //     this.loadedPosts = [
    //       {
    //         id: "1",
    //         title: 'My Post',
    //         previewText: "This is our first Post!",
    //         thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //       },
    //       {
    //         id: "2",
    //         title: 'My Second Post',
    //         previewText: "This is our Second Post!",
    //         thumbnail: 'http://nerdcrumble.com/wp-content/uploads/2017/04/best-tech-sites.jpg'
    //       }
    //     ]
    //   },1000)
    // }
  }
</script>


<style scoped>

.home-page{
  position: relative;
}
.intro {
  height: 100vh;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro-content{
  position: absolute;
  text-align: center;
  top: 12%;
  left: 5%;
  width: 90%;
  margin: 0 auto;
  font-size: 3em;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  z-index: 10;
  line-height: 1em;
  user-select: none;
}

.intro-content p {
  font-weight: 400;
  font-family: "Dosis"
}

.intro-content a {
  cursor: pointer;
  text-decoration: none;
  color: #f0f0f0;
}



#overlay {
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background:rgba(33,125,187,0.65);
  z-index:1
}

@media (min-width: 768px) {
  .intro-content {
    font-size: 4em;
    text-align: center;
  }
}




</style>
