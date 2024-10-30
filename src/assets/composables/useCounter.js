// useCounter.js
import { ref, computed, watch } from 'vue';

export function useCounter() {
    const count = ref(0); // Reactive property

    // Computed property
    const doubledCount = computed(() => count.value * 2);

    // Method to increment the counter
    const increment = () => {
        count.value++; // Incrementing the reactive count
    };

    // Watcher to log changes
    watch(count, (newValue) => {
        console.log(`Count changed to: ${newValue}`); // Watcher for logging
    });

    return { count, doubledCount, increment };
}
