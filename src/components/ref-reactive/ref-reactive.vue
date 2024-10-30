<template>
    ref vs reactive
</template>

<script setup>

// ref is used to create a reactive primitive value (like numbers, strings, booleans)
// or a single reference to an object or array.
import { ref } from 'vue';

const count = ref(0);  // count is now reactive
count.value++;         // Access and update with .value
console.log(count.value); // Logs the updated value

// reactive is used to make an entire object or array reactive.
import { reactive } from 'vue';

const person = reactive({ name: 'Alice', age: 25 });
person.name = 'Bob'; // Direct access and modification, no .value needed
person.age++;        // Reactive update directly on the object


// combining ref and reactive
const state = ref({
    count: 0,
    person: reactive({
        name: 'Alice',
        age: 30
    })
});


</script>