<template>
  <section class="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="text-center text-primary-yellow">Start Ups</h3>
    <div class="w-full mt-14 bg-white py-14 px-4 sm:px-6 lg:px-8 flex">
      <div class="w-2/5 ">
        <div class=" w-full border border-black hero px-8 py-16 rounded-3xl">
          <h4
            class="text-center font-medium text-2xl font-roboto text-primary-yellow"
          >
            Download Resources
          </h4>

          <div class="mt-10 space-y-5">
            <div
              class="flex space-x-4 border border-white rounded-2xl p-6"
              v-for="n in resources"
              :key="n.id"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-yellow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              <h4 class="font-roboto text-white text-base font-medium">
                {{ n.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/5 h-full flex items-center">
        <img src="~/static/images/start-ups-bg-2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resources: [
        {
          id: 1,
          name: "Registration Documents.pdf",
        },
        {
          id: 2,
          name: "Performance Management docx.",
        },
        {
          id: 3,
          name: "Registration Documents.pdf",
        },
        {
          id: 4,
          name: "Performance Management docx.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  background-image: url("~/static/images/stat-ups-bg.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
