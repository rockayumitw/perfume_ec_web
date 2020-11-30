<template>
  <!--
    1. 把menu-list 完成訂單
    2. fontsize設定
    3. scss
    4. code
    -->

  <section class="member-center">
    <b-container>
      <b-row>
        <b-col md="2" sm="12" order="1" order-sm="1" order-md="1" order-lg="1">
          <h4 class="font-weight-bold text-label-member mb-xxs-28 d-none d-md-block">會員中心</h4>
          <ul class="member-menu">
            <li class="mb-xxs-24" @click="isActive('edit')" :class="nowPanelName == 'edit' ? 'active' : ''">會員資料修改</li>
            <li class="mb-xxs-24" @click="isActive('orderSearch')" :class="nowPanelName == 'orderSearch' ? 'active' : ''">訂單查詢</li>
            <li class="mb-xxs-24" @click="isActive('application')" :class="nowPanelName == 'application' ? 'active' : ''">退/換貨申請</li>
          </ul>
        </b-col>
        <b-col md="7" sm="12" order="3" order-sm="3" order-md="2" order-lg="2">
          <div class="member-pane form-group text-oslogray" v-if="nowPanelName == 'edit'">
            <h5 class="font-weight-bold mb-0">個人資料修改</h5>
            <hr class="text-label-member mt-2" />
            <b-row class="mb-4">
              <b-col sm="2" md="3" lg="2">
                <label class="text-label-member">會員帳號</label>
              </b-col>
              <b-col sm="10" md="9" lg="10"> email@example.com </b-col>
            </b-row>
            <b-row class="mb-4 align-items-center">
              <b-col sm="2" md="3" lg="2">
                <label for="userName" class="text-label-member">會員姓名</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="text" id="userName" name="userName" aria-label="First name" class="form-control input-lg input-radius" />
              </b-col>
            </b-row>
            <b-row class="mb-4 align-items-center">
              <b-col sm="2" md="3" lg="2">
                <label for="sex" class="text-label-member">性別</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <select class="custom-select input-lg" id="sex">
                  <option selected>Choose...</option>
                  <option value="1">女</option>
                  <option value="2">男</option>
                  <option value="3">other</option>
                </select>
              </b-col>
            </b-row>
            <b-row class="mb-4 align-items-center">
              <b-col sm="2" md="3" lg="2">
                <label for="email" class="text-label-member">電子信箱</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="text" id="email" name="email" aria-label="email" class="form-control input-lg" />
              </b-col>
            </b-row>
            <b-row class="mb-4 align-items-center">
              <b-col sm="2" md="3" lg="2">
                <label for="phone" class="text-label-member">手機號碼</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="text" id="phone" name="phone" aria-label="phone" class="form-control input-lg" />
              </b-col>
            </b-row>
            <b-row class="mb-4 align-items-start">
              <b-col sm="2" md="3" lg="2">
                <label for="address" class="text-label-member">聯絡地址</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <b-row>
                  <b-col cols="6" class="mb-2">
                    <select class="custom-select input-lg" id="area">
                      <option selected>台灣及離島</option>
                      <option value="1">台灣</option>
                    </select>
                  </b-col>
                  <b-col cols="6" class="mb-2"></b-col>
                  <b-col cols="6" class="mb-2">
                    <select class="custom-select input-lg" id="">
                      <option selected>縣市</option>
                      <option value="1">高雄市</option>
                    </select>
                  </b-col>
                  <b-col cols="6" class="mb-2">
                    <select class="custom-select input-lg" id="">
                      <option selected>區域</option>
                      <option value="1">苓雅區</option>
                    </select>
                  </b-col>
                  <b-col>
                    <input type="text" placeholder="請輸入地址" class="rounded input-lg mb-2" />
                    <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted" class="text-label-member"> 我願意收到最新優惠情報 </b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="mb-4 align-items-start">
              <b-col sm="2" md="3" lg="2">
                <label for="address" class="text-label-member">配送地址</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <b-row>
                  <b-col sm="6" class="mb-2">
                    <select class="custom-select input-lg" id="area">
                      <option selected>台灣及離島</option>
                      <option value="1">台灣</option>
                    </select>
                  </b-col>
                  <b-col sm="6" class="mb-2"></b-col>
                  <b-col sm="6" class="mb-2">
                    <select class="custom-select input-lg" id="">
                      <option selected>縣市</option>
                      <option value="1">高雄市</option>
                    </select>
                  </b-col>
                  <b-col sm="6" class="mb-2">
                    <select class="custom-select input-lg" id="">
                      <option selected>區域</option>
                      <option value="1">苓雅區</option>
                    </select>
                  </b-col>
                  <b-col sm="6"></b-col>
                  <b-col sm="12" class="mb-2">
                    <input type="text" placeholder="請輸入地址" class="input-lg border-radius" />
                  </b-col>
                  <b-col>
                    <input type="button" value="確定修改" class="btn btn-brown btn-md input-lg" />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>

            <h5 class="font-weight-bold mb-0">個人資料修改</h5>
            <hr class="text-label-member mt-2" />
            <b-row class="mb-xxs-16 mb-sm-20 align-items-start">
              <b-col sm="2" md="3" lg="2">
                <label for="oldPassword" class="text-label-member">舊密碼</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="password" id="oldPassword" name="oldPassword" aria-label="oldPassword" class="form-control input-lg" />
              </b-col>
            </b-row>
            <b-row class="mb-xxs-16 mb-sm-20 align-items-start">
              <b-col sm="2" md="3" lg="2">
                <label for="newPassword" class="text-label-member">新密碼</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="password" id="newPassword" name="newPassword" aria-label="newPassword" class="form-control input-lg" />
              </b-col>
            </b-row>
            <b-row class="mb-xxs-16 mb-sm-20 align-items-start">
              <b-col sm="2" md="3" lg="2">
                <label for="againNewPassword" class="text-label-member">確認密碼</label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="password" id="againNewPassword" name="againNewPassword" aria-label="againNewPassword" class="form-control input-lg" />
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="2" md="3" lg="2" class="d-none d-sm-block">
                <label for="againNewPassword" class="text-label-member"></label>
              </b-col>
              <b-col sm="10" md="9" lg="10">
                <input type="button" value="變更密碼" class="btn btn-brown btn-md input-lg" />
              </b-col>
            </b-row>
          </div>
          <div class="member-pane" v-if="nowPanelName == 'orderSearch'">你想查詢甚麼呢?</div>
          <div class="member-pane" v-if="nowPanelName == 'application'">恭喜你誤入黑心商店!你沒得退換貨唷!!!</div>
        </b-col>
        <b-col md="3" sm="12" order="2" order-sm="2" order-md="3" order-lg="3">
          <b-row no-gutters class="member-info mb-3">
            <b-col cols="4" sm="4" md="12" lg="6" class="text-label-member d-flex align-items-center"><span class="material-icons text-dark"> person </span> 會員編碼</b-col>
            <b-col cols="8" sm="4" md="12" lg="6" class="text-gray">T00020080615</b-col>
          </b-row>
          <b-row no-gutters class="member-info">
            <b-col cols="4" sm="4" md="12" lg="5" class="text-label-member mb-2">購物車</b-col>
            <b-col cols="8" sm="8" md="12" lg="7" class="text-label-member mb-2">56</b-col>
            <b-col cols="4" sm="4" md="12" lg="5" class="text-label-member mb-2">我的收藏</b-col>
            <b-col cols="8" sm="8" md="12" lg="7" class="text-label-member mb-2">23</b-col>
            <b-col cols="4" sm="4" md="12" lg="5" class="text-label-member mb-2">完成訂單</b-col>
            <b-col cols="8" sm="8" md="12" lg="7" class="text-label-member mb-2">8</b-col>
            <b-col cols="4" sm="4" md="12" lg="5" class="text-label-member mb-2">會員紅利</b-col>
            <b-col cols="8" sm="8" md="12" lg="7" class="text-label-member mb-2">2680</b-col>
          </b-row>
          <small class="text-tip mb-xxs-40 d-block">新戶輸入邀請碼即可獲贈紅利點數1000點</small>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  layout: "inner-page",
  components: {},
  data() {
    return {
      nowPanelName: "",
      panelsName: ["edit", "orderSearch", "application"],
    };
  },
  mounted() {
    this.nowPanelName = "edit";
  },
  methods: {
    isActive(name) {
      this.nowPanelName = name;
    },
  },
};
</script>
