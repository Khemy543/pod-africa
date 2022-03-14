<template>
  <div>
    <Startups />
    <OurPartners />
    <YourGrowth />
    <EventCalendar />
    <Base />
  </div>
</template>

<script>
import Startups from "../components/business/startups.vue";
import OurPartners from "../components/business/OurPartners.vue";
import YourGrowth from "../components/business/YourGrowth.vue";
import EventCalendar from "../components/business/EventCalendar.vue";
import Base from "../components/investors/Base.vue";
  export default {
    components: { Startups, OurPartners, YourGrowth, EventCalendar, Base }
}
</script>

<style scoped>

</style>
