<template>
  <div>
    <Banner />
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
import Banner from "../components/home/Banner.vue";
export default {
    name: "IndexPage",
    components: { AboutUs, OurPeople, OurPortfolio, WhyChooseUs, Banner }
};
</script>
