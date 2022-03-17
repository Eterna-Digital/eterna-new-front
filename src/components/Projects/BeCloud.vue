<template>
  <div class="cont-bcloud d-flex justify-center align-center">
    <v-card elevation="0" class="d-flex card-cont-bc" color="transparent" >
      <v-container class="d-flex conc mt-5" fluid grid-list-md wrap>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm12 md4>
            <div class="info-sec d-flex flex-column align-start bc-scroll">
              <img
                src="../../assets/logos/eterna-becloud-logo.svg"
                class="img-bc"
              />
              <div class="info-bc">
                <h1 class="number">01</h1>
                <h1 class="title ma-0 pa-0">CLOUD NATIVE</h1>
                <p class="txt-sec">
                  Entregamos las características para que las aplicaciones
                  cumplan con los comportamientos necesarios para ser dignos del
                  título Cloud Native.<br /><br />
                  Una vez que el cliente define cuando y con que empezará lo
                  guiamos paso a paso a una migración segura y confiable.
                </p>
                <div class="btn-cont">
                  <button class="btn-bc">
                    <a href="" target="_blank" class="btn-link-bc">
                      AGENDA UNA CITA
                      <img src="../../assets/elements/arrow.svg" class="arrow" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm12 md8>
            <div class="d-flex flex-column align-end photo-sec bc-scroll">
              <img src="../../assets/photos/becloud_mock.png" class="ps" />
            </div>
          </v-flex>
          <div class="ondita-c">
            <img src="../../assets/elements/linea_blanca.svg" class="img-bc" />
          </div>
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
    gsap.to(".bc-scroll", {
      scrollTrigger: {
        scrub: true,
      },
      y: 100,
      scale: 1.1,
    });
    gsap.to(".ondita-c", {
      scrollTrigger: {
        scrub: true,
      },
      // duration: 0.4,
      x: -250,
      scale: 1.4,
    });
  },
};
</script>

<style>
.cont-bcloud {
  width: 100vw;
  background-image: url("../../assets/gradients/gradient_1.png");
  background-size: cover;
  padding-bottom: 5%;
}
.card-cont-bc{
  width: 75%;
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
  width: 75%;
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 5%;
  text-align: justify;
}
.photo-sec {
  margin-top: 10%;
}
.photo-sec .ps {
  width: 100%;
}
.btn-bc {
  margin-top: 8% !important;
  width: 80%;
  height: 2.5rem;
  padding-left: 1rem;
  background: transparent;
  border: 1px solid rgb(255, 255, 255) !important;
  border: none;
  position: relative;
  z-index: 2;
}
.btn-bc .btn-link-bc {
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

.btn-bc:after,
.btn-bc:before {
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
.btn-bc:after {
  background-color: #7355ff;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -2;
}
.btn-bc:before {
  background-color: #343232;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -1;
}
.btn-bc:hover:after,
.btn-bc:hover:before {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform-origin: center left;
  -webkit-transform-origin: center left;
}
.btn-bc:hover:a {
  transition: 0.5s transform ease-in-out;
}
.btn-bc .arrow {
  width: 20%;
}
.btn-bc:hover .arrow {
  transition: 0.2s ease-in-out;
  margin-left: 0.5rem;
}

.ondita-c {
  width: 35%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15%;
  margin-left: 12%;
}
.ondita-c img {
  width: 6rem !important;
}
@media only screen and (max-width: 600px) {
.card-cont-bc{
  width: 90%;
}
.info-sec{
  width: 100vw !important;
  margin-right: 5%;
}
.info-sec .img-bc {
  width: 80%;
}
.info-sec .txt-sec {
  width: 75vw !important;
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 5%;
  text-align: justify;
}
.photo-sec {
  margin-top: 15%;
  margin-right: 15%;
  width: 100vw;
}
.ondita-c {
  width: 35%;
  display: flex;
  justify-content: flex-end;
  margin-top: 40%;
  margin-left: 35%;
}
}
</style>
