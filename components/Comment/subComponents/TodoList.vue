<template lang="html">
	<section>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow"> <!-- //:key="todoItem" 은 유일하게 구분되는 값을 넣기 위해 설정. 꼭 애니메이션을 넣지 않더라도 v-for 디렉티브를 쓸 때 :key 속성은 지정해주는 것이 좋다. 뷰는 돔에서 아이템 순서 조정하지 않고 프레임워크 내부적으로 순서를 제어하기 때문에 나중에 구분,탐색을 위해서라도..-->
				<i class="checkBtn fa fa-check" aria-hidden="true"></i>
				 {{todoItem}}
				<span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
					<i class="fa fa-trash-o" aria-hidden="true"></i>
				</span>
			</li>
		</transition-group>
	</section>
</template>

<script>
export default {
  props: ['propsdata'],
	// data(){
	// 	return{
	// 		todoItems: []
	// 	}
	// },
	// created(){
	// 	if (localStorage.length >0){
	// 		for (var i=0; i<localStorage.length; i++){
	// 			this.todoItems.push(localStorage.key(i));
	// 		}
	// 	}
	// },
	methods: {
		removeTodo(todoItem,index){
			this.$emit('removeTodo', todoItem, index);
			// localStorage.removeItem(todoItem);
			// this.todoItems.splice(index,1);
		}
	}
}
</script>

<style scoped lang="css">
	.list-item {
		display: inline-block;
		margin-left: 10px;
	}
	.list-move {
		transition: transform 1s;
	}
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}
	.list-enter, .list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
	/*위와 같은 규칙은 뷰 프레임워크 내부적으로 정의되어 있다. 더 알고 싶다면 https://vuejs.org/v2/guide/transitions,/transition-Classes 참고*/
	ul {
		list-style-type:none;
		padding-left:0px;
		margin-top:0;
		text-align:left;
	}

	li {
		display:flex;
		min-height:50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}

	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-right: 5px;
	}

	.removeBtn {
		margin-left: auto;
		color: #de4343;
		cursor: pointer;
	}

</style>
