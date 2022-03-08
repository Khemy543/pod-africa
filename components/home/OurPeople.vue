<template>
  <section>
    <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-center text-primary-yellow">Our People</h3>

      <div
        class="w-full mt-14 bg-white py-14 px-4 sm:px-6 lg:px-8"
      >
        <h5>Our stakeholders, though vitally diverse, are similarly purposed.</h5>

        <div class=" mt-20 grid grid-cols-3 gap-x-5">
          <PeopleCard v-for="n in 3" :key="n"/>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import PeopleCard from "../common/PeopleCard.vue";
export default { components: { PeopleCard } };
</script>

<style lang="css" scoped></style>
