<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-32">
    <h3 class="text-center text-primary-yellow">Word on the block</h3>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-28 gap-y-10 mt-16">
      <div>
        <img src="~/static/images/meeting.png" alt="" />

        <h4 class="font-source-sans font-bold text-lg mt-6">
          {{ firstBlog.title }}
        </h4>
        <p class="font-source-sans text-base mt-3 text-gray-600">
          {{ firstBlog.content }}
        </p>
        <a :href="firstBlog.link" target="_blank"
          class="bg-primary-yellow px-4 py-2 rounded-md mt-4 text-white float-right hover:bg-primary-green transition-all ease-in"
        >
          Read more
        </a>
      </div>

      <div class="space-y-20">
        <div v-for="item in otherBlogs" :key="item.id">
          <h4 class="font-source-sans font-bold text-lg">
            {{ item.title }}
          </h4>
          <p class="font-source-sans text-base mt-3 text-gray-600">
            {{ item.content }}
          </p>
          <a :href="item.link" target="_blank"
            class="bg-primary-yellow px-4 py-2 rounded-md mt-4 text-white float-right hover:bg-primary-green transition-all ease-in"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blog: [
        {
          id: 1,
          title: "Here's why the African start-up scene is booming",
          image: '',
          content: 'African startups raised a record $725.6 million across 458 deals in 2018. This continues to grow reflects increasing investor confidence in startup businesses across the continent’s major hubs.',
          link: 'https://www.weforum.org/agenda/2019/02/startup-investment-in-africa-jumped-to-record-levels-in-2018-as-later-stage-rounds-rose'
        },
        {
          id: 2,
          title: 'Start-Up scene in Ghana',
          image: '',
          content: "Ghana's tech startups are making a difference and is developing exceptionally fast. The capital Accra is an oasis for the innovation that will drive the countries growth.",
          link: 'https://fairafric.com/en/start-up-scene-in-ghana/'
        },
        {
          id: 3,
          title: 'Tech in 2022: Building on the unicorn boom - African Business',
          image: '',
          link: 'https://african.business/2022/01/technology-information/tech-in-2022-where-next-after-pandemic-unicorn-boom/',
          content: 'A total of 13 startups raised more than $100m in 2021 putting Africa on track for a record-breaking funding year.Agritech, healthtech, cleantech and proptech look like some of the rising sectors that could make waves in 2022'
        },
        {
          id: 4,
          title: "Digest Africa Briefs: The Most Funded Startups in Ghana",
          image: '',
          link: 'https://digestafrica.com/digest-africa-briefs-the-most-funded-startups-in-ghana',
          content: 'According to the GSMA Ecosystem Accelerator, Ghana has more than 25 hubs and accelerators that foster entrepreneurship and the growth of startups.'
        }
      ]
    }
  },
  computed: {
    firstBlog() {
      return this.blog[0]
    },
    otherBlogs() {
      return this.blog.filter(item => item.id !== 1);
    }
  }
};
</script>

<style scoped></style>
