<template>
  <div class="cont-home">
    <span class="dark-panel"></span>
    <div class="cont-home2">
      <v-card class="cont-waves" color="transparent" elevation="0">
        <div class="wave-top-txt">
          <v-img src="../assets/elements/back-1-lights.png" class="wave-1" id="wave1" />
          <div class="txt-home" id="txt-home">
            <v-img src="../assets/elements/eterna-logo-w.svg" class="log-e" />
            <div class="line-e"></div>
            <h1 class="mission">NUESTRA MISION</h1>
            <p class="mt-3 txt-h">
              QUEREMOS VIVIR EN EL MUNDO DE HARRY POTTER Y LO HAREMOS 
              GRACIAS A LA TECNOLOGÍA
            </p>
          </div>
        </div>
        <div class="wave-b">
          <v-img src="../assets/elements/back-2-lights.png" class="wave-2" id="wave2" />
          <div class="our-p">NUESTROS PRODUCTOS</div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#wave1", {
      scrollTrigger: {
        scrub: true,
      },
      y: 300,
      scale: 1.1,
    });
    gsap.to("#wave2", {
      scrollTrigger: {
        scrub: true,
      },
      y: 300,
      scale: 1.1,
    });

    const headingTl = gsap.timeline({});
    headingTl
      .from(".line-e", {
        duration: 1,
        scaleX: 0,
        transformOrigin: "left",
        ease: "expo.inOut",
        delay: 0.1,
      })
      .from(".log-e", {
        y: "100%",
        duration: 0.8,
        ease: "expo.out",
        opacity: 0,

      })
      .from(".mission", {
        y: "-100%",
        duration: 0.8,
        ease: "expo.out",
        opacity: 0,
   
      })
      .from(".txt-h", {
        y: "-100%",
        duration: 0.8,
        ease: "expo.out",
        opacity: 0,
   
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
  font-family: "IBM Plex Sans", sans-serif;
}
.cont-home {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #343232;
  position: relative;
}
.dark-panel {
  width: 25%;
}
.cont-home2 {
  background-image: url("../assets/elements/background-home.png");
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
}
.cont-waves {
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  margin-left: -26%;
  background: green;
}
.wave-top-txt {
  display: flex;
  flex-direction: column;
  width: 65%;
}

.wave-b {
  width: 100%;
}
.txt-home {
  position: absolute;
  margin-left: 37%;
  margin-top: 18%;
}
.txt-home .log-e {
  width: 40%;
}
.txt-home .line-e {
  width: 10%;
  height: 2px;
  background: #fff;
  margin: 6% 0 10% 0;
}
.txt-home h1 {
  font-family: "Source Code Pro", monospace;
  font-weight: lighter;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 10px;
}
.txt-home p {
  font-family: "Source Code Pro", monospace;
  color: #fff;
  font-size: 1rem;
}
.cont-2 {
  width: 100%;
}

.wave-b {
  width: 100%;
  position: absolute;
}
.wave-b .wave-2 {
  width: 90% !important;
  margin-left: 16%;
  margin-top: 45%;
}
.wave-b .our-p {
  font-family: "Source Code Pro", monospace;
  color: #fff;
  letter-spacing: 10px;
  position: absolute;
  margin-top: -20%;
  margin-left: 45%;
}

@media only screen and (max-width: 600px) {
.cont-waves {
justify-content: flex-start;
  margin-top: -50%;
  margin-left: -26%;
}
.wave-top-txt {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.txt-home {
  margin-left: 10%;
}
.txt-home .log-e {
  width: 60%;
}
.txt-home .line-e {
  width: 15%;
  height: 1px;
}
.txt-home h1 {
  font-size: 1rem;
}
.txt-home p {
  font-size: 0.8rem;
}
.wave-b {
  width: 100vw;
  margin-top: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.wave-b .wave-2 {
  width: 100% !important;
  margin-left: 0%;
  margin-top: 45%;
}
.wave-b .our-p {
  font-size: 1rem;
  margin-bottom: 10%;
  width: 90%;
  margin-left: 0%;
  text-align: center;

}
}
</style>
