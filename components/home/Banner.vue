<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class=" w-full h-full mt-16 relative">
      <img src="~/static/images/home-banner.png" alt="home banner" class=" w-full" style="height:600px;"/>
      <div class=" w-full lg:w-1/2 absolute rounded-3xl bg-overlay px-10 py-5 -bottom-1/2 lg:bottom-10 lg:left-10">
        <div>
            <h4 class=" font-source-sans font-bold text-xl lg:text-3xl text-white">Building an Africa to last generations</h4>

            <p class=" text-sm font-normal font-source-sans text-white mt-5">
              PoD Africa is set out to be the bridge that converts the
              most powerful dreams, into the reality the continent needs.
              We are poised to connect African ingenuity to the world
              in a controlled, scalable and profitable manner.
            </p>
            <div class="mt-6">
              <nuxt-link to="/contact-us" class="app-button bg-primary-yellow text-white">Join Us</nuxt-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .bg-overlay {
    background-color: rgba(0, 0, 0, 0.71);
  }
</style>
