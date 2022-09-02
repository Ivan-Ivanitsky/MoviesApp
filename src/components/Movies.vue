<template>
  <div class="movies-items mb-3">
    <div class="movies-item-poster" :style="posterBg"></div>
    <div class="movies-info-wrapper d-flex justify-content-between flex-column">
      <div class="movies-info-item">
        <h3 class="movies-title">
          {{ movie.Title }}
        </h3>
        <span class="movies-year">
          {{ movie.Year }}
        </span>
      </div>
      <div class="movies-control-wrapper">
        <div class="col">
          <B-button class="btn btn-light" size="md" block @click="showInfoMovie"
            >Info</B-button
          >
        </div>
        <div class="col">
          <B-button class="btn btn-light" size="md" block @click="remove"
            >Remove</B-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movie",
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
  computed: {
    posterBg() {
      return `background-image:url(${this.movie.Poster})`;
    },
  },
  methods: {
    remove() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoMovie() {
      this.$emit("showInfoModals", this.movie.imdbID);
    },
  },
};
</script>


<style scoped>
.movies-items {
  position: relative;
  height: 400px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  overflow: hidden;
  border-radius: 7px;
}
.movies-item-poster {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.movies-info-wrapper {
  height: 100%;
  padding: 10px;
  opacity: 0;
  transition: all 0.2s ease-in;
}
.movies-items:hover {
  transform: scale(1.04);
  box-shadow: 0px 0px 35px 2px rgb(0, 0, 0.5);
}
.movies-items:hover .movies-info-wrapper {
  opacity: 1;
  background: rgba(0, 0, 0, 0.5);
}
.movies-title {
  color: #fff;
  font-size: 23px;
}
.movies-year {
  color: #fff;
}
.movies-control-wrapper {
  display: flex;
}
.btn {
  padding: 4px;
  height: 30px;
  border: none;
  font-size: 15px;
  font-weight: 700;
}
.btn:hover {
  background-color: rgb(242, 236, 81);
}
</style>