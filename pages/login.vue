<template>
  <section class="login pt-xxs-40 pb-xxs-80 mb-xxs-80">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-12 col-md-8">
          <img class="img-fluid" src="../assets/images/login1.jpg" alt="" />
        </div>
        <div class="col-12 col-md-4">
          <div class="login-content">
            <h3 class="font-weight-bold">Log in</h3>
            <b-form @click="submit()" @reset="reset()">
              <div class="form-group">
                <label for="email">帳號</label>
                <input
                  v-model="form.email"
                  id="email"
                  name="email"
                  class="input-lg"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">密碼</label>
                <input
                  v-model="form.password"
                  id="password"
                  name="password"
                  class="input-lg"
                  type="password"
                  placeholder="請輸入密碼"
                  required
                />
              </div>
              <div
                class="pt-xxs-12 d-flex align-items-center justify-content-between"
              >
                <a class="text-more" href="javascript:void(0)">忘記密碼</a>
                <div class="form-group d-flex mb-0">
                  <input
                    class="btn btn-white btn-xs mr-1"
                    type="button"
                    value="註冊"
                    @click="register()"
                  />
                  <input
                    class="btn btn-brown btn-xs"
                    type="submit"
                    value="登入"
                  />
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "inner-page",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.$router.push({ name: "member-center" });
    },
    submit() {},
    reset() {
      form.email = "";
      form.password = "";
    },
  },
};
</script>
