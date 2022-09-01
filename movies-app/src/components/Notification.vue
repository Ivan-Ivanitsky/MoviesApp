<template>
  <div style="color: #fff"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "notifications",

  computed: {
    ...mapGetters(["loadMesseges"]),
  },

  methods: {
    showNotifyMessage({ msg, title, variant }) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant,
      });
    },
  },
  watch: {
    loadMesseges: "showNotifyMessage",
  },
};
</script>