<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      dark
      class="sideb d-flex justify-center"
      elevation="0"
    >
      <div class="d-flex justify-center align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mt-16"
          contain
          src="./assets/eterna-logo.svg"
          transition="scale-transition"
          width="130"
        />

      </div>

    </v-app-bar>

    <v-main class="main pa-0">
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.sideb{
  width: 20%;
  height: 100vh !important;
}
.main{

}
</style>