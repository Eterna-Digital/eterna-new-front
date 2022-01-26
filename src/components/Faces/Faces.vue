<template>
  <div class="contai">
    <div class="cont-sid d-flex flex-column justify-center align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink"
        contain
        src="../../assets/elements/eterna-logo.svg"
        transition="scale-transition"
        width="130"
      />
    </div>
    <div class="cont-cc">
      <div class="date-cont">
        <p class="date">{{ currentDateTime() }}</p>
      </div>
      <div class="face-cont">
        <div class="face" id="face-1">
          <v-img
            class="img-sl mb-2"
            src="../../assets/svg caritas/blink.svg"
            width="5"
            id="face-1-1"
          />
          <v-img
            class="img-sl mb-2"
            src="../../assets/svg caritas/blush.svg"
            width="5"
            id="face-2-1"
          />
        </div>

        <div class="face" id="face-2">
          <v-img
            class="img-sl mb-2"
            id="face-4-1"
            src="../../assets/svg caritas/cute.svg"
          />
          <v-img
            class="img-sl mb-2"
            id="face-1-2"
            src="../../assets/svg caritas/surprise.svg"
          />
        </div>
        <div class="face" id="face-3">
          <v-img
            class="img-sl mb-2"
            id="face-3-1"
            src="../../assets/svg caritas/cool.svg"
          />
          <v-img
            class="img-sl mb-2"
            id="face-2-2"
            src="../../assets/svg caritas/happy.svg"
          />
        </div>
        <div class="face" id="face-4">
          <v-img
            class="img-sl mb-2"
            id="face-4-2"
            src="../../assets/svg caritas/relief.svg"
          />
          <v-img
            class="img-sl"
            id="face-3-2"
            src="../../assets/svg caritas/laugh.svg"
          />
        </div>
      </div>
    </div>
    <div class="line-side ml-3 mt-2"></div>
    <div class="social mt-8 d-flex justify-space-between">
      <button class="social-icon ml-3">
        <a
          href="https://www.linkedin.com/company/eterna-digital"
          target="_blank"
          class="btn-link-cbm"
        >
          <img src="../../assets/elements/linkedin.svg" class="link-d" />
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  mounted() {
    for (let i = 1; i <= 4; i++) {
      const tl3 = gsap.timeline({
        repeat: -1,
        // yoyo: true,
        delay: i * -4,
        ease: "elastic.in(1, 0.1)",
      });
      const face = `#face-${i}`;
      tl3
        .fromTo(
          `${face}-1`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
          }
        )
        .to(
          `${face}-1`,
          {
            opacity: 0,
            scale: 1,
          },
          "+=2"
        )
        .fromTo(
          `${face}-2`,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
          }
        )
        .to(
          `${face}-2`,
          {
            opacity: 0,
            scale: 0,
          },
          "+=3"
        );
    }
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getDate() +
        " 0" +
        (current.getMonth() + 1) +
        " " +
        current.getFullYear();

      const dateTime = date;

      return dateTime;
    },
  },
};
</script>

<style>
.contai {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: flex-start;
  position: relative;
  z-index: 25;
}
.cont-sid {
  margin: 30% 0 20% 0;
}
.cont-cc {
  margin-top: 80%;
}
.cont-cc .face {
  position: relative;
}
.cont-cc .face .img-sl {
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  transform: rotate(360deg);
  display: block;
  margin: 0rem 0 0rem;
  width: 1.2rem !important;
  height: 1.2rem !important;
}
.date-cont {
  margin-bottom: 100%;
}
.date {
  margin-left: 1rem;
  position: absolute;
  transform: rotate(180deg);
  transform-origin: left top 0;
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  font-family: "Source Code Pro", monospace !important;
  font-weight: lighter;
  color: rgb(255, 255, 255);
  font-size: 0.8rem;
  letter-spacing: 1px;
}
.line-side {
  width: 1px;
  height: 3rem;
  background: rgb(255, 255, 255);
}
.social {
  width: 100%;
  z-index: 20;
}
.social-icon {
  width: 1rem;
  height: 1rem;
  background-image: url("../../assets/elements/linkedin.svg");
}
</style>
