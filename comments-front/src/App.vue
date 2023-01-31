<script>
import { localInfo } from './services/auth';
import NavBar from '@/components/navBar.vue';

export default {
  components: { NavBar },
  setup() {
    localInfo();
  },
};
</script>

<template>
  <main>
    <nav-bar />
    <router-view />
  </main>
</template>
