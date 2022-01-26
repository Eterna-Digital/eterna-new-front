<template>
  <v-footer dark padless class="pt-16">
    <v-card class="flex justify-center pl-10" flat tile color="#2F2F2F">
      <v-card width="70%" class="pl-16 mt-10" elevation="0" color="#2F2F2F">
        <v-card-title class="title-f">
          <v-img src="../assets/elements/eterna-logo.svg" class="log-footer" />
            </v-card-title>
          <v-spacer></v-spacer>
          <v-container class="mt-5" fluid grid-list-md wrap>
            <v-layout row wrap>
              <v-flex d-flex xs12 sm12 md3 class="mr-8">
                <div class="d-flex flex-column">
                  <p class="h-text ">SERVICIOS</p>
                  <p class="txt-f">
                    Buscamos proyectos que logren<br/> miles  de usuarios. Nuestra
                    holding<br/> solo se enfoca en proyectos que <br/> nos lleven avivir
                    en un mejor futuro. 
                  </p>
                </div>
              </v-flex>
              <v-flex d-flex xs12 sm12 md3 class="mr-8">
                <div class="d-flex flex-column">
                  <p class="h-text" style="color: transparent">SERVICIOS</p>
                  <p class="txt-f">
                    Somos programadores. <br/>Grupo de inversionistas.<br/> Lideres en
                    búsqueda de nuevos<br/> proyectos.
                  </p>
                </div>
              </v-flex>
              <v-flex d-flex xs12 sm12 md4>
                <div class="d-flex flex-column">
                  <p class="h-text">CONTACTO</p>
                  <p class="txt-f">
                    55-12335678<br/> 
                    contacto@eterna.digital
                  </p>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        
      </v-card>

      <v-card-text class="py-2 mt-5 white--text text-center txt-f">
        <v-icon x-small color="#FFF" class="mb-1 mr-1"
          >mdi-alpha-c-circle-outline</v-icon
        >{{ new Date().getFullYear() }} — Eterna
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.title-f{
    width: 20% !important;
}
.h-text{
    font-size: 0.6rem;
    font-weight: lighter;
}
.txt-f{
    font-size: 0.7rem;
    font-weight: lighter;
    line-height: 14px;
}
</style>
