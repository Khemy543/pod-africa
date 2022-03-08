<template>
  <div class="">
    <Navbar />
    <div class=" w-full h-14 bg-primary-green">
    </div>

    <div class="pt-6">
      <Nuxt />
    </div>
    <Footer />
    <div class=" bg-white py-2 text-center">
      <button class=" font-bold text-3xl italic bg-clip-text font-source-sans text-transparent bg-gradient-to-r from-primary-green to-primary-yellow">
        Green to Gold
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
  export default {
    components: { Navbar, Footer }
}
</script>

<style scoped>

</style>
