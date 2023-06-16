<template>
  
  <div>
  <!-- <todo v-for="(todo, index) in todos" :key="index" :todo="todo" /> -->
  <div v-for="(todo, index) in todos" :key="index" >{{todo.title}}</div>
  <input type = "text" v-model="newTodoItem"/>
  <button @click="addNewTodoItem">Submit</button>
  </div>
</template>

<script>
// import Todo from "../components/Todo.vue"
export default {
  // components: {Todo},
  data(){
    return{
      newTodoItem: ""
    }
  },

  computed: {
    todos(){
      return this.$store.state.todos
    }
  },
  methods: {
  addNewTodoItem(){
    this.$store.dispatch("addNewTodo", this.newTodoItem)
    this.newTodoItem= ""
  }
}
}
</script>

<style>

</style>