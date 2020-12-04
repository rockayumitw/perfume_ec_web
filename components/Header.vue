<template>
  <header
    class="fixed-top bg-white"
    :class="{ unpinned: scrolled, sticky: isActive }"
  >
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="">
        <b-navbar-brand href="/">
          <img width="128" src="/assets/images/d’Perfume@2x.png" alt="" />
        </b-navbar-brand>
        <div class="tool d-flex align-items-center">
          <nuxt-link
            to="#"
            class="nav-link d-md-flex d-lg-none align-items-center text-dovegray"
          >
            <span class="material-icons"> shopping_cart </span>
            <span class="cart-count">3</span>
          </nuxt-link>
          <b-navbar-toggle target="nav-collapse" class="hamburger __rotate-x">
            <i></i>
            <i></i>
            <i></i>
          </b-navbar-toggle>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <!--<md-icon>menu</md-icon>-->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              href="/perfume_ec_web/dist/products"
              order-sm="2"
              order-xl="1"
            >
              <span class="material-icons d-none d-lg-block"> store </span>
              Product
            </b-nav-item>

            <b-nav-item
              href="/perfume_ec_web/dist/login"
              order-sm="1"
              order-xl="2"
            >
              <span class="material-icons d-none d-lg-block"> person </span>
              log in
            </b-nav-item>
            <b-nav-item href="#">
              <span class="material-icons d-none d-lg-block"> favorite </span>
              Wishlist
            </b-nav-item>
            <b-nav-item href="#" class="d-none"> Blog </b-nav-item>
            <b-nav-item href="#" class="d-none"> Contact </b-nav-item>
            <b-nav-item href="#" class="d-none d-lg-block">
              <span class="material-icons d-none d-lg-block">
                shopping_cart
              </span>
              cart (3)
            </b-nav-item>
            <b-nav-item href="#" class="d-none">
              <span class="material-icons d-none d-lg-block"> person </span>
              Mypage
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <ProductsMenu v-if="route" />
  </header>
</template>

<script>
import { stickyMixins } from "../mixins/sticky.js";
import ProductsMenu from "@/components/ProductsMenu";

export default {
  mixins: [stickyMixins],
  data() {
    return {};
  },
  computed: {
    route() {
      if (this.$router.history.current.name != "index") {
        return true;
      }
    },
  },
  mounted() {},

  methods: {},
  components: {
    ProductsMenu,
  },
};
</script>
