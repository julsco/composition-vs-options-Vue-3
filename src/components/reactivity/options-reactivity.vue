<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>Counter: {{ count }}</h2>
        <h2>Doubled: {{ doubledCount }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Counter Component', // Non-reactive property
            count: 0 // Reactive property
        };
    },
    computed: {
        doubledCount() {
            return this.count * 2;
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    watch: {
        count(newValue) {
            console.log(`Count changed to: ${newValue}`);
        }
    }
};
</script>
