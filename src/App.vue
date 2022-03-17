<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      dark
      class="sideb d-flex flex-column align-center"
      elevation="0"
    >
      <Faces />
    </v-app-bar>

    <v-main class="main pa-0">
      <Home />
      <Carousel />
      <Projects />
      <ComingSoon />
      <Form />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Carousel from "./views/Carousel";
import Projects from "./views/Projects.vue";
import ComingSoon from "./views/ComingSoon.vue";
import Form from "./views/Form.vue";
import Footer from "./components/Footer.vue";
import Faces from "./components/Faces/Faces.vue";
export default {
  name: "App",
  components: {
    Home,
    Carousel,
    Projects,
    ComingSoon,
    Form,
    Footer,
    Faces,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.sideb {
  width: 15%;
  margin-top: 20% !important;
  height: 100% !important;
  z-index: 25 !important;
  background-color: rgb(7, 53, 11) !important;
}
.main{
  overflow: hidden !important;
}
@media only screen and (max-width: 600px) {
.sideb {
  width: 100%;
  margin-top: 80% !important;
  height: 10% !important;
}
}
</style> 