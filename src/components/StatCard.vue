<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <p :class="`text-3xl font-semibold text-${color}-500 mt-2`">{{ value }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'blue',
    },
  });
  </script>