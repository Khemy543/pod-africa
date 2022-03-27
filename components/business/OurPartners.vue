<template>
  <section class="mt-32">
    <h3 class="text-center text-primary-yellow">Our Partners</h3>
    <div class="w-full mt-14 bg-primary-yellow-light py-14">
      <!--  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-4">
        <img :src="n.image" :alt="n.name" v-for="n in partners" :key="n"/>
      </div>-->
      <VueSlickCarousel v-bind="settings" :dots="false" :arrows="false" class="flex items-center">
        <div class="w-full h-full flex items-center" v-for="n in partners" :key="n.id">
          <img :src="n.image" :alt="n.name" class="w-56 mx-auto my-auto" />
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 2000,
        "autoplaySpeed": 2000,
        "cssEase": "linear",
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3
            }
          }]
      },
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
        {
          id: 5,
          name: 'michelin',
          image: "/images/portfolio/michelin.png"
        },
        {
          id: 6,
          name: "aqauafresh",
          image: "/images/portfolio/aquafresh.png"
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
      ],
    };
  },
};
</script>

<style scoped></style>
