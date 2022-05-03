<template>
  <section class="my-32 max-w-5xl mx-auto px-4 sm:px-6">
    <h3 class="text-center text-primary-yellow">Our Investment Process</h3>

    <div class=" max-w-lg mx-auto mb-10">
     <p class="text-base font-normal font-source-sans text-center text-gray-900 mt-6">
       Our principle is simple; filter through the greatest ideas, subject them to critical scrutiny and make them immensely valuable.
     </p>
    </div>

    <div class="timeline">
      <div class="container left">
        <div class="content">
          <p class=" font-source-sans text-base">
            We carefully select businesses through partnerships
            with indigenous ecosystem players, using data & technology
            to solve human problems on the continent
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <p class=" font-source-sans text-base">
            We critically review prepared proposals on industry relevant metrics and
             respond to ask having considered all major risk areas.
            <br/> <br/>
            Additionally we settle on milestones we perceive will trigger
             growth and to preserve the fund's interest negotiate for a
             stake in management/board of the company
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <p class=" font-source-sans text-base">
            The integral process for our growth strategy kickstarts covering areas
             of governance, brand, finance, engineering and legal consultation,
             to ensure our companies scale quickly; in order to effectively impact
            the youth unemployment crisis and close the poverty gap engulfing the continent
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <p class=" font-source-sans text-base">
            Access to the fund ensures access to the governing partners’ exclusive
            caliber of business growth regardless of funding status for accepted
            companies, by leveraging our 100+ years of experience in investment banking,
            engineering, and building global brands, to develop future ready businesses
            and leaders on the continent.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ffffff;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background: #006e51;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid #006e51;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: #006e51;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .content {
  padding: 30px;
  position: relative;
  border-radius: 20px;
  z-index: 100;
}

.container.left .content {
  @apply bg-primary-green text-white;
}

.container.right .content {
  @apply bg-primary-yellow text-white;
}

.container.right .content {
  padding: 30px;
  border-radius: 20px
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 10px;
  }

  .container {
    width: 100%;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after,
  .container.right::after {
    left: 2px;
  }

  .container.left::before,
  .container.right::before {
    left: 8px;
    border-color: transparent #006e51 transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px;
    border-radius: 20px
  }
}
</style>
