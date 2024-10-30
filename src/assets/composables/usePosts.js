import { ref, onMounted } from 'vue';

export function usePosts() {
    const posts = ref([]);
    const postsLoading = ref(true);
    const postsError = ref(null);

    const fetchPosts = async () => {
        postsLoading.value = true;
        try {
            const response = await fetch('https://api.example.com/posts');
            if (!response.ok) throw new Error('Failed to load posts');
            posts.value = await response.json();
        } catch (error) {
            postsError.value = error.message;
        } finally {
            postsLoading.value = false;
        }
    };

    onMounted(fetchPosts);

    return { posts, postsLoading, postsError };
}
