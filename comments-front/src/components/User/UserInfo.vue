<script>

export default {
  name: 'UserInfo',
  props: ['user', 'logout']
}
</script>

<template>
  <div class="flex gap-3 items-center">
    <img
      v-if="user.picture"
      referrerpolicy="no-referrer"
      class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
      :src="user.picture"
      :alt="user.name"
    >
    <h3 class="font-bold">
      {{ user.name }}
    </h3>
    <button
      v-if="logout"
      type="button"
      class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

