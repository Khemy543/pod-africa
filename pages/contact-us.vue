<template>
  <div>
    <section class="my-32 max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-xl mx-auto">
        <h3 class="text-center text-primary-yellow">We would love to hear from you!</h3>

        <p class="text-sm font-normal font-source-sans text-center">
          Be sure to engage with us to discuss opportunities if we fit a use
          case. For all correspondence and queries we attempt to respond within
          24 hours of being sent.
        </p>
      </div>

      <div class="mt-20 max-w-2xl mx-auto">
        <form action @submit="handleMessage">
          <div class="flex">
            <div class="w-1/2">
              <label for="investor" class="text-base font-normal font-source-sans">
                <input type="radio" name="radio" id="investor" value="investor" v-model="type" />
                <span class="ml-4">Investors</span>
              </label>
            </div>
            <div class="w-1/2">
              <label for="company" class="text-base font-normal font-source-sans">
                <input type="radio" name="radio" id="company" value="company" v-model="type" />
                <span class="ml-4">Company</span>
              </label>
            </div>
          </div>

          <div class="mt-10 space-y-10" v-if="type === 'investor'">
            <div class="flex flex-col lg:flex-row lg:space-x-4 space-y-10 lg:space-y-0">
              <div class="w-full lg:w-1/2">
                <label for="fullname" class="text-base font-normal font-source-sans">Full name *</label>
                <div>
                  <input
                    id="fullname"
                    type="text"
                    placeholder="Full name"
                    v-model="form.name"
                    required
                    class="border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <label for="email" class="text-base font-normal font-source-sans">Email address *</label>
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    required
                    v-model="form.email"
                    class="border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col lg:flex-row lg:space-x-4">
              <div class="w-full lg:w-1/2">
                <label for="phone" class="text-base font-normal font-source-sans">Contact numbers *</label>
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Contact numbers"
                    v-model="form.number"
                    required
                    class="border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                  />
                </div>
              </div>
            </div>

            <div class="w-full">
              <label for="message" class="text-base font-normal font-source-sans">Message *</label>
              <div>
                <textarea
                  id="message"
                  placeholder="Type here..."
                  v-model="form.message"
                  required
                  class="h-40 border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="app-button bg-primary-yellow text-white" type="submit">Submit</button>
            </div>
          </div>
          <div v-show="type === 'company'" class="w-full h-full">
            <div class=" mt-10">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGzHl8tBL5OJdP6Z7LFvpkzKxy5fV4IV34nPFXOoCHjOTlew/viewform?embedded=true" width="640" height="3319" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <img src="~/static/images/contact-us-bg.png" alt class="w-full object-cover object-center" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "investor",
      form: {}
    }
  },
  methods: {
    async handleMessage() {
      try {
        const response = await this.$http.post(`/`, this.form);

        if (response) {

        }
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style scoped></style>
