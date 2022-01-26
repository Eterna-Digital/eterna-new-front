<template>
  <div class="slide-cont d-flex justify-center align-center">
    <v-card width="100%" elevation="0" color="transparent">
      <div class="cnt-c">
        <v-carousel
          class="carousel"
          cycle
          v-model="model"
          hide-delimiter-background
          delimiter-icon="mdi-circle-small"
        >
          <template v-slot:prev="{ on, attrs }">
            <div class="cont-arrow">
              <v-btn icon color="#FFF" v-bind="attrs" v-on="on">
                <v-img
                  src="../../assets/elements/left-a.svg"
                  class="md-18 controller"
                />
              </v-btn>
            </div>
          </template>
          <template v-slot:next="{ on, attrs }">
            <div class="cont-arrow">
              <div class="d-flex flex-column hr">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <v-btn icon color="#FFF" v-bind="attrs" v-on="on">
                <v-img
                  src="../../assets/elements/right-a.svg"
                  class="md-18 controller"
                />
              </v-btn>
            </div>
          </template>
          <div class="cont-items">
            <v-carousel-item class="item">
              <v-img src="../../assets/slide/becloud-slide.png" />
            </v-carousel-item>
            <v-carousel-item class="item">
              <v-img src="../../assets/slide/reclutachat-carrusel.png" />
            </v-carousel-item>
            <v-carousel-item class="item">
              <v-img src="../../assets/slide/tlegal-carrusel.png" />
            </v-carousel-item>
            <v-carousel-item class="item">
              <v-img src="../../assets/slide/cbmarket_-slide.png" />
            </v-carousel-item>
            <v-carousel-item class="item">
              <v-img src="../../assets/slide/wunnel-carrusel.png" />
            </v-carousel-item>
          </div>
        </v-carousel>
        <v-row justify="end" class="counter caption"> 0{{ model + 1 }} </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
  }),
};
</script>

<style scoped>
.slide-cont {
  width: 100vw;
  height: 100vh;
  margin-top: 15%;
  position: relative;
  z-index: 30;
}
.carousel {
  width: 80%;
}
.cont-items {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cnt-c {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70% !important;
}

.counter {
  width: 22%;
  position: absolute;
  margin-top: 34.5%;
  display: flex;
  justify-content: flex-start !important;
  font-family: "Source Code Pro", monospace !important;
  color: #edecfe;
  font-weight: lighter;
}
.cont-arrow {
  height: 100% !important;
  width: 100%;
  display: flex;
}
.controller {
  width: 2rem;
}
.hr {
  height: 100%;
  width: 1.2rem;
  margin-top: 50%;
  margin-left: -200%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
}
.hr hr {
  margin-top: 1rem;
}
</style>
