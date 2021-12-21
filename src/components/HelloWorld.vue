<template>
<div class="cont-home">
  <!-- <side-bar></side-bar> -->
  <div class="cont-home2">
  <section>
    <!-- <div class="bg"  id="bg"> </div> -->
    <!-- <img class="jet" src="../assets/logo.png" id="jet"> -->
    <img class="hulk" src="https://www.pngitem.com/pimgs/m/75-759483_alien-4-icon-aliens-cartoon-png-transparent-png.png" id="hulk">
   
  </section>
  <div class="sec">
    <div class="content">
      <h2>Robert Bruce Banner - I'm Hulk.</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum
        passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
// import SideBar from './SideBar.vue';
gsap.registerPlugin(ScrollTrigger);

export default {
  // components: { SideBar },
mounted(){
gsap.to(".bg", {
    scrollTrigger: {
        scrub: true
    },
    y: 200,
    scale: 1.2
})
gsap.to(".jet", {
    scrollTrigger: {
        scrub: true
    },
    x: -200,
    y: -1800,
    scale: 1
})
gsap.to(".hulk", {
    scrollTrigger: {
        scrub: true
    },
    x: 1000,
    y: 200,
    scale: 1.1
})
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
}
.cont-home{
  width: 100vw;
  height: 100vh;
  display: flex;

  background-color: #343232;
}
.cont-home2{
  background: transparent linear-gradient(180deg, #FFFFFF 0%, #FFF6F600 100%) 0% 0% no-repeat padding-box;
  mix-blend-mode: screen;
opacity: 0.13;
width: 80%;
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

section:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 100000;
}

.sec {
  position: relative;
  padding: 100px;
}

h2 {
  font-size: 2.5em;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  color: rgb(0, 0, 0);
}

#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  background-color: #343232;
}

img#jet {
  position: absolute;
  top: 180%;
  z-index: 10000;
  width: 50%;
  transform: scale(0);
}

img#hulk {
  position: absolute;
  right: 800px;
  top: 0;
  max-width: 50%;
  transform: scale(0);
}
</style>
