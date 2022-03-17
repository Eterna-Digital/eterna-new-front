<template>
  <div class="cont-tlegal d-flex justify-center align-center">
    <v-card elevation="0" class="d-flex card-tl" color="transparent" >
      <v-container class="d-flex conc mt-5" fluid grid-list-md wrap>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm12 md8>
            <div
              class="d-flex flex-column align-center justify-center photo-sec-tl tl-scroll"
            >
              <img src="../../assets/photos/tlegal_img.png" class="tl" />
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm12 md4>
            <div
              class="info-sec-tl d-flex flex-column align-start justify-center tl-scroll"
            >
              <img src="../../assets/logos/t-legal.svg" class="img-tl" />
              <div>
                <h1 class="number">02</h1>
                <h1 class="title-tl ma-0 pa-0">
                  Gestión Legal <br />Automatizada
                </h1>
                <p class="txt-sec">
                  Nuestra plataforma cuenta con una inteligencia la cual es
                  capaz de brindar una gestión legal automatizada, desde
                  creación de contratos, almacenamiento de cada persona que ha
                  firmado un contrato y la digitalización de firmas y machotes.
                </p>
                <div class="btn-tl-cont">
                  <button class="btn-tl">
                    <a
                      href="https://www.tlegal.app/"
                      target="_blank"
                      class="btn-link"
                    >
                      VISITAR
                      <img src="../../assets/elements/arrow.svg" class="arrow" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </v-flex>
          <div class="ondita-tl">
            <img src="../../assets/elements/linea_blanca.svg" class="img-tl" />
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
    gsap.to(".tl-scroll", {
      scrollTrigger: {
        scrub: true,
      },
      scale: 1.1,
    });
    gsap.to(".ondita-tl", {
      scrollTrigger: {
        scrub: true,
      },
      x: 200,
      scale: 1.4,
    });
  },
};
</script>

<style>
.cont-tlegal {
  width: 100vw;
  background-image: url("../../assets/gradients/gradient_2.png");
  background-size: cover;
  padding-top: 5%;
  padding-bottom: 5%;
}
.card-tl{
  width: 80%
}
.info-sec-tl .img-tl {
  width: 75% !important;
}
.info-sec-tl .number {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
  color: #edecfe;
}
.info-sec-tl .title-tl {
  font-family: "Source Code Pro", monospace;
  color: #edecfe;
  font-weight: lighter;
  text-decoration: underline;
  font-size: 1.5rem;
  letter-spacing: 2px;
}
.info-sec-tl .txt-sec {
  width: 75%;
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 5%;
  text-align: justify;
}
.photo-sec-tl .tl {
  width: 100%;
  margin-right: 10%;
}
.btn-tl {
  margin-top: 8% !important;
  width: 50%;
  height: 2.5rem;
  padding-left: 1rem;
  background: transparent;
  border: 1px solid rgb(255, 255, 255) !important;
  border: none;
  position: relative;
  z-index: 2;
}
.btn-tl .btn-link {
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

.btn-tl:after,
.btn-tl:before {
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
.btn-tl:after {
  background-color: #7355ff;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -2;
}
.btn-tl:before {
  background-color: #343232;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -1;
}
.btn-tl:hover:after,
.btn-tl:hover:before {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform-origin: center left;
  -webkit-transform-origin: center left;
}
.btn-tl:hover:a {
  transition: 0.5s transform ease-in-out;
}
.btn-tl .arrow {
  width: 30%;
}
.btn-tl:hover .arrow {
  transition: 0.2s ease-in-out;
  margin-left: 0.5rem;
}

.ondita-tl {
  width: 75%;
  display: flex;
  justify-content: flex-end;
  margin-top: 8%;
}
.ondita-tl .img-tl {
  width: 6rem !important;
}
@media only screen and (max-width: 600px) {
.cont-tlegal {
  padding-top: 25%;
}
.card-tl{
  width: 90%
}
.info-sec-tl .img-tl {
  width: 75% !important;
  margin-bottom: 10%; 
}
.info-sec-tl .txt-sec {
  width: 90%;
}
.ondita-tl {
  width: 45%;
  margin-top: 25% !important;
}
}
</style>
