<script>
import { initAuth, login } from '@/services/google.auth.js';

export default {
  name: 'GoogleAuth',
  setup() {
    initAuth();
    return {
      login,
    };
  },
};
</script>

<template>
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="dark"
    class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
    style="background-color: #ea4335"
    @click="login"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      class="w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      />
    </svg>
  </button>
</template>
