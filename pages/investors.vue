<template>
  <div>
    <Banner />
    <OurInvestors />
    <!-- <InvestmentProcess /> -->
    <WhyInvestorAfrica />
    <WordOnBlock />
    <Base />
  </div>
</template>

<script>
import OurInvestors from "../components/investors/OurInvestors.vue";
import WhyInvestorAfrica from "../components/investors/WhyInvestorAfrica.vue";
import WordOnBlock from "../components/investors/WordOnBlock.vue";
import Base from "../components/investors/Base.vue";
import Banner from "../components/investors/Banner.vue";
import InvestmentProcess from "../components/investors/InvestmentProcess.vue";
  export default {
    components: { OurInvestors, WhyInvestorAfrica, WordOnBlock, Base, Banner, InvestmentProcess }
}
</script>

<style scoped>

</style>
