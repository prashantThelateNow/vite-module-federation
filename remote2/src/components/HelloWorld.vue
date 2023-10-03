<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div className="w-full h-screen flex flex-col justify-center items-center">
    <h1 className="text-2xl mb-6">{{ msg }}</h1>
    <div className="text-2xl font-semibold">{{ count }}</div>
    <div className="flex gap-2 mt-2">
      <button
        className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 text-sm"
        @click="count++"
      >
        Increase
      </button>
      <button
        className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600 text-sm"
        @click="count--"
      >
        Decrease
      </button>
    </div>
  </div>
</template>

<style scoped></style>
