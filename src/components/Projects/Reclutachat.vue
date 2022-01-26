<template>
  <div class="cont-reclutachat d-flex justify-center align-center">
    <v-card elevation="0" class="d-flex" color="transparent" width="100%">
      <v-container class="d-flex conc mt-5 pa-0 ma-0" fluid grid-list-md wrap>
        <v-layout row wrap class="pa-0 ma-0">
          <v-flex d-flex xs12 sm12 md5 class="pa-0">
            <div class="d-flex flex-column align-end photo-sec-rc rc-scroll">
              <img src="../../assets/photos/compu-s2.png" class="r-cht" />
            </div>
          </v-flex>
          <v-flex d-flex xs12 sm12 md7>
            <div class="info-sec-rc d-flex flex-column align-start">
              <img src="../../assets/logos/reclutachat.svg" class="img-rc" />
              <div>
                <h1 class="number mt-3 mb-3">03</h1>
                <h1 class="title ma-0 pa-0">
                  Inteligencia,<br />
                  automatizaciones<br />
                  & data para<br />
                  contrataciones
                </h1>
                <p class="txt-sec-1">
                  Entregamos las características para que las aplicaciones
                  cumplan con los comportamientos necesarios para ser dignos del
                  título Cloud Native.<br /><br />
                  Una vez que el cliente define cuando y con que empezará lo
                  guiamos paso a paso a una migración segura y confiable.
                </p>
                <div class="btn-rcltcht-cont">
                  <button class="btn-rch">
                    <a
                      href="https://reclutachat.com/"
                      target="_blank"
                      class="btn-link-rc"
                    >
                      VISITAR
                      <img src="../../assets/elements/arrow.svg" class="arrow" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div class="info-sec-2 d-flex flex-column align-start">
              <p class="txt-sec-2r">Reclutachat cuenta con:</p>
              <ul class="list">
                <li>- Inteligencia para chatbots</li>
                <li>- Conversaciones automáticas</li>
                <li>- Generación de base de datos</li>
                <li>- Predicción de rotación</li>
                <li>- Predicción de accidents</li>
                <li>- Capacitaciones digitales, en VR y gameficadas</li>
                <li>- Automatización en fechas para los reclutadores</li>
                <li>
                  - Comunicación previa, durante y posterior a las campañas
                </li>
              </ul>
            </div>
            <div class="circles-cont">
              <img src="../../assets/elements/circles-mask.png" />
            </div>
          </v-flex>

          <div class="ondita-rc">
            <img src="../../assets/elements/linea_blanca.svg" class="img-rc" />
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
    gsap.to(".rc-scroll", {
      scrollTrigger: {
        scrub: true,
      },
      scale: 1.1,
    });
    gsap.to(".circles-cont", {
      scrollTrigger: {
        scrub: true,
      },
      y: -100,
      x: -80,
      scale: 1.3,
    });
    gsap.to(".ondita-rc", {
      scrollTrigger: {
        scrub: true,
      },
      x: 300,
      scale: 1.4,
    });
  },
};
</script>

<style>
.cont-reclutachat {
  width: 100vw;
  background-image: url("../../assets/gradients/gradient_3.png");
  background-size: cover;
  padding-bottom: 5%;
  padding-top: 5%;
}
.info-sec-rc {
  width: 35%;
}
.info-sec-rc .img-rc {
  width: 80%;
}
.info-sec-rc .number {
  font-family: "Roboto", sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
  color: #edecfe;
}
.info-sec-rc .title {
  font-family: "Source Code Pro", monospace !important;
  color: #edecfe;
  font-weight: lighter;
  text-decoration: underline;
}
.info-sec-rc .txt-sec-1 {
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 5%;
  text-align: justify;
}
.info-sec-2 {
  width: 35%;
  margin-left: 5%;
  font-family: "Roboto", sans-serif;
  color: #edecfe;
  font-weight: lighter;
  font-size: 0.8rem;
  margin-top: 6%;
  text-align: justify;
}
.info-sec-2 .txt-sec-2r {
  font-weight: bolder;
  margin-left: 1.5rem;
}
.info-sec-2 .list li {
  list-style-type: none;
  margin-bottom: 1.2rem;
}

.photo-sec-rc {
  margin-top: 10%;
  width: 100%;
}
.photo-sec-rc .r-cht {
  width: 100%;
}
.btn-rch {
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
.btn-rch .btn-link-rc {
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

.btn-rch:after,
.btn-rch:before {
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
.btn-rch:after {
  background-color: #7355ff;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -2;
}
.btn-rch:before {
  background-color: #343232;
  transition: 0.3s transform ease-in-out;
  -webkit-transition: 0.3s transform ease-in-out;
  z-index: -1;
}
.btn-rch:hover:after,
.btn-rch:hover:before {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  transform-origin: center left;
  -webkit-transform-origin: center left;
}
.btn-rch:hover:a {
  transition: 0.5s transform ease-in-out;
}
.btn-rch .arrow {
  width: 30%;
}
.btn-rch:hover .arrow {
  transition: 0.2s ease-in-out;
  margin-left: 0.5rem;
}
.circles-cont {
  display: flex;
  justify-content: flex-end;
  margin-right: -10%;
  margin-top: 15%;
}
.circles-cont img {
  width: 70%;
}

.ondita-rc {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8%;
  margin-left: 20%;
}
.ondita-rc img {
  width: 6rem !important;
}
</style>
