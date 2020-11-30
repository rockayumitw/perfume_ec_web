<template>
  <section class="products">
    <div class="container">
      <ul class="row">
        <li class="item col-lg-3 col-md-4 col-sm-4 col-6" v-for="item in products" :key="item.index">
          <nuxt-link :to="item.link" class="d-block">
            <div class="item-pic-box">
              <div class="item-pic" :class="item.img_class"></div>
            </div>
            <div class="item-name">{{ item.name }}</div>
            <div class="item-classis-name">{{ item.classis }}</div>
            <div class="item-price-box">
              <span class="special-price">{{ item.special_price }}</span>
              <span class="delete">{{ item.price }}</span>
            </div>
          </nuxt-link>
          <div class="item-tool">
            <a href="javascript:void"><span class="material-icons mr-2" @click="toast('已加入我的收藏')"> favorite </span></a>
            <a href="javascript:void"><span class="material-icons" @click="toast('已加入我的購物車')"> shopping_cart </span></a>
          </div>
        </li>
      </ul>
      <page />
    </div>
  </section>
</template>

<script>
import subscribe from "~/components/subscribe";
import page from "@/components/pagination";
export default {
  layout: "inner-page",
  head: {},
  components: {
    page,
  },
  data() {
    return {
      products: [
        {
          name: "Poppy & Barley",
          img_class: "pro-1",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-3",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-4",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-5",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-7",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-8",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-10",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-11",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
        {
          name: "Poppy & Barley",
          img_class: "pro-12",
          link: "/products-info",
          classis: "Poppy & Barley",
          price: "NT$1,580",
          special_price: "NT$1,380",
        },
      ],
      counter: 0,
    };
  },
  methods: {
    toast(description) {
      // console.log(append);
      this.counter++;
      this.$bvToast.toast(description, {
        // title: `Toaster ${toaster}`,
        toaster: "b-toaster-top-center",
        solid: false,
        autoHideDelay: 5000,
        appendToast: false,
      });
    },
  },
};
</script>
