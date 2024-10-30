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

<script>
export default {
    data() {
        return {
            user: null,
            posts: [],
            userLoading: true,
            postsLoading: true,
            userError: null,
            postsError: null
        };
    },
    created() {
        this.fetchUser();
        this.fetchPosts();
    },
    methods: {
        async fetchUser() {
            try {
                this.userLoading = true;
                const response = await fetch('https://api.example.com/user');
                if (!response.ok) throw new Error('Failed to load user data');
                this.user = await response.json();
            } catch (error) {
                this.userError = error.message;
            } finally {
                this.userLoading = false;
            }
        },
        async fetchPosts() {
            try {
                this.postsLoading = true;
                const response = await fetch('https://api.example.com/posts');
                if (!response.ok) throw new Error('Failed to load posts');
                this.posts = await response.json();
            } catch (error) {
                this.postsError = error.message;
            } finally {
                this.postsLoading = false;
            }
        }
    }
};
</script>
