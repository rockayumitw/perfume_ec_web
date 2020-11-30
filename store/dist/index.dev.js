"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.getters = exports.state = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _course = require("~/api/course.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import server from '../apis/http.js'
// import { apiTestData } from "../apis/course";
var state = function state() {
  return {
    isLogin: false,
    // 登入狀態
    isCountDown: false,
    // 倒數狀態
    isLoading: false
  };
};

exports.state = state;
var getters = {
  // 取得變數, 取用state資料計算
  getLogin: function getLogin(state) {
    return function () {
      return state.isLogin;
    };
  },
  // 設定登入地方
  getTestData: function getTestData(state) {
    return function () {
      return state.testData;
    };
  } // 將資料放入testData(測試)

};
exports.getters = getters;
var mutations = {
  // 這邊才是修改store資料狀態的地方
  SET_LOGIN: function SET_LOGIN(state, val) {
    state.isLogin = val;
  },
  SET_USERDATA: function SET_USERDATA(state, val) {
    state.userData = val;
  },
  SET_COUNTDOWN: function SET_COUNTDOWN(state, val) {
    state.isCountDown = val;
  },
  SET_RECOMMENDEDMASTERDATA: function SET_RECOMMENDEDMASTERDATA(state, val) {
    // 要調整修改成物件
    state.recommendedMasterData = val;
  },
  SET_SLIDERDATA: function SET_SLIDERDATA(state, data) {
    // 設定首頁slider資料
    console.log(state, data);
    state.sliderData = data;
  },
  SET_HOTSTREAMDATA: function SET_HOTSTREAMDATA(state, data) {
    // 設定熱門直播資料
    console.log(state, data);
    state.hotStreamData = data;
  },
  UPDATE_HOTSTREAMDATA_BOOKMARK: function UPDATE_HOTSTREAMDATA_BOOKMARK(state, val) {
    // 改變書籤樣式
    this.state.hotStreamData = this.state.hotStreamData.map(function (hotStreamData) {
      hotStreamData.id === val.id ? hotStreamData.bookMark = val.bookMark : hotStreamData.bookMark;
      return hotStreamData;
    });
  },
  SET_TESTDATA: function SET_TESTDATA(state, data) {
    // 設定測試取回資料(測試)
    state.testData = data;
  }
};
exports.mutations = mutations;
var actions = {
  // 提交的是mutation, 不是直接變更狀態
  setLogin: function setLogin(state, val) {
    state.commit("SET_LOGIN", val);
  },
  setCountDown: function setCountDown(state, val) {
    state.commit("SET_COUNTDOWN", val);
  },
  setSliderData: function setSliderData(state, val) {
    state.commit("SET_SLIDERDATA", val);
  },
  setRecommendMasterData: function setRecommendMasterData(state, val) {
    state.commit("SET_RECOMMENDEDMASTERDATA", val);
  },
  setHotStreamData: function setHotStreamData(state, val) {
    // 設定熱門直播資料
    state.commit("SET_HOTSTREAMDATA", val);
  },
  //////// 測試api
  // nuxtServerInit(vuexContext, context){
  //   return axios.get('https://jsonplaceholder.typicode.com/users').then( res =>{
  //     console.log(res.data)
  //     const fackData =[]
  //     for(const key in res.data){
  //       fackData.push({...res.data[key], id:key})
  //     }
  //     console.log(fackData)
  //     vuexContext.commit('SET_TESTDATA', fackData)
  //   }).catch( e => context.error(e))
  // },
  getTestData: function getTestData(_ref) {
    var commit, res;
    return regeneratorRuntime.async(function getTestData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _course.apiTestData)().then(function (res) {
              return res.data;
            })["catch"](function (err) {
              return console.error(err);
            }));

          case 3:
            res = _context.sent;
            commit('SET_TESTDATA', res);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports.actions = actions;