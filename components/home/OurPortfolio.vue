<template>
  <section class="mt-32">
    <h3 class="text-center text-primary-yellow">Our Portfolio</h3>

    <div
      class="w-full mt-14 bg-primary-yellow-light py-14 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-24">
        <img v-for="n in images" :key="n.id" :src="n.image" :alt="n.name" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id:1,
          name: "clorox",
          image: "/images/portfolio/clorox.png"
        },
        {
          id:2,
          name: 'Pringles',
          image: "/images/portfolio/pringles.png"
        },
        {
          id:3,
          name: "Nestle",
          image: "/images/portfolio/nestle.png"
        },
        {
          id: 4,
          name: "avast",
          image: "/images/portfolio/avast.png"
        },
        {
          id: 5,
          name: 'michelin',
          image: "/images/portfolio/michelin.png"
        },
        {
          id: 6,
          name: "aqauafresh",
          image : "/images/portfolio/aquafresh.png"
        },
        {
          id: 7,
          name: 'maybelline',
          image: "/images/portfolio/maybelline.png"
        },
        {
          id: 8,
          name: "always",
          image: "/images/portfolio/always.png"
        }
      ]
    }
  }
};
</script>

<style scoped></style>
