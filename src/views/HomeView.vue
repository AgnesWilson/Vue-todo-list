<script setup lang="ts">
import { ref, computed } from 'vue';

import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);
const showAllTasksCompletedMessage = ref(false);

function addTodo() {
  todoStore.addNewTodo(todoName.value, false);
  todoName.value = '';
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 2000);

  checkAllTasksCompleted();
}

function clearMessage() {
  showCompletedMessage.value = false;
}

const allTodosCompleted = computed(() => todos.value.length > 0 && todos.value.every(todo => todo.complete));

function checkAllTasksCompleted() {
  if (allTodosCompleted.value) {
    showAllTasksCompletedMessage.value = true;
  }
}


</script>

<template>
  <main>
    <div class="my-8">

      <div v-if="todos.length > 0"></div>
      <div v-for="(todo, index) in todos" :key="index">
        <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" @task-completed="onTaskCompleted" />
      </div>

      <p class="msg" v-if="todos.length === 0">Det finns inga uppgifter i din lista ännu</p>

    </div>
    <div class="input-wrapper">
      <input type="text" v-model="todoName" @keyup.enter="addTodo" />
      <button @click="addTodo" class="text button">Lägg till</button>
    </div>
  </main>

  <p class="msg" v-if="showCompletedMessage">Snyggt jobbat med att göra klart en uppgift!</p>

  <p class="msg" v-if="allTodosCompleted">Du är klar med alla uppgifter!</p>

</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

  main, .msg {
    background-color: $second-detail-color;

    margin-top: 60px;
    margin-right: 90px;
    margin-left: 90px;

    padding-inline: 120px;
    padding-block: 50px;

    border-style: dotted;
    border-color: $detail-color;
  }

  .input-wrapper {
    padding-top: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    font-size: 1em;
    background-color: $detail-color;

    padding-inline: 10px;
    padding-block: 5px;
    margin-left: 10px
  }

  .msg {
    padding-inline: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
