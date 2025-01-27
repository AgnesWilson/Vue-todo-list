<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todos.ts';

const props = defineProps({
  id: { type: Number, required: true },
  todoText: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

const emit = defineEmits(['taskCompleted']);

const todoStore = useTodosStore();

const isDone = ref(props.complete);

function toggleCompletedState() {
  isDone.value = !isDone.value;

  if (isDone.value) {
    emit('taskCompleted');
  }

  todoStore.toggleTodoState(props.id, isDone.value);
}
</script>

<template>
  <div :class="{ completed: isDone }" class="grid grid-cols-2 gap-2 todo-wrapper">
    <div>{{ todoText }}</div>
    <div>
      <button class="check-btn" @click="toggleCompletedState">
        <span v-if="isDone" class="material-symbols-outlined checked">check_box</span>
        <span v-if="!isDone" class="material-symbols-outlined">check_box_outline_blank</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

  .todo-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .material-symbols-outlined:hover {
    font-weight: 600;
  }


  .completed {
    text-decoration: line-through;
  }

  .checked {
    color: green;
  }


</style>
