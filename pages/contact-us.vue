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
        <form action>
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
                    class="border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                  />
                </div>
              </div>
            </div>

            <div class="w-full">
              <label for="message" class="text-base font-normal font-source-sans">Contact numbers *</label>
              <div>
                <textarea
                  id="message"
                  placeholder="Type here..."
                  class="h-40 border border-gray-700 rounded-lg px-4 py-2 text-sm font-normal w-full mt-2"
                ></textarea>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="app-button bg-primary-yellow text-white">Submit</button>
            </div>
          </div>
          <div v-if="type === 'company'">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScGzHl8tBL5OJdP6Z7LFvpkzKxy5fV4IV34nPFXOoCHjOTlew/viewform"
              frameborder="0"
            ></iframe>
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
      type: "investor"
    }
  }
};
</script>

<style scoped></style>
