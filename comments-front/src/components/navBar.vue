<script>
export default {
  name: 'NavBar',
};
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >
        Comments App</span
      >
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Last Comments</a
            >
          </li>
          <li>
            <a
              href="/post/1"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Post 1</a
            >
          </li>
          <li>
            <a
              href="/post/2"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >Post 2</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
