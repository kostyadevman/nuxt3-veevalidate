<template>
    <div id="app" class="app">
    <h1>To do list</h1> 

    <div>
        <input type="text" name="todo" placeholder="Напишите задачу.." v-model="title">
        <button type="button" @click="addTodo()">Добавить задачу</button>
    </div>

    <ul class="app__list">
        <li class="task" v-for="todo of todos" :key="todo.id">
        <input 
                type="checkbox" name="task" 
                v-bind:checked="todo.completed" 
                v-on:change="todo.completed = !todo.completed"
                >
        <span>{{todo.title}}</span>
        <button type="button" @click="removeTodo(todo.id)">Удалить задачу</button>
        </li>

    </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      todos: [
              {id: 1, title: 'Сходить в кино', completed: false},
              {id: 2, title: 'Погулять с собакой', completed: true},
              {id: 3, title: 'Встретится с Шерлоком на Бэйкер Стрит', completed: false}
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.title.trim()) {
        const newTodo = {
          id: new Date(),
          title: this.title,
          completed: false
        }
        this.todos.push(newTodo);
        this.title = '';
      }
    },
  
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}  
</script>

<style lang="scss" scoped>
.app {
padding: 20px;
width: 500px;
border: 2px solid red;
border-radius: 20px;

&__list {
    margin: 30px 0 0 20px;
    padding: 0;
    list-style: none;
}
}

.task {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  input:checked {
    ~ span {
      text-decoration: line-through;
    }
    
    ~ button {
        display: none;
    }
  }
  
  span {
    margin-right: auto;
  }
}
</style>