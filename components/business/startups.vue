<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="w-full h-full mt-16 relative">
      <img src="~/static/images/start-ups-bg-2.png" alt="home banner" class="w-full" style="height:600px;"/>
      <div class="w-full lg:w-1/2 absolute rounded-3xl bg-overlay px-10 py-5">
        <div>
          <h4
            class="font-source-sans font-bold text-3xl text-white text-center"
          >Mission to one million</h4>

          <p class="text-sm font-normal font-source-sans text-white mt-8">
            For the next five years PoD remains focused on enabling young businesses tap into a pool of resources (capital injection and industry expertise) that will accelerate growth and drive profitability.
          </p>
        </div>
      </div>
    </div>
  </div>
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
/* .hero {
  background-image: url("~/static/images/stat-ups-bg.png");
  background-repeat: no-repeat;
  background-position: center;
} */

.bg-overlay {
  background-color: rgba(0, 0, 0, 0.71);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
