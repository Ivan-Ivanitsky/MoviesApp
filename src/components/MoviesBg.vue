<template>
  <div class="movies-bg-wrapper">
    <div class="movie-bg" :style="stylePoster">
      <div class="errorMessage" v-if="error" style="color: #fff">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bgDefault: `linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16))`,
    };
  },
  computed: {
    ...mapState({
      bgPoster: (state) => state.movies.bgPoster,
      error: (state) => state.movies.error,
    }),
    stylePoster() {
      return {
        "background-image": this.bgPoster
          ? `url(${this.bgPoster})`
          : this.bgDefault,
      };
    },
  },
};
</script>

<style scoped>
.movies-bg-wrapper {
  height: 100%;
}
.movie-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1000;
  background-position: center;
  transition: all 0.2s ease-in;
}
.movie-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background: linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16));
}
.errorMessage {
  color: rgb(255 255 255);
  display: flex;
  font-size: 45px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  bottom: 0;
  font-weight: 800;
  font-family: sans-serif;
  background: linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16));
}
</style>