<template>
  <div class="max-w-6xl mx-auto relative py-2 px-4 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between" aria-label="Global">
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link to="/">
            <span class="sr-only">Pod Africa</span>
            <img
              class="h-8 w-auto sm:h-16 object-cover object-center"
              src="~/static/images/logo.png"
            />
          </nuxt-link>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              @click="open = true"
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <nuxt-link
          to="/"
          class="text-primary-yellow font-source-sans font-semibold"
          >Home</nuxt-link
        >

        <nuxt-link
          to="/investors"
          class="font-semibold text-primary-yellow font-source-sans"
          >Investors</nuxt-link
        >

        <nuxt-link
          to="/business"
          class="font-semibold text-primary-yellow font-source-sans"
          >As a Business</nuxt-link
        >

        <nuxt-link
          to="/contact-us"
          class="app-button bg-gray-900 text-white font-source-sans"
          >Join Us</nuxt-link
        >
      </div>
    </nav>
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        v-click-outside="closeMenu"
        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
              class="h-8 w-auto sm:h-16 object-cover object-center"
              src="~/static/images/logo.png"
            />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <nuxt-link
              to="/"
              class="block px-3 py-2 rounded-md text-base font-semibold text-primary-yellow font-source-sans hover:bg-gray-50"
              >Home</nuxt-link
            >

            <nuxt-link
              to="/investors"
              class="block px-3 py-2 rounded-md text-base font-semibold text-primary-yellow font-source-sans hover:bg-gray-50"
              >Investors</nuxt-link
            >

            <nuxt-link
              to="/business"
              class="block px-3 py-2 rounded-md text-base font-semibold text-primary-yellow font-source-sans hover:bg-gray-50"
              >As a Business</nuxt-link
            >

            <nuxt-link
              to="/contact-us"
              class="app-button bg-gray-900 text-white font-source-sans block text-center px-3 py-2 rounded-md text-base font-semibold hover:bg-gray-50"
              >Join Us</nuxt-link
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    closeMenu() {
      this.open = false;
    }
  },
  watch: {
    $route(newRoute) {
      if(newRoute) {
        this.closeMenu()
      }
    }
  }

};
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-primary-green;
}
</style>
