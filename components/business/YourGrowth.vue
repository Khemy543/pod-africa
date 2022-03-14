<template>
  <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="w-full mt-14 bg-white py-14 px-4 sm:px-6 lg:px-8 flex relative">
      <img src="~/static/images/growth.png" alt="growth" />
      <div class="absolute rounded-lg centered py-6 px-28">
        <h4 class=" text-white font-bold font-source-sans text-2xl text-center">Your growth starts here! Unleash your potential</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
