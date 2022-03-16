<template>
  <section>
    <div class=" bg-primary-yellow-light">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 class=" text-center text-primary-green">Why Invest In Africa</h3>

        <div class="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <InvestCard v-for="investor in investors" :key="investor.id" :investor="investor"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InvestCard from "../common/InvestCard.vue";
  export default {
    components: { InvestCard },
    data() {
      return {
        investors: [
          {
            id: 1,
            icon: "/svgs/businessplan.svg",
            title: "Digitalisation of the African Economy",
            description: "Widening accessibility to services by leveraging technologies leave room for investors to capture sizeable markets as there are more opportunities to provide contexual last mile services."
          },
          {
            id: 2,
            icon: "/svgs/location.svg",
            title: "Rich In Ideas ",
            description: "There are over 600 tech hubs working as incubators or accelerators across the continent, signalling more tech based start-ups are looking for, not just funding, but the expertise and counsel to scale their ventures"
          },
          {
            id: 3,
            icon: "/svgs/user.svg",
            title: "Expansion of Enablers ",
            description: "GSM Intelligence projected that by 2025 50% of the Sub-Saharan Africa would have access to a mobile phone and 39% of same population would have access to the internet"
          }
        ]
      }
    }
}
</script>

<style scoped>

</style>
