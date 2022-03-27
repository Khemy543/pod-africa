<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="w-full h-full mt-16 relative">
      <img src="~/static/images/investors-banner.png" alt="home banner" class="w-full h-full" />
      <div class="w-full lg:w-1/2 absolute rounded-3xl bg-overlay px-10 py-5">
        <div>
          <h4
            class="font-source-sans font-bold text-3xl text-white"
          >We are the future of investing in Africa</h4>

          <p class="text-sm font-normal font-source-sans text-white mt-5">
            We are a burgeoning venture capital fund that creates cross linkages
            between wealthy investors passionate about Africa, who aim to build a
            legacy on the continent by connecting them to African-grown high value ventures.
          </p>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
