<template>
  <footer class="bg-primary">
    <b-container class="d-flex justify-content-between align-items-center">
      <h2 class="d-flex align-items-center">
        <a href="javscript:void(0)">
          <img width="128" src="/images/d’Perfumew@2x-white.png" alt="" />
        </a>
        <small class="text-white">© 2020. All Rights Reserved.</small>
      </h2>
      <ul class="d-xl-flex d-lg-flex d-md-flex d-none">
        <li><nuxt-link to="/products">Product</nuxt-link></li>
        <li><a href="javscript:void(0)">Blog</a></li>
        <li><a href="javscript:void(0)">Contact</a></li>
      </ul>
    </b-container>
  </footer>
</template>

<script>
import GoTop from "~/components/GoTop.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    GoTop,
  },
};
</script>
