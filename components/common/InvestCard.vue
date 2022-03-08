<template>
  <div class=" w-full rounded-lg px-6 py-6 bg-white">
    <div class=" h-20 w-20 rounded-md bg-primary-yellow flex items-center justify-center">
      <img :src="investor.icon" :alt="investor.title">
    </div>

    <h4 class=" mt-5 font-roboto text-base font-bold text-gray-900">{{ investor.title }}</h4>

    <p class=" font-source-sans text-sm mt-4 text-gray-600">
      {{ investor.description }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      investor: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
