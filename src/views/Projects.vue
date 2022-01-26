<template>
  <div class="projects-cont d-flex flex-column align-center">
    <BeCloud />
    <TiendaLegal />
    <Reclutachat />
    <CbMarket/>
  </div>
</template>

<script>
import BeCloud from "../components/Projects/BeCloud.vue";
import CbMarket from '../components/Projects/CbMarket.vue';
import Reclutachat from "../components/Projects/Reclutachat.vue";
import TiendaLegal from "../components/Projects/TiendaLegal.vue";

export default {
  components: {
    BeCloud,
    TiendaLegal,
    Reclutachat,
    CbMarket,
  },
};
</script>

<style>
.projects-cont {
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
