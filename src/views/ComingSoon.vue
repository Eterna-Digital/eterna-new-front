<template>
  <div class="cont-coming-s d-flex justify-center align-center">
    <v-card elevation="0" class="card-s card-coming" color="transparent">
      <h1 class="prox">PRÓXIMAMENTE</h1>
      <v-container class="d-flex conc mt-5" fluid grid-list-md wrap>
        <v-layout row wrap>
          <v-card
            class="d-flex align-center card-prox"
            color="transparent"
            elevation="0"
          >
            <v-flex d-flex xs12 sm12 md4 class="ma-0 pa-0">
              <v-card
                tile
                elevation="6"
                color="#2F2F2F"
                class="d-flex flex-column justify-center align-center pl-8 pr-8 card-prox-g"
              >
                <div class="cont-logo-cs">
                  <v-img
                    src="../assets/logos/atmos_logo.svg"
                    class="logo-cs mr-3"
                  />
                </div>
                <p class="txt-csoon">
                  Atmos es una agencia que respalda a los jugadores. Buscamos
                  mejorar la imagen, el desempeño, administración y la gestión
                  de cada jugador.
                </p>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm12 md4 class="ma-0 pa-0">
              <v-card
                elevation="10"
                tile
                color="#2F2F2F"
                style="z-index: 20"
                class="d-flex flex-column justify-center align-center pl-8 pr-8 card-prox-g xl"
              >
                <div class="cont-logo-cs">
                  <v-img
                    src="../assets/logos/we-coin-logo.svg"
                    class="logo-cs"
                  />
                </div>
                <p class="txt-csoon">
                  Tenemos un chat con más de 5,000 usuarios, el chat se
                  convertirá en un modelo de pagos, administración y creación de
                  proyectos.
                </p>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm12 md4 class="ma-0 pa-0">
              <v-card
                elevation="6"
                tile
                color="#2F2F2F"
                class="d-flex flex-column justify-center align-center pl-8 pr-8 card-prox-g"
              >
                <div class="cont-logo-cs-utag">
                  <v-img src="../assets/logos/utag-logo.svg" class="logo-cs" />
                </div>
                <p class="txt-csoon">
                  Agencia de tecnología para marketing ahora en México. Nos
                  fusionamos para brindar el mejor servicio a nuestros clientes.
                </p>
              </v-card>
            </v-flex>
          </v-card>
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
.card-coming {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-s {
  width: 60%;
}
.card-prox-g {
  width: 100%;
  height: 70vh;
}
.xl {
  height: 80vh;
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
  width: 75%;
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
@media only screen and (max-width: 600px) {
  .cont-coming-s {
    padding-top: 80%;
  }
  .card-coming {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-prox {
    flex-direction: column;
  }
  .card-s {
    width: 90%;
  }
  .card-prox-g {
    width: 95%;
    height: 30vh;
  }
  .xl {
    height: 45vh;
  }
  .card-prox-g:nth-of-type(1) {
    height: 70vh;
  }
  .card-prox-g:nth-of-type(2) {
    height: 70vh;
  }
  .card-prox-g:nth-of-type(3) {
    height: 70vh;
  }
  .prox {
    width: 90%;
    text-align: center;
    font-size: 0.8rem;
  }
  .cont-logo-cs {
    display: flex;
    width: 95%;
  }
}
</style>
