<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SocialAuth from '../components/Auth/SocialAuth.vue';
import CommentItem from '../components/Comment/CommentItem.vue';
import CommentForm from '../components/Comment/CommentForm.vue';
import { getCommentsByPostId } from '../services/comment';
import { useRoute } from 'vue-router';

export default {
  name: 'PostPage',
  components: { CommentItem, CommentForm, SocialAuth },
  setup() {
    const route = useRoute();
    const postId = route.params.postId;
    getCommentsByPostId(postId);
    const store = useStore();
    const comments = computed(() => store.getters.commentsSorted);
    return {
      comments,
    };
  },
};
</script>

<template>
  <section class="m-3">
    <SocialAuth />
    <CommentForm :rows="6" :placeholder="'Write a comment...'" />
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :allow-replay="true"
    />
  </section>
</template>
