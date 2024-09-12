<template>
  <header-comp/>
  <about-us/>
  <today-special/>
  <about/>
  <awards/>
  <gallery/>
  <newsletter/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import AboutUs from '@/components/AboutUs.vue';
import todaySpecial from '@/components/todaySpecial.vue';
import about from '@/components/about.vue';
import Awards from '@/components/Awards.vue';
import Newsletter from '@/components/Newsletter.vue';
import gallery from '@/components/gallery.vue';
export default {
components:{
  HeaderComp,
  AboutUs,
  todaySpecial,
  about,
  Awards,
  Newsletter,
  gallery
}
}
</script>

<style>

</style>