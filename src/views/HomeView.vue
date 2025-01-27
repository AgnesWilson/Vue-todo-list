<script setup lang="ts">
import { ref } from 'vue';

import SingleTodo from '@/components/SingleTodo.vue';
import { useTodosStore } from '@/stores/todos.ts';
import { storeToRefs } from 'pinia';

const todoStore = useTodosStore();
const { todos } = storeToRefs(todoStore);

const todoName = ref('');
const showCompletedMessage = ref(false);

function addTodo() {
  todoStore.addNewTodo(todoName.value, false);
}

function onTaskCompleted() {
  showCompletedMessage.value = true;
  setTimeout(clearMessage, 2000);
}

function clearMessage() {
  showCompletedMessage.value = false;
}
</script>

<template>
  <main>
    <div class="my-8">

      <div v-if="todos.length > 0" v-for="(todo, index) in todos" :key="index">
        <SingleTodo :todo-text="todo.text" :complete="todo.complete" :id="todo.id" @task-completed="onTaskCompleted" />
      </div>

      <p v-if="todos.length === 0">Du är klar med alla uppgifter!</p>

    </div>
    <div class="input-wrapper">
      <input type="text" v-model="todoName" @keyup.enter="addTodo" />
      <button @click="addTodo" class="text button">Lägg till</button>
    </div>
  </main>

  <p v-if="showCompletedMessage">Snyggt jobbat med att göra klart en uppgift!</p>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

  main, p {
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
  }

  .button {
    font-size: 1em;
    background-color: $detail-color;

    padding-inline: 10px;
    padding-block: 5px;
    margin-left: 10px
  }

  p {
    font-size: 1rem;
    padding-inline: 80px;
  }

</style>
