<template>
  <section class="mt-32">
    <h3 class="text-center text-primary-yellow">Our Partners</h3>
    <div class="w-full mt-14 bg-primary-yellow-light py-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4">
        <img :src="n.image" :alt="n.name" v-for="n in partners" :key="n"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "clorox",
          image: "/images/portfolio/clorox.png",
        },
        {
          id: 2,
          name: "Pringles",
          image: "/images/portfolio/pringles.png",
        },
        {
          id: 3,
          name: "Nestle",
          image: "/images/portfolio/nestle.png",
        },
        {
          id: 4,
          name: "avast",
          image: "/images/portfolio/avast.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
