<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import FacebookAuth from './FacebookAuth.vue';
import GoogleAuth from './GoogleAuth.vue';
import { userLogout } from '@/services/auth.js';
import UserInfo from '@/components/User/UserInfo.vue';

export default {
  name: 'SocialAuth',
  components: {
    UserInfo,
    FacebookAuth,
    GoogleAuth,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const logout = () => {
      userLogout();
    };
    return {
      user,
      logout,
    };
  },
};
</script>

<template>
  <div>
    <div
      v-if="!user || !user.name"
      class="pl-6 flex justify-center items-center flex-wrap space-x-2"
    >
      <FacebookAuth />
      <GoogleAuth />
    </div>

    <div v-if="user && user.name" class="flex gap-3 items-center">
      <UserInfo :user="user" :logout="logout" />
    </div>
  </div>
</template>
