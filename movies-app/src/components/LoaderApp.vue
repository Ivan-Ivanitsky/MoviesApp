<template>
  <div class="loader-wrapper">
    <span class="loader"></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Loaded"]),
  },
};
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1000;
  /* bottom: 0; */
}
.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: rgba(89, 100, 110, 0.15) rgba(74, 85, 95, 0.25)
    rgba(187, 199, 209, 0.35) rgba(201, 206, 211, 0.5);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animloader {
  0% {
    border-color: rgba(183, 51, 183, 0.15) rgba(204, 156, 219, 0.25)
      rgba(86, 183, 51, 0.35) rgba(163, 82, 173, 0.75);
  }
  33% {
    border-color: rgba(51, 122, 183, 0.75) rgba(51, 122, 183, 0.15)
      rgba(51, 122, 183, 0.25) rgba(51, 122, 183, 0.35);
  }
  66% {
    border-color: rgba(51, 122, 183, 0.35) rgba(51, 122, 183, 0.75)
      rgba(51, 122, 183, 0.15) rgba(51, 122, 183, 0.25);
  }
  100% {
    border-color: rgba(51, 122, 183, 0.25) rgba(51, 122, 183, 0.35)
      rgba(51, 122, 183, 0.75) rgba(51, 122, 183, 0.15);
  }
}
</style>