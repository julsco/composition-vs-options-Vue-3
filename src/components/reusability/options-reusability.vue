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
import {userMixin} from "../../assets/mixins/userMixin.js";
import {postsMixin} from "../../assets/mixins/postsMixin.js";

export default {
    mixins: [userMixin, postsMixin]
};
</script>
