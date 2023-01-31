<script>
import CommentForm from '@/components/Comment/CommentForm.vue';
import UserInfo from '@/components/User/UserInfo.vue';
export default {
  name: 'CommentItem',
  components: { UserInfo, CommentForm },
  props: ['comment', 'allowReplay'],
  data: () => {
    return {
      isReplayVisible: false,
    };
  },
  computed: {
    margin() {
      const level = this.comment.id.split('#').length;
      return (this.allowReplay && level) > 1 ? `ml-[${level * 20}px]` : '';
    },
  },
  methods: {
    switchReplay() {
      this.isReplayVisible = !this.isReplayVisible;
    },
    onSave() {
      this.isReplayVisible = false;
    },
  },
};
</script>

<template>
  <article class="border rounded-md mt-3" :class="{ [margin]: true }">
    <div class="p-3">
      <UserInfo :user="comment.user" />
      <p class="text-gray-600 mt-2">
        <span class="text-sm text-gray-400 font-normal">
          <time :datetime="comment.createdAt" :title="comment.createdAt">
            {{ comment.createdAt }}
          </time>
        </span>
        <br />
        {{ comment.body }}
      </p>
      <div v-if="allowReplay">
        <button class="text-right text-blue-500" @click="switchReplay">
          Reply
        </button>
        <CommentForm
          v-if="isReplayVisible"
          :parent="comment.id"
          :on-save="onSave"
        />
      </div>
    </div>
  </article>
</template>
