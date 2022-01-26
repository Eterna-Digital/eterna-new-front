<template>
  <div class="cont-cbmarket d-flex justify-center align-center">
    <v-card
      elevation="0"
      class="d-flex cb-scroll"
      color="transparent"
      width="80%"
    >
      <v-container class="d-flex conc mt-5" fluid grid-list-md wrap>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm12 md4>
            <div class="info-sec d-flex flex-column align-start">
              <img src="../../assets/logos/cbmarket-logo.svg" class="img-bc" />
              <div>
                <h1 class="number">04</h1>
                <h1 class="title ma-0 pa-0">
                  Unimos al mundo<br />
                  con CBD
                </h1>
                <p class="txt-sec">
                  Unimos a todos esos curiosos interesados en conocer el CBD con
                  una red de productos con calidad, enfoque, y certificación.
                  Así, cuando el publico Mexicano este interesado en CBD entrará
                  a CB·Market donde verá:<br />
                  Certificación - Información - Respaldo.
                </p>
                <div class="btn-cbm-cont">
                  <button class="btn-cbm">
                    <a
                      href="https://cbmarketstore.com/"
                      target="_blank"
                      class="btn-link-cbm"
                    >
                      VISITAR
                      <img src="../../assets/elements/arrow.svg" class="arrow" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm12 md8>
            <div class="d-flex flex-column align-end photo-sec-cb">
              <img src="../../assets/logos/cbmarket-sello.svg" class="sello" />
              <img
                src="../../assets/photos/cbmarket-mockup.png"
                class="ps-cb"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    gsap.to(".cb-scroll", {
      scrollTrigger: {
        scrub: true,
      },
      scale: 1.1,
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sello",
        pin: true,
        pinSpacing: false,
        start: "top top",
        scrub: 1,
        toggleClass: "active",
      },
    });
    tl.from(".sello", {
      opacity: 0,
      zIndex: 1,
      scale: 2,
    });
  },
};
</script>

<style>
.cont-cbmarket {
  width: 100vw;
  background-image: url("../../assets/gradients/gradient_4.png");
  background-size: cover;
  padding-bottom: 5%;
  padding-top: 5%;
}
.info-sec .img-bc {
  width: 80%;
}
.info-sec .number {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
  color: #edecfe;
}
.info-sec .title {
  font-family: "Source Code Pro", monospace !important;
  color: #edecfe;
  font-weight: lighter;
  text-decoration: underline;
}
.info-sec .txt-sec {
  width: 80%;
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 5%;
  text-align: justify;
}
.photo-sec-cb {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 1%;
}
.photo-sec-cb .ps-cb {
  width: 110%;
  margin-left: 20%;
}
.photo-sec-cb .sello {
  width: 20%;
  position: absolute;
  margin-right: 85% !important;
  border: 2px solid white;
}
.btn-cbm {
  margin-top: 8% !important;
  width: 55%;
  height: 2.5rem;
  padding-left: 1rem;
  background: transparent;
  border: 1px solid rgb(255, 255, 255) !important;
  border: none;
  position: relative;
  z-index: 2;
}
.btn-cbm .btn-link-cbm {
  font-family: "Source Code Pro", monospace;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.75rem;
  text-align: left;
  letter-spacing: 2px;
  margin-top: 8% !important;
  width: 50%;
  height: 2.5rem;
  background: transparent;
  border: none;
  position: relative;
  z-index: 2;
  text-decoration: none;
  padding-right: 1rem;
}

.btn-cbm:after,
.btn-cbm:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  -webkit-transform: scaleX(0);
  transform-origin: center right;
  -webkit-transform-origin: center right;
  display: block;
}
.btn-cbm:after {
  background-color: #7355ff;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -2;
}
.btn-cbm:before {
  background-color: #343232;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -1;
}
.btn-cbm:hover:after,
.btn-cbm:hover:before {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform-origin: center left;
  -webkit-transform-origin: center left;
}
.btn-cbm:hover:a {
  transition: 0.5s transform ease-in-out;
}
.btn-cbm .arrow {
  width: 30%;
}
.btn-cbm:hover .arrow {
  transition: 0.2s ease-in-out;
  margin-left: 0.5rem;
}
</style>
