<template>
  <div class="wrap them-TW">
    <transition name="fade">
      <Loading />
    </transition>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Loading from "~/components/Loading/Loading.vue";
// import { searchMixins } from '../mixins/search'

export default {
  name: "",
  head: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    click() {
      this.$swal("哈囉");
    },
  },
  components: {
    Header,
    Footer,
    Loading,
  },
};
</script>
