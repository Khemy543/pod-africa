<template>
  <section class=" my-32">
    <h3 class="text-center text-primary-yellow">Event Calendar</h3>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-10 lg:gap-y-0 mt-6">
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </section>
</template>

<script>
import EventCard from "./EventCard.vue";
  export default {
    components: { EventCard },
    data() {
      return {
        events: [
          {
            id: 1,
            image: '/images/events/event1.png',
            name: 'Pitching Session',
            start: '2nd July 2022',
            end: '17th Jan, 2022',
            location: 'TBD',
            duration: '09:00hrs (GMT)',
            phone: '055 256 7317'
          },
          {
            id: 2,
            image: '/images/events/event2.png',
            name: ' Pitching Session',
            start: '1st October 2022',
            end: '17th Jan, 2022',
            location: 'TBD',
            duration: '09:00hrs (GMT)',
            phone: '055 256 7317'
          },
          {
            id: 3,
            image: '/images/events/event3.png',
            name: 'Pitching Session',
            start: '10th December 2022',
            end: '17th Jan, 2022',
            location: 'TBD',
            duration: '09:00hrs (GMT)',
            phone: '055 256 7317'
          }
        ]
      }
    }
}
</script>

<style scoped>

</style>
