<template>
  <div class="form-cont d-flex justify-center align-center">
    <v-card elevation="0" color="transparent" class="d-flex flex-column form-c">
      <span class="line-f"></span>
      <h1 class="mt-3">CONTACTO</h1>
      <p class="mt-5">COMUNÍCATE CON NUESTRO EQUIPO!</p>
      <input type="text" class="input-form pa-3 mt-2" placeholder="NOMBRE" />
      <input type="text" class="input-form pa-3 mt-6" placeholder="CORREO" />
      <textarea
        placeholder="ESCRIBE ALGO..."
        wrap="off"
        cols="30"
        rows="5"
        class="pa-3 mt-6"
      />
      <div class="btn-cont d-flex justify-center">
        <button class="btn-form">ENVIAR</button>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-cont {
  font-family: "Source Code Pro", monospace !important;
  width: 100vw;
  background-color: #272626;
  padding-bottom: 10%;
  padding-top: 10%;
}

.form-cont p,
h1 {
  font-weight: lighter;
  color: honeydew;
}
.form-cont h1 {
  letter-spacing: 4px;
}
.input-form {
  border: 2px solid #3e4243 !important;
  color: #fff;
  place-content: #fff;
  outline: none;
}
.input-form:nth-of-type(1) {
  text-transform: capitalize;
}
input::placeholder {
  color: #ffffff;
  opacity: 1;
  font-weight: lighter;
  font-size: 0.8rem;
}
textarea {
  border: 2px solid #3e4243 !important;
  outline: none;
  resize: none;
  overflow: auto;
  color: #ffffff;
}
textarea::placeholder {
  color: #ffffff;
  opacity: 1;
  font-weight: lighter;
  font-size: 0.8rem;
}
.btn-form {
  margin-top: 8% !important;
  width: 60%;
  height: 2.5rem;
  background: #fff;
  border: 1px solid #ffffff !important;
  border: none;
  position: relative;
  z-index: 2;
  font-family: "Source Code Pro", monospace;
  color: #272626;
  font-weight: lighter;
  font-size: 0.75rem;
  text-align: center;
  letter-spacing: 2px;
}
.btn-form:hover {
  background: #272626;
  color: #fff;
}
@media only screen and (max-width: 600px) {
  .form-cont {
    padding-top: 40%;
  }
  .input-form {
    width: 95%;
  }
  textarea {
    width: 95%;
  }
}
</style>
