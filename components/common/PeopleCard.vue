<template>
  <div class="shadow-md rounded-lg py-5 px-6 group hover:bg-primary-green cursor-pointer transition-all ease-in">
    <img src="~/static/images/people/daniel.png" alt="" class="mx-auto" />

    <h4 class="text-primary-yellow text-center text-xs font-bold mt-2">
      Daniel Levin
    </h4>
    <p class="text-xm font-poppins text-primary-green text-center group-hover:text-white">
      General Manager
    </p>
    <div class="people-about mt-10">
      <p class="font-roboto italic group-hover:text-white">
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
  @apply font-roboto italic text-primary-green group-hover:text-primary-yellow;
}

.people-about::after {
  content: '"';
  font-size: 78px;
  line-height: 80px;
  float: right;
  @apply font-roboto italic text-primary-green text-right group-hover:text-primary-yellow;
}
</style>
