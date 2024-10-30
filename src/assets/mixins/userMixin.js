export const userMixin = {
    data() {
        return {
            user: null,
            userLoading: true,
            userError: null
        };
    },
    methods: {
        async fetchUser() {
            this.userLoading = true;
            try {
                const response = await fetch('https://api.example.com/user');
                if (!response.ok) throw new Error('Failed to load user data');
                this.user = await response.json();
            } catch (error) {
                this.userError = error.message;
            } finally {
                this.userLoading = false;
            }
        }
    },
    mounted() {
        this.fetchUser();
    }
};
