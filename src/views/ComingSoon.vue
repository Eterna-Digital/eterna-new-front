<template>
  <div class="cont-coming-s d-flex justify-center align-center">
    <v-card
      width="60%"
      elevation="0"
      class="d-flex flex-column align-center"
      color="transparent"
    >
      <h1 class="prox">PRÓXIMAMENTE</h1>
      <v-card
        class="d-flex align-center card-prox"
        color="transparent"
        elevation="0"
      >
        <v-card
          tile
          elevation="6"
          width="35%"
          height="70vh"
          color="#2F2F2F"
          class="d-flex flex-column justify-center align-center pl-10 pr-10 card-prox"
        >
          <div class="cont-logo-cs">
            <v-img src="../assets/logos/atmos_logo.svg" class="logo-cs mr-3" />
          </div>
          <p class="txt-csoon">
            Atmos es una agencia que respalda a los jugadores. Buscamos mejorar
            la imagen, el desempeño, administración y la gestión de cada
            jugador.
          </p>
        </v-card>
        <v-card
          elevation="8"
          tile
          width="35%"
          height="80vh"
          color="#2F2F2F"
          style="z-index: 20"
          class="d-flex flex-column justify-center align-center pl-10 pr-10 card-prox"
        >
          <div class="cont-logo-cs">
            <v-img src="../assets/logos/we-coin-logo.svg" class="logo-cs" />
          </div>
          <p class="txt-csoon">
            Tenemos un chat con más de 5,000 usuarios, el chat se convertirá en
            un modelo de pagos, administración y creación de proyectos.
          </p>
        </v-card>
        <v-card
          elevation="6"
          tile
          width="35%"
          height="70vh"
          color="#2F2F2F"
          class="d-flex flex-column justify-center align-center pl-10 pr-10 card-prox"
        >
          <div class="cont-logo-cs-utag">
            <v-img src="../assets/logos/utag-logo.svg" class="logo-cs" />
          </div>
          <p class="txt-csoon">
            Agencia de tecnología para marketing ahora en México. Nos fusionamos
            para brindar el mejor servicio a nuestros clientes.
          </p>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    gsap.to(".prox", {
      scrollTrigger: {
        scrub: true,
      },
      y: -120,
      scale: 1.2,
    });
    gsap.to(".card-prox", {
      scrollTrigger: {
        scrub: true,
      },
      scale: 1.1,
    });
  },
};
</script>

<style>
.cont-coming-s {
  width: 100vw;
  background-image: url("../assets/gradients/gradient_5.png");
  background-size: cover;
  padding-bottom: 15%;
  padding-top: 25%;
}
.prox {
  font-family: "Source Code Pro", monospace;
  color: #fff;
  letter-spacing: 10px;
  font-weight: lighter;
  font-size: 1.5rem;
}
.cont-logo-cs {
  display: flex;
  width: 80%;
}
.cont-logo-cs-utag {
  display: flex;
  width: 90%;
  margin-top: -15%;
}
.logo-cs {
  width: 55% !important;
}
.txt-csoon {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 0.8rem;
  text-align: justify;
  margin-top: 20%;
}
</style>
