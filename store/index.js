// import server from '../apis/http.js'
// import { apiTestData } from "../apis/course";
import axios from 'axios'
import { apiTestData } from '~/api/course.js'

export const state = () => ({
  isLogin: false,       // 登入狀態
  isCountDown: false,   // 倒數狀態
  isLoading: false
})

export const getters = {  // 取得變數, 取用state資料計算
  getLogin: state => () => state.isLogin,                                 // 設定登入地方
  getTestData: state=> () => state.testData,        // 將資料放入testData(測試)
  
}

export const mutations = { // 這邊才是修改store資料狀態的地方
  SET_LOGIN (state, val) {
    state.isLogin = val
  },
  SET_USERDATA (state, val){
    state.userData = val
  },
  SET_COUNTDOWN (state, val){
    state.isCountDown = val
  },
  SET_RECOMMENDEDMASTERDATA (state, val){
    // 要調整修改成物件
    state.recommendedMasterData = val
  },
  SET_SLIDERDATA (state,data){                    // 設定首頁slider資料
    console.log(state,data)
    state.sliderData = data
  },
  SET_HOTSTREAMDATA (state, data){                // 設定熱門直播資料
    console.log(state, data)
    state.hotStreamData = data
  },
  UPDATE_HOTSTREAMDATA_BOOKMARK (state, val){     // 改變書籤樣式
    this.state.hotStreamData = this.state.hotStreamData.map(hotStreamData => {
      hotStreamData.id === val.id ? hotStreamData.bookMark = val.bookMark : hotStreamData.bookMark
      return hotStreamData
    });
  },
  SET_TESTDATA (state, data){                    // 設定測試取回資料(測試)
    state.testData = data;
  }
}

export const actions = { // 提交的是mutation, 不是直接變更狀態
  setLogin(state, val) {
    state.commit("SET_LOGIN", val)
  },
  setCountDown(state, val) {
    state.commit("SET_COUNTDOWN", val)
  },
  setSliderData(state,val){
    state.commit("SET_SLIDERDATA", val)
  },
  setRecommendMasterData(state, val) {
    state.commit("SET_RECOMMENDEDMASTERDATA", val)
  },
  setHotStreamData(state, val) {    // 設定熱門直播資料
    state.commit("SET_HOTSTREAMDATA", val)
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
  async getTestData({ commit }){  // 測試取得資料
    const res = await apiTestData().then(res => res.data).catch(err => console.error(err));
    commit('SET_TESTDATA',res)
  },
}
