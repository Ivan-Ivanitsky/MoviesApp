<template>
  <B-container>
    <B-row>
      <template v-if="isExist">
        <B-col sm="6" md="4" lg="3" v-for="(movie, key) in list" :key="key">
          <movies
            :movie="movie"
            @mouseover.native="bgMovies(movie.Poster)"
            @removeItem="onRemoveItem"
            @showInfoModals="showInfoMovies"
          />
        </B-col>
      </template>
    </B-row>
    <b-modal
      class="movie-modal-body"
      :id="showInfoModalFilms"
      size="xl"
      hide-footer
      hide-header
    >
      <modal-info-movie :movie="modalInfo" @closeModal="onCloseModal" />
    </b-modal>
  </B-container>
</template>

<script>
import movies from "@/components/Movies";
import modalInfoMovie from "@/components/ModalInfoMovie";
import { mapActions } from "vuex";
export default {
  name: "ListMovies",
  components: {
    movies,
    modalInfoMovie,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showInfoModalFilms: "show-modal",
      selectedInfoId: null,
    };
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    modalInfo() {
      return this.selectedInfoId ? this.list[this.selectedInfoId] : null;
    },
  },
  methods: {
    ...mapActions(["removeItemMovie", "moviesFetch"]),
    bgMovies(poster) {
      this.$store.dispatch("changePoster", poster);
    },
    async onRemoveItem(movie) {
      const isConfirm = await this.$bvModal.msgBoxConfirm(
        `${movie.title} Remove ?`
      );
      if (isConfirm) {
        this.removeItemMovie(movie);
        this.moviesFetch();
      }
    },
    showInfoMovies(id) {
      this.selectedInfoId = id;
      this.$bvModal.show(this.showInfoModalFilms);
    },
    onCloseModal() {
      // this.selectedInfoId = null;
      this.$bvModal.hide(this.showInfoModalFilms);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 25px;
}
/* .movies-items {
  height: 390px;
} */
@media (max-width: 1200px) {
  .movies-items {
    height: 320px;
  }
}
@media (max-width: 767px) {
  .movies-items {
    height: 350px;
  }
}
@media (max-width: 576px) {
  .movies-items {
    height: 430px;
    width: 260px;
    margin: auto;
  }
  /* .container {
    padding-right: 5px;
    padding-left: 5px;
  } */
}
</style>
<style>
#show-modal___BV_modal_body_ {
  padding: 0;
}

#show-modal .modal-dialog {
  max-width: 1200px;
}

@media (max-width: 992px) {
  #show-modal .modal-dialog {
    max-width: 768px;
  }
}
@media (max-width: 767px) {
  #show-modal .modal-dialog {
    max-width: 576px;
  }
  #show-modal .modal-dialog .modal-info-wrapp {
    display: grid;
    height: auto;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
@media (max-width: 380px) {
  #show-modal .modal-dialog .modal-info-wrapp {
    padding: 0;
  }
}
</style>