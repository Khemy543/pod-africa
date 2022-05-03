<template>
  <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="text-center text-primary-yellow">Sustainable Growth</h3>

    <p class="text-base text-center mt-14 font-normal font-source-sans text-gray-900">We a focused on forming stronger business and supporting ecosystem
      to facilitate the expansion of the African economy.  The focus is to build
      the architectural runway of Africa’s future and empower a younger
      generation to create wealth and circulate new value. PoD Africa is geared at the
      sustained profitability and growth of new ventures so we can tackle
      the following SDGs.</p>

    <div class=" grid gird-cols-2 md:grid-cols-4 gap-x-5 mt-10 gap-y-5 xl:gap-y-0">
      <img :src="n.image" alt="" v-for="n in sdgs" :key="n.id"/>
    </div>

    <h3 class="text-center text-primary-yellow mt-32">Our People</h3>

    <div class="w-full mt-14 bg-white py-14">
      <h5 class=" text-center">Our stakeholders, though vitally diverse, are similarly purposed.</h5>

      <div class="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <PeopleCard v-for="n in people" :key="n.id" :people="n" />
      </div>
    </div>
  </section>
</template>

<script>
import PeopleCard from "../common/PeopleCard.vue";

export default {
  components: { PeopleCard },
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Dr. Ernest Asimenu',
          image: '/ernest.jpeg',
          position: 'General Partner',
          description: 'A strong track record in business development, people management, financial services, wealth management and has successful formed business relationships globally. '
        },
        {
          id: 2,
          name: 'Randolph Rodrigues',
          image: '/randolf.jpeg',
          position: 'General Partner',
          description: 'Experienced corporate finance and banking professional with extensive execution and leadership in developed (US and EU) and emerging markets (Sub-Saharan Africa). '
        },
        {
          id: 3,
          name: 'Maame Tutua Dadson',
          image: '/maame.jpeg',
          position: 'General Partner',
          description: 'An experienced lawyer with significant experience in structuring transactions and detailing requirements for doing business, corporate compliance in Ghana'
        },
        {
          id: 4,
          name: 'Patrick Quantson',
          image: '/patrick.jpeg',
          position: 'General Partner',
          description: 'Decades work experience in technology, FinTech and emerging payments. A goal-focused expert incessant on ensuring profitable innovations originate from the continent'
        },
        {
          id: 5,
          name: 'Obinna Chuku',
          image: '/obina.jpeg',
          position: 'General Partner',
          description: 'A creative with the inate ability to lead, inspire and enable teams and businesses tell stories centred on the value they create and capture.'
        },
        {
          id: 6,
          name: 'Gilbert Nii Tackie',
          image: '/gilbert.JPG',
          position: 'Associate',
          description: 'A technology professional with a strong understanding of digital business. He has had extensive experience in product management and developing a stringent value delivery process.'
        }
      ],
      sdgs: [
        {
          id: 1,
          image: '/sdg1.png'
        },
        {
          id: 2,
          image: '/sdg8.png'
        },
        {
          id: 3,
          image: '/sdg9.png'
        },
        {
          id: 4,
          image: '/sdg10.png'
        }
      ]
    }
  }
};
</script>

<style lang="css" scoped></style>
