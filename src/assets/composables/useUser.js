import { ref, onMounted } from 'vue';

export function useUser() {
    const user = ref(null);
    const userLoading = ref(true);
    const userError = ref(null);

    const fetchUser = async () => {
        userLoading.value = true;
        try {
            const response = await fetch('https://api.example.com/user');
            if (!response.ok) throw new Error('Failed to load user data');
            user.value = await response.json();
        } catch (error) {
            userError.value = error.message;
        } finally {
            userLoading.value = false;
        }
    };

    onMounted(fetchUser);

    return { user, userLoading, userError };
}
