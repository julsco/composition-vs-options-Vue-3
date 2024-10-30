<template>
    <div>
        <div v-if="userLoading">Loading User...</div>
        <div v-else-if="userError">Error loading user: {{ userError }}</div>
        <div v-else>
            <p>User: {{ user.name }}</p>
        </div>
        
        <div v-if="postsLoading">Loading Posts...</div>
        <div v-else-if="postsError">Error loading posts: {{ postsError }}</div>
        <div v-else>
            <p>Posts:</p>
            <ul>
                <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// User state and API logic
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

// Posts state and API logic
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

// Lifecycle hooks to fetch data when component mounts
onMounted(() => {
    fetchUser();
    fetchPosts();
});
</script>
