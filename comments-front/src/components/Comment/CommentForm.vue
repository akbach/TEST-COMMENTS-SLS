<script>
import { useRoute } from 'vue-router';

import { computed } from 'vue';
import { useStore } from 'vuex';
import { saveComment } from '@/services/comment.js';

export default {
  props: ['parent', 'onSave'],
  setup() {
    const store = useStore();
    const route = useRoute();
    const postId = route.params.postId;
    const user = computed(() => store.state.user);

    return {
      user,
      postId,
      store,
    };
  },
  data: () => {
    return {
      body: '',
    };
  },
  methods: {
    async submitMessage(event) {
      event.preventDefault();
      const newComment = await saveComment(this.body, this.postId, this.parent);
      this.store.commit('ADD_COMMENT', newComment);
      if (this.onSave) {
        this.onSave();
      }
      this.body = '';
    },
  },
};
</script>

<template>
  <form
    v-if="user && user.name"
    class="w-full px-3 mb-2 mt-6"
    @submit="submitMessage"
  >
    <textarea
      v-model="body"
      class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
      name="body"
      placeholder="Type Your Comment"
      required
    />

    <div class="w-full flex justify-end px-3 my-3">
      <input
        type="submit"
        class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 text-lg"
        value="Post Comment"
      />
    </div>
  </form>
</template>
