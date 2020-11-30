<template>
  <div class="loading-mask">
    <div class="line">
      <div class="bar"></div>
    </div>
    <div class="loading-logo text-center">
      <img class="logo fadeIn" src="../../assets/images/d’Perfume@2x.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(function () {
      let loadingMask = document.getElementsByClassName("loading-mask")[0];
      let logo = document.getElementsByClassName("logo")[0];
      let line = document.getElementsByClassName("line")[0];
      let bar = document.getElementsByClassName("bar")[0];
      logo.classList = "logo fadeOut";
      line.classList = "line fadeOut";
      bar.classList = "bar fadeOut";
      loadingMask.classList = "loading-mask fadeOut";
    }, 7000);
  },
};
</script>
