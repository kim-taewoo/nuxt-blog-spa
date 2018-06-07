<template>
<div class="sidenav-container">
  <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
        <h2 class="footer-title">C<span style="color:red">o</span>ntact </h2>
        <div class="contacts-wrap">
          <div class="contacts">
            <a href="https://www.facebook.com/profile.php?id=100009269043820">
              <i class="fa fa-facebook-square grow"></i>
            </a>
            <p class="contact-name">Facebook</p>
          </div>
          <div class="contacts">
            <a>
              <i class="fa fa-google grow" @click="contact = 'Email'"></i>
            </a>
            <p class="contact-name">Email</p>
          </div>
          <div class="contacts">
            <a>
              <i class="fa fa-mobile grow" @click="contact = 'Phone'"></i>
            </a>
            <p class="contact-name">Phone</p>
          </div>
          <div class="contacts">
            <a href="https://github.com/kim-taewoo">
              <i class="fa fa-github grow"></i>
            </a>
            <p class="contact-name">Github</p>
          </div>
        </div>
        <transition name="slide-contact" mode="out-in">
          <div v-if="contact == 'Phone'" class="contact-content" key="phone">010-6678-6461</div>
          <div v-if="contact == 'Email'" class="contact-content" key="email">acoustic0419@gmail.com</div>
        </transition>
        <p></p>
    </div>
  </transition>
</div>
</template>

<script>

export default {
  name: "TheSidenav",
  data() {
    return {
      contact: ""
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
}

@font-face {
  font-family: Adam;
  src: url("~assets/fonts/adam-cg-pro.regular.otf") format("opentype");
}

.footer-title {
  position: absolute;
  color: white;
  top: -45px;
  font-size: 60px;
  margin: 0;
  font-family: Adam;
}

.sidenav {
  height: 35vh;
  width: 100%;
  background-color: dimgray;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  margin-left: 40px;
  border-radius: 30px 30px 0 0;
}

@media (min-width: 768px) {
  .sidenav {
    width: 700px;
    right:0;
    left: auto;
    margin-right: -50px;
  }
}


.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateY(200%);
}

.slide-contact-enter-active,
.slide-contact-leave-active {
  transition: all .5s ease-out;
}
.slide-contact-enter,
.slide-contact-leave-to {
  transform: translateX(100%);
  opacity: 0;
}


.contacts-wrap {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 15px;
}

.contacts {
  color: white;
  display: inline-block;
  width: 25%;
  margin: 10px auto;
  text-align: center;
}

.contact-name{
  margin: 0;
}

.contacts a {
  color: inherit;
}

.contact-content {
  text-align: center;
  background-color: #0074D9;
  color: white;
  border-radius: 8px 0 0 8px;
}

.fa {
  font-size: 40px;
  cursor: pointer;
}

.grow {  transition: all .4s ease-in-out;}

.fa-facebook-square:hover,
.fa-facebook-square:active {
  color:rgb(59,89,152);
  transform: scale(0.9);
  transform: rotate(20deg);
}

.fa-google:hover,
.fa-google:active {
  color:#FF851B;
  transform: scale(0.9);
  transform: rotate(20deg);
}

.fa-mobile:hover,
.fa-mobile:active {
  color:#39CCCC;
  transform: scale(0.9);
  transform: rotate(20deg);
}

.fa-github:hover,
.fa-github:active {
  color:#FFDC00;
  transform: scale(0.9);
  transform: rotate(20deg);
}
</style>
