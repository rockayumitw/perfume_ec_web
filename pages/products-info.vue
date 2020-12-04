<template>
  <section class="products __product-info">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 order-3 order-md-1">
          <img
            class="img-fluid mb-4"
            src="/assets/images/product1.jpg"
            alt=""
          />
          <div class="row">
            <div class="col-12 col-md-6 mb-4">
              <img class="img-fluid" src="/assets/images/product2.jpg" alt="" />
            </div>
            <div class="col-12 col-md-6 mb-4">
              <img class="img-fluid" src="/assets/images/product2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 item-description order-2 order-md-2">
          <h3>CHANEL N°5</h3>
          <p class="mb-xxs-32">
            N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
          </p>
          <div class="item-price mb-xxs-12">NT$4,980</div>
          <div class="form-group d-flex">
            <select class="input-left-radius border-primary" name="" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
            </select>
            <input
              class="btn btn-sm btn-brown btn-right-radius border-primary"
              type="button"
              value="加入購物車"
              @click="toast('已加入我的購物車')"
            />
          </div>
          <a
            href="javascript:void(0)"
            class="add-favoriate d-flex align-items-center"
            @click="toast('已加入我的收藏')"
          >
            <span class="material-icons"> favorite </span>加入我的收藏
          </a>
          <div class="item-tip-content">
            <b>商品購買須知</b>
            <p class="mb-xxs-24">
              產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
              商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。
              D’Perfume
              盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
            </p>
            <b>退換貨須知</b>
            <p>
              依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8 order-1 order-md-last">
          <img class="img-fluid" src="/assets/images/product1.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "inner-page",
  components: {},
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
