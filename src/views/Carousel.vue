<template>
  <div class="cont-c d-flex justify-content align-center">
   
      <SlideShow />
    
  </div>
</template>

<script>
import SlideShow from "../components/SlideShow/SlideShow.vue";
export default {
  components: {
    SlideShow,
  },
};
</script>

<style>
.cont-c {
  width: 100vw;
  height: 200vh;
  background: #343232;
}
@media only screen and (max-width: 600px) {
.cont-c {
  height: 50vh;
  display: none;
  /* width: 100vw;
  height: 80vh;
  background: #343232;
  border: 2px solid green; */
}
}
</style>
