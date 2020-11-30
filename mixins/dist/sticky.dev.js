"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stickyMixins = void 0;

var _gsap = require("gsap/dist/gsap");

var _ScrollTrigger = require("gsap/dist/ScrollTrigger");

_gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger);

var stickyMixins = {
  data: function data() {
    return {
      stickyPos: 500,
      limitPos: 1000,
      scrolled: false,
      lastPos: 0,
      isActive: false // 判斷卷軸滑道位置
      // isGoTop: false, 
      // isTabsActive: false, 
      // isStickyClass: {
      //     isGoTopClass:'',
      //     isSearchClass:'',
      //     isPriceBoxClass:'',
      //     isRightBoxAreaClass:'',
      // },       
      // isGoTopClass: '',
      // isDev:'',      

    };
  },
  mounted: function mounted() {
    this.Resize();
  },
  methods: {
    Resize: function Resize() {
      // $('body').css('overflow','auto')
      // lg | md | sm | xs
      if (window.innerWidth > 992) {
        this.openInput = false;
        this.isDev = 'lg';
      }

      if (window.innerWidth < 992 && window.innerWidth > 767) {
        this.isDev = 'md';
        this.isOpenShareBtn = true;
      }

      if (window.innerWidth < 767 && window.innerWidth > 575) {
        this.openInput = false;
        this.isDev = 'sm';
      }

      if (window.innerWidth < 575 && window.innerWidth > 321) {
        this.openInput = false;
        this.isDev = 'xs';
      }

      if (window.innerWidth < 321) {
        this.openInput = false;
        this.isDev = 'xxs';
      }

      this.stickyButtonPos(); // this.stickyPriceBox()
    },
    ScrollAnimation: function ScrollAnimation() {
      // console.log('tst')
      this.scrollY = window.scrollY;
      this.stickyButtonPos();

      if (window.scrollY > 100) {
        this.isActive = true;
      }

      if (window.scrollY < 100) {
        this.isActive = false;
      }

      if (this.lastPos < window.scrollY && this.stickyPos < window.scrollY) {
        this.isActive = true;
      }

      if (this.lastPos < window.scrollY && this.limitPos < window.scrollY) {
        if (window.innerWidth < 992) {
          return false;
        }

        this.scrolled = true;
      }

      if (this.lastPos > window.scrollY) {
        this.scrolled = false;
      }

      this.lastPos = window.scrollY;
    },
    stickyButtonPos: function stickyButtonPos() {// if(location.pathname == '/'){ 
      //     let footerTopPos = $(".section-feature").offset().top / 2
      //     let footerBottomPos = $(".footer-bottom").offset().top / 2 
      //     let footerPrivcyPos = $('.footer-privcy').offset().top  / 1.5 
      //     if (this.isDev == 'lg'){
      //         footerTopPos = footerTopPos + 50
      //         if(window.scrollY > footerTopPos){
      //             this.isStickyClass.isGoTopClass = '__pc'
      //         }else{
      //             this.isStickyClass.isGoTopClass = ''
      //         }
      //     }
      //     if(this.isDev == 'md'){
      //         if(window.scrollY > footerBottomPos){
      //             this.isStickyClass.isGoTopClass = '__md'
      //             this.isStickyClass.isSearchClass = '__md'
      //         }else{
      //             this.isStickyClass.isGoTopClass = ''
      //             this.isStickyClass.isSearchClass = ''
      //         }
      //     }
      //     if(this.isDev == 'sm'){
      //         footerBottomPos = footerBottomPos + 200
      //         if(window.scrollY > footerBottomPos){
      //             this.isStickyClass.isSearchClass = '__xs'
      //         } else {
      //             this.isStickyClass.isSearchClass = ''
      //         }
      //         this.isStickyClass.isGoTopClass = '__mb'
      //     }
      //     if(this.isDev == 'xs'){
      //         footerBottomPos = footerBottomPos + 500
      //         if(window.scrollY > footerBottomPos){
      //             this.isStickyClass.isSearchClass = '__xs'
      //         } else {
      //             this.isStickyClass.isSearchClass = ''
      //         }
      //         this.isStickyClass.isGoTopClass = '__mb'
      //     }
      //     if(this.isDev == 'xxs'){
      //         footerBottomPos = footerBottomPos + 800
      //         if(window.scrollY > footerBottomPos){
      //             this.isStickyClass.isSearchClass = '__xs'
      //         } else {
      //             this.isStickyClass.isSearchClass = ''
      //         }
      //         this.isStickyClass.isGoTopClass = '__mb'
      //     }
      // }
    },
    stickyPriceBox: function stickyPriceBox() {// gsap.to('.price-box' ,{
      //     scrollTrigger: {
      //         trigger: '.footer-area',
      //             // endTrigger: '.footerPrivcy',
      //         markers: true,
      //         onEnter: function (){
      //             // console.log('enter')
      //             $('.price-box').attr('class','price-box pt-xl-4 pt-lg-4 p-2 d-flex align-items-baseline justify-content-between __sticky')
      //         },
      //         onLeaveBack: function (){
      //             $('.price-box').attr('class','price-box pt-xl-4 pt-lg-4 p-2 d-flex align-items-baseline justify-content-between __fix-bottom')
      //         }
      //     }
      // })
      // gsap.to('.box-area' ,{
      //     scrollTrigger: {
      //         trigger: '.tabs',
      //             // endTrigger: '.footerPrivcy',
      //         markers: true,
      //         onEnter: function (){
      //             // console.log('enter')
      //             $('.box-area').css('background','red')
      //             $('.box-area').attr('class','box-area pl-xl-5 pl-lg-2 __fixed-top')
      //         },
      //         onLeaveBack: function (){
      //             $('.box-area').css('background','white')
      //             $('.box-area').attr('class','box-area pl-xl-5 pl-lg-2 __sticky')
      //         }
      //     }
      // })
      // console.log('tt')
      // switch(dev) {
      //     case 'pc':
      //         gsap.to('.goTop' ,{
      //             scrollTrigger: {
      //             trigger: '.footer-top',
      //             start:'top bottom',
      //             markers: true,
      //                 onEnter: function (){
      //                     $('.goTop').attr('class','goTop sticky-go-top __pc')
      //                 },
      //                 onLeaveBack: function (){
      //                     $('.goTop').attr('class','goTop sticky-go-top')
      //                 }
      //             }
      //         })
      //         console.log('pc')
      //         break;
      //     case 'tablet':
      //     gsap.to('.btn-search>img' ,{
      //         scrollTrigger: {
      //         trigger: '.footer-bottom',
      //         markers: true,
      //         onEnter: function (){
      //           console.log('enter')
      //           $('.btn-search>img').attr('class','__tablet')
      //         //   $('.goTop').attr('class','goTop sticky-go-top __tablet')
      //         },
      //         onLeaveBack: function (){
      //           console.log('leave')
      //           $('.btn-search>img').attr('class','')
      //         //   $('.goTop').attr('class','goTop sticky-go-top')
      //         }
      //       }
      //     })
      //     break;
      //   case 'mb':
      //       console.log('mb')
      //     gsap.to('.btn-search>img' ,{
      //         scrollTrigger: {
      //         trigger: '.footerPrivcy',
      //         endTrigger: '.footerPrivcy',
      //         markers: true,
      //         onEnter: function (){
      //           console.log('enter')
      //         //   $('.goTop').attr('class','goTop sticky-go-top __mb')
      //         },
      //         onLeaveBack: function (){
      //         //   $('.goTop').attr('class','goTop sticky-go-top')
      //         }
      //       }
      //     })
      //     break;
      // }
    }
  },
  created: function created() {
    if (process.client) {
      window.addEventListener("scroll", this.ScrollAnimation);
      window.addEventListener("resize", this.Resize);
    }
  },
  destroyed: function destroyed() {
    if (process.client) {
      window.addEventListener("scroll", this.ScrollAnimation);
      window.addEventListener("resize", this.Resize); // window.removeEventListener("scroll", this.ScrollAnimation);
    }
  }
};
exports.stickyMixins = stickyMixins;