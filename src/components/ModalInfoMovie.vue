<template>
  <div class="modal-wrapp">
    <div class="modal-header">
      <h6>Movie-Info</h6>
      <b-icon
        id="modal-close"
        class="modal-close"
        icon="x-lg"
        @click="close"
      ></b-icon>
    </div>
    <div class="modal-info-wrapp">
      <B-col cols="12" md="5" lg="5">
        <div class="modal-pic" :style="poster"></div
      ></B-col>
      <B-col cols="12" md="7" lg="7">
        <h2>{{ movie.Title ? movie.Title : "Uups " }}</h2>
        <b-form-rating
          class="modal-rating"
          id="rating-readonly"
          :value="movie.imdbRating ? movie.imdbRating : raitingRandom"
          readonly
          stars="10"
          show-value
          variant="warning"
        ></b-form-rating>
        <p class="modal-movie-description">
          {{ readMore ? readMore : movieDescrNotFound }}
        </p>
        <div class="mt-3 mb-4">
          <b-badge href="#" variant="success" class="mr-2">{{
            movie.Year
          }}</b-badge>
          <b-badge href="#" variant="success" class="mr-2">{{
            movie.Runtime ? movie.Runtime : "not info"
          }}</b-badge>
          <b-badge href="#" variant="success" class="mr-2">{{
            movie.Genre ? movie.Genre : "not info"
          }}</b-badge>
          <b-badge href="#" variant="success" class="mr-2">{{
            movie.Language ? movie.Language : "English"
          }}</b-badge>
        </div>
        <table class="table small">
          <tr>
            <th>Production</th>
            <td>{{ movie.Production ? movie.Production : movieInfoFalse }}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{{ movie.Country ? movie.Country : movieInfoFalse }}</td>
          </tr>
          <tr>
            <th>Director</th>
            <td>{{ movie.Director ? movie.Director : movieInfoFalse }}</td>
          </tr>
          <tr>
            <th>Writer</th>
            <td>{{ movie.Writer ? movie.Writer : movieInfoFalse }}</td>
          </tr>
          <tr>
            <th>Actors</th>
            <td>{{ movie.Actors ? movie.Actors : movieInfoFalse }}</td>
          </tr>
          <tr>
            <th>Awards</th>
            <td>{{ movie.Awards ? movie.Awards : movieInfoFalse }}</td>
          </tr>
        </table>
      </B-col>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultPoster: `linear-gradient(0deg, rgb(35 28 35 / 83%), rgb(19 8 16))`,
      raitingRandom: Math.floor(Math.random() * 10 + 3),
      movieDescrNotFound: "Description this film not found",
      movieInfoFalse: "Not found  ",
    };
  },
  computed: {
    movieInfo() {
      return this.movie;
    },
    ...mapState({
      bgPoste: (state) => state.movies.bgPoster,
    }),
    poster() {
      return {
        "background-image": this.bgPoste
          ? `url(${this.bgPoste})`
          : this.defaultPoster,
      };
    },
    readMore() {
      return this.movie.Plot !== undefined
        ? `${this.movie.Plot.substring(0, 200)} ...`
        : `Movie info: ${this.movieInfoFalse}`;
    },
  },

  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped >
.modal-header {
  padding: 10px;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    0deg,
    rgba(66, 23, 66, 0.83),
    rgb(98, 31, 80)
  );
  border-bottom: none;
}
.modal-info-wrapp {
  padding: 1rem;
  position: relative;
  display: flex;
  height: 600px;
  overflow: hidden;
}
.modal-pic {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: center/cover no-repeat;
}
.modal-close {
  cursor: pointer;
}
.b-rating {
  border: none !important;
  padding: 0 !important;
}
.modal-movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>