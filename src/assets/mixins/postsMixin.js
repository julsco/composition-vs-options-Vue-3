export const postsMixin = {
    data() {
        return {
            posts: [],
            postsLoading: true,
            postsError: null
        };
    },
    methods: {
        async fetchPosts() {
            this.postsLoading = true;
            try {
                const response = await fetch('https://api.example.com/posts');
                if (!response.ok) throw new Error('Failed to load posts');
                this.posts = await response.json();
            } catch (error) {
                this.postsError = error.message;
            } finally {
                this.postsLoading = false;
            }
        }
    },
    mounted() {
        this.fetchPosts();
    }
};
