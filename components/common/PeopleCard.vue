<template>
  <div class="shadow-md rounded-lg py-5 px-6">
    <img src="~/static/images/people/daniel.png" alt="" class="mx-auto" />

    <h4 class="text-primary-yellow text-center text-xs font-bold mt-2">
      Daniel Levin
    </h4>
    <p class="text-xm font-poppins text-primary-green text-center">
      General Manager
    </p>
    <div class="people-about mt-10">
      <p class="font-roboto italic">
        We are the bridge connecting Africa to investor channels around the
        globe. We understand that data is power, but know insights are the true
        weapon.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.people-about::before {
  content: '"';
  font-size: 78px;
  line-height: 0px;
  @apply font-roboto italic text-primary-green;
}

.people-about::after {
  content: '"';
  font-size: 78px;
  line-height: 80px;
  float: right;
  @apply font-roboto italic text-primary-green text-right;
}
</style>
