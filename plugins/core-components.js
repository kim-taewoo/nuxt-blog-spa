import Vue from 'vue'

import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton.vue'
import AppControlInput from '@/components/UI/AppControlInput'
import Modal from '@/components/Comment/common/Modal.vue'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)
Vue.component('Modal', Modal)
