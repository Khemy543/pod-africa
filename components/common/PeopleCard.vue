<template>
  <div class="shadow-md rounded-lg py-5 px-6 group hover:bg-primary-green cursor-pointer transition-all ease-in">
    <img :src="people.image" alt="" class=" w-32 h-32 mx-auto rounded-full object-cover object-center"/>

    <h4 class="text-primary-yellow text-center text-xs font-bold mt-2">
      {{ people.name }}
    </h4>
    <p class="text-xm font-poppins text-primary-green text-center group-hover:text-white">
      {{ people.position }}
    </p>
    <div class="people-about mt-10">
      <p class="font-roboto italic group-hover:text-white">
        {{ people.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Object,
      required: true
    }
  }
};
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
