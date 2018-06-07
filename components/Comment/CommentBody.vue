<template lang="html">
  <div class="comments-body">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
  </div>
</template>

<script>
import TodoHeader from './subComponents/TodoHeader.vue'
import TodoInput from './subComponents/TodoInput.vue'
import TodoList from './subComponents/TodoList.vue'

export default {
  data(){
    return {
      todoItems: []
    }
  },
  // created(){
  //   if (localStorage.length >0){
  //     for (var i=0; i<localStorage.length; i++){
  //       this.todoItems.push(localStorage.key(i));
  //     }
  //   }
  // },
  methods: {
    addTodo(todoItem){
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem); //App 컴포넌트의 todoItems 데이터 속성에도 추가.
    },
    removeTodo(todoItem,index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  components:{
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
  }
}
</script>

<style scoped lang="css">
  .comments-body {
      border-top: 3px solid #ccc;
      text-align: center;
      background-color:  #F6F6F8;
      padding: 10px 15px;
  }

</style>
