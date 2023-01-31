<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CommentItem from '../components/Comment/CommentItem.vue';
import { getLastComments } from '@/services/comment.js';

export default {
  name: 'LastPage',
  components: { CommentItem },
  setup() {
    getLastComments();
    const store = useStore();
    const comments = computed(() => store.state.comments);
    return {
      comments,
    };
  },
};
</script>

<template>
  <section class="m-3">
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      :allow-replay="false"
    />
  </section>
</template>
