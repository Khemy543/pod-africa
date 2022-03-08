<template>
  <div>
    <AboutUs />
    <OurPeople />
    <OurPortfolio />
    <WhyChooseUs />
  </div>
</template>

<script>
import AboutUs from "../components/home/AboutUs.vue";
import OurPeople from "../components/home/OurPeople.vue";
import OurPortfolio from "../components/home/OurPortfolio.vue";
import WhyChooseUs from "../components/home/WhyChooseUs.vue";
export default {
    name: "IndexPage",
    components: { AboutUs, OurPeople, OurPortfolio, WhyChooseUs }
};
</script>
