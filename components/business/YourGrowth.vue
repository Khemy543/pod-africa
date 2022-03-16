<template>
  <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="w-full mt-14 bg-white py-14 flex relative h-80 lg:h-auto">
      <img src="~/static/images/growth.png" alt="growth" class=" w-full h-full"/>
      <div class="absolute rounded-lg centered py-6 lg:px-28 w-4/5 lg:w-auto">
        <h4 class=" text-white font-bold font-source-sans text-base lg:text-2xl text-center">Your growth starts here! Unleash your potential</h4>
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
