<template>
  <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="text-center text-primary-yellow">Our People</h3>

    <div class="w-full mt-14 bg-white py-14">
      <h5 class=" text-center">Our stakeholders, though vitally diverse, are similarly purposed.</h5>

      <div class="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-5">
        <PeopleCard v-for="n in 3" :key="n" />
      </div>
    </div>
  </section>
</template>

<script>
import PeopleCard from "../common/PeopleCard.vue";
export default { components: { PeopleCard } };
</script>

<style lang="css" scoped></style>
