<template lang="html">
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type Comments" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        댓글을 입력하세요.
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>

  </div>
</template>

<script>
  import Modal from '../common/Modal.vue'

  export default {
    data(){
      return{
        newTodoItem:'',
        showModal: false
      }
    },
    methods:{
      addTodo(){
        if (this.newTodoItem !== ""){
          var value = this.newTodoItem && this.newTodoItem.trim();
          this.$emit('addTodo', value);
          //localStorage.setItem(value,value);
          //로컬 스토리지에 setItem() API를 이용하여 저장. 이 API 는 로컬 스토리지에 데이터를 추가하는 API 이며, 키, 값형태이고 여기선 저장 기능을 단순하게 하기 위해 키와 값 모두 입력받은 텍스트로 지정.
          this.clearInput();
        }  else {
          this.showModal = !this.showModal;
        }
      },
      clearInput(){
        this.newTodoItem = '';
      }
    },
    components:{
      Modal: Modal
    }
  }
</script>

<style scoped>
  input:focus{
    outline:none;
  }

  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }

  shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
  }

  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius:5px;
  }
  .inputBox input {
    border-style:none;
    font-size:0.9rem;
  }
  .addContainer{
    float:right;
    background:linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  .addBtn{
    color:white;
    vertical-align: middle;
  }
  .closeModalBtn{
    cursor: pointer;
  }


</style>
