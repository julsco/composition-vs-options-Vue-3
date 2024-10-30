<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>Counter: {{ count }}</h2>
        <h2>Doubled: {{ doubledCount }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
import {useCounter} from "../../assets/composables/useCounter.js";

// Non-reactive property
const title = 'Counter Component'; // This is a static variable

// Use counter composable
const { count, doubledCount, increment } = useCounter();
</script>
