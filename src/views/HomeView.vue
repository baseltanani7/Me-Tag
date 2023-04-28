<template>
  <div class="home">
    <div class="bg-header">
      <div class="parent-nav">
        <div class="content">
          <div class="top-bar">
            <div id="navigation-icon" @click="showMobileNav = !showMobileNav">
              <img class="logo2" src="../assets/imgs/logo.png" alt="" />
              <img class="img-mune" src="../assets/menu1.png" alt="" />
            </div>

            <div class="main-wrapper">
              <header class="main-header">
                <div class="container">
                  <div class="parent d-flex align-items-center">
                    <div class="logo">
                      <img src="../assets/imgs/logo.png" alt="" />
                    </div>

                    <div class="menu-container d-flex">
                      <ul class="main-menu d-none d-lg-block">
                        <li>
                          <a class="active" href="/">الرئيسية</a>
                        </li>
                        <li>
                          <a href="#parent-information">عن التطبيق</a>
                        </li>
                        <li>
                          <a href="#scrren-img">صور من التطبيق</a>
                        </li>
                        <li>
                          <a href="#parent-information">الدعم الفني</a>
                        </li>
                        <li>
                          <a href="http://www.metag.com.sa">المتجر</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>

        <div id="navigation-mobile" :class="{ open: showMobileNav }">
          <div id="navigation-icon2" @click="showMobileNav = !showMobileNav">
            <img src="../assets/close.png" alt="" />
          </div>
          <ul class="ul-mobile" @click="showMobileNav = !showMobileNav">
            <li>
              <a class="active" href="/">الرئيسية</a>
            </li>
            <li>
              <a href="#parent-information">عن التطبيق</a>
            </li>
            <li>
              <a href="#parent-section-card">صور من التطبيق</a>
            </li>
            <li>
              <a href="#bacgroung-card-custem">الدعم الفني</a>
            </li>
            <li>
              <a href="http://www.metag.com.sa">المتجر</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="parent-panner container" id="parent-panner">
        <div class="row justify-content-between">
          <div class="col-lg-7 col-md-6 col-12">
            <div class="panner-contact">
              <h1>
                أحصل <span class="contact-titel">على تطبيق Me Tag</span> الأن!
              </h1>
              <p>
                نحن نؤمن بأن التقنية هي مفتاح النجاح والتميز،<br />
                ونحن نعمل بجد لتلبية احتياجاتكم وتوفير حلول<br />
                مخصصة تناسب متطلبات عملكم.
              </p>
              <div class="d-flex">
                <a
                  class="btn-panner"
                  href="https://play.google.com/store/apps/details?id=com.innovative_bussiness_solutions.metag"
                >
                  <img src="../assets/android.png" alt="" />
                  متجر <span class="store">جوجل</span>
                </a>
                <a
                  class="btn-panner2"
                  href="https://apps.apple.com/us/app/me-tag-app/id1660238489"
                  style="font-family: dubai"
                >
                  <img class="appel-img" src="../assets/apple.png" alt="" />
                  متجر <Span class="store">أبل</Span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 col-12">
            <div class="panner-img d-flex justify-content-center mx-3">
              <img
                class="phone2 img-fluid rounded"
                src="../assets/imgs/img-panner1.jpeg"
                alt=""
              />
              <img
                class="phone1 img-fluid rounded"
                src="../assets/imgs/img-panner2.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parent-information container" id="parent-information">
      <div class="row justify-content-between">
        <div
          class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center d-none d-md-flex"
        >
          <div class="information-img">
            <img
              class="img-about-2 img-fluid rounded"
              src="../assets/imgs/img-section2-top.jpeg"
              alt=""
            />
            <img
              class="img-about rounded"
              src="../assets/imgs/img-section2.jpeg"
              alt=""
            />
            <img
              class="img-about-1 img-fluid rounded"
              src="../assets/imgs/img-section2-down.jpeg"
              alt=""
            />
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="information-about">
            <h2>عن ME TAG</h2>
            <p>
              تتخصص ME TAG في تطوير وابتكار حلول وأجهزة إلكترونية ذكية لقطاع
              الأعمال. وتركز على تطوير تقنيات وأجهزة حديثة ومتطورة تساعد الشركات
              على تحسين عملياتها وزيادة كفاءتها وتوفير التكاليف.
            </p>
          </div>
          <div class="information-Explain">
            <h2>للأتصال بنا</h2>
            <p>
              يمكنك الاتصال بنا على مدار الساعة من خلال التواصل المتاحة لدينا
            </p>
          </div>
          <div class="cheke">
            <div class="row justify-content-center justify-content-md-start">
              <div class="col-md-2 col-2">
                <a href="https://wa.me/00966558666109">
                  <img src="../assets/imgs/img-whatsapp.png" alt="" />
                </a>
              </div>

              <div class="col-md-2 col-2">
                <a href="https://twitter.com/MeTagApp">
                  <img src="../assets/imgs/img-twiter.jpg" alt="" />
                </a>
              </div>

              <div class="col-md-2 col-2">
                <a href="https://www.snapchat.com/add/inbs_solutions">
                  <img src="../assets/imgs/img-snap.png" alt="" />
                </a>
              </div>

              <div class="col-md-2 col-2">
                <a href="mailto:someone@example.com">
                  <img src="../assets/imgs/img-gmail.png" alt="" />
                </a>
              </div>

              <div class="col-md-2 col-2">
                <a href="tel:0558666109">
                  <img src="../assets/imgs/img-phone.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parent-section-card container" id="parent-section-card">
      <!-- <div class="line"></div>
      <div class="col-12">
        <div class="titel">
          <h1>قيم الشركة</h1>
        </div>
      </div>

      <div class="row justify-content-around parent-card">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card1">
            <div>
              <img src="../assets/img-fee.png" alt="" />
            </div>
            <div>
              <h4>الابتكار</h4>
              <p>نحن شركة مبتكرة ومتميزة في تقديم حلول ذكية وفعالة لألعمال.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card2">
            <div>
              <img src="../assets/img-sun.png" alt="" />
            </div>
            <div>
              <h4>الجودة</h4>
              <p>
                نحن ملتزمون بتقديم أعلى مستويات الجودة في جميع الخدمات والحلول
                التي نقدمها.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card3">
            <div>
              <img src="../assets/img-article.png" alt="" />
            </div>
            <div>
              <h4>الاحترافية</h4>
              <p>
                نحن نعمل بأخالص واحترافية عالية في كل ما نقدمه، ونسعى دائمًا
                لتحقيق أفضل النتائج لعمالئنا.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card card4">
            <div>
              <img src="../assets/img-cart.png" alt="" />
            </div>
            <div>
              <h4>الشفافية</h4>
              <p>
                نحن نتعامل مع عمالئنا بشفافية تامة، ونسعى دائمًا لتوضيح جميع
                الجوانب المتعلقة بالخدمات التي نقدمها.
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="mt-5 container text-center w-100">
      <video class="img-fluid" width="1000" controls>
        <source src="mov_bbb.mp4" type="video/mp4" />
        <!-- <source src="mov_bbb.ogg" type="video/ogg" /> -->
      </video>
    </div>

    <div class="scrren-img container" id="scrren-img">
      <div class="col-12">
        <div class="titel-screen col-12">
          <h1>بعض لقطات الشاشة</h1>
        </div>
        <!-- <div class="desc-screen col-12">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's<br />
            standard dummy text ever since the 1500s.
          </p>
        </div> -->
      </div>

      <swiper
        class="slide-container"
        :slides-per-view="3"
        :space-between="0"
        :centerSlide="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="swiperOptions.navigation"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 4,
          },
        }"
      >
        <div class="card-wrapper swiper-wrapper test">
          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-panner1.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-panner2.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-section2.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-scren1.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-scren2.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-slide">
              <div class="card card-screen">
                <img src="../assets/imgs/img-scren3.jpeg" alt="" />
              </div>
            </div>
          </swiper-slide>
        </div>
      </swiper>

      <div class="parent-arrow">
        <div class="swiper-button-prev swiper-navBtn-prev swiper-navBtn">
          <img src="../assets/right-arrow.png" alt="" />
        </div>
        <div class="swiper-button-next swiper-navBtn-next swiper-navBtn">
          <img src="../assets/left-arrow.png" alt="" />
        </div>
      </div>
    </div>

    <div class="parent-Footer container-fluid">
      <!-- <hr />
      <div class="row justify-content-evenly">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section1">
            <a class="navbar-brand titel" href="#" style="font-family: dubai"
              >Grey Space</a
            >
            <p style="font-family: dubai">
              Shop our selection of eclectic dining <br />
              your ideal dining space From sleek sets contemporary dining
              furniture to <br />
              tables to rustic wooden dining create.
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section2">
            <div>
              <h1>Custem Care</h1>
            </div>
            <ul class="nav-custem">
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Delivery</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Personal Shopping</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Contact Us</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Help?</a
                ></router-link
              >
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section3">
            <div>
              <h1>Other Services</h1>
            </div>
            <ul class="nav-serves">
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Trade</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Wholesale</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Wedding List</a
                ></router-link
              >
              <router-link to="/" tag="li"
                ><a class="nav-link" style="font-family: dubai"
                  >Affiliates</a
                ></router-link
              >
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card footer-section4">
            <h1>Subscribe newsletter</h1>
            <div class="container">
              <div class="form">
                <form action="" v-on:submit.prevent="submit">
                  <div class="inputBx">
                    <input
                      type="text"
                      style="font-family: dubai"
                      v-model.trim="$v.name.$model"
                      :class="{ 'is-invalid': validationStatus($v.name) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Full Name</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.name.required" class="invalid-feedback">
                      The Name Is Invalid is required
                    </div>
                  </div>

                  <div class="inputEmail">
                    <input
                      type="email"
                      style="font-family: dubai"
                      v-model.trim="email"
                      :class="{ 'is-invalid': validationStatus($v.email) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Email</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.email.required" class="invalid-feedback">
                      The Email Is Invalid is required
                    </div>
                    <div v-if="!$v.email.email" class="invalid-feedback">
                      The Email Is Not Valid
                    </div>
                  </div>

                  <div class="inputMobile">
                    <input
                      type="text"
                      style="font-family: dubai"
                      v-model.trim="mobile"
                      :class="{ 'is-invalid': validationStatus($v.mobile) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Phone</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.mobile.required" class="invalid-feedback">
                      The Phone Is Invalid is required
                    </div>
                  </div>

                  <div class="inputpassword">
                    <input
                      type="password"
                      style="font-family: dubai"
                      v-model.trim="password"
                      :class="{ 'is-invalid': validationStatus($v.password) }"
                    />
                    <span class="footer-span" style="font-family: dubai"
                      >Password</span
                    >
                    <i class="fas fa-user-circle"></i><br />
                    <div v-if="!$v.password.required" class="invalid-feedback">
                      The password Is Invalid is required
                    </div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">
                      You must have at least
                      {{ $v.password.$params.minLength.min }} letters
                    </div>
                    <div v-if="!$v.password.maxLength" class="invalid-feedback">
                      You must not have grater then
                      {{ $v.password.$params.maxLength.min }} letters
                    </div>
                  </div>
                  <div class="inputSubmit">
                    <input type="submit" value="Register" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="end-footer">
        <hr />
        <div class="container">
          <div class="row py-2 text-center text-md-end">
            <div class="col-lg-9 col-md-8 col-12">
              <h3 class="pt-1">© ME TAG 2023 - All Rights Reserved</h3>
            </div>

            <div class="col-lg-3 col-md-4 col-12 mt-3 mt-md-0">
              <div class="d-flex justify-content-center">
                <a href="https://wa.me/00966558666109">
                  <img
                    class="img-social me-3"
                    src="../assets/imgs/img-whatsapp.png"
                    alt=""
                  />
                </a>

                <a href="https://twitter.com/MeTagApp">
                  <img
                    class="img-social me-3"
                    src="../assets/imgs/img-twiter.jpg"
                    alt=""
                  />
                </a>

                <a href="https://www.snapchat.com/add/inbs_solutions">
                  <img
                    class="img-social me-3"
                    src="../assets/imgs/img-snap.png"
                    alt=""
                  />
                </a>

                <a href="mailto:someone@example.com">
                  <img
                    class="img-social me-3"
                    src="../assets/imgs/img-gmail.png"
                    alt=""
                  />
                </a>

                <a href="tel:0558666109">
                  <img
                    class="img-social me-3"
                    src="../assets/imgs/img-phone.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import axios from "axios";
SwiperCore.use([Navigation, Pagination, Autoplay]);

import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import $ from "jquery";

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".main-header").css("background", "#a0a0a0");
      // $(".main-menu li a").css("color", "#fff");
    } else {
      $(".main-header").css("background", "none");
      // $(".main-menu li a").css("color", "#fff");
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#navigation-icon").css("background", "#a0a0a0");
    } else {
      $("#navigation-icon").css("background", "none");
    }
  });
});

export default {
  name: "HomeView",

  components: {
    SwiperSlide,
    Swiper,
  },

  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      name: "",
      email: "",
      mobile: "",
      password: "",
      el: ".menu-icons",
      showNav: false,
      hidnav: false,
      showMobileNav: false,
      languageEn: true,
      languageAr: false,
      mobileView: true,
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-navBtn-next",
          prevEl: ".swiper-navBtn-prev",
        },
      },
      onClick() {
        console.log("clike");
      },
    };
  },

  validations: {
    name: { required },
    email: { required, email },
    mobile: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(15) },
  },

  mounted() {
    this.$el.addEventListener("click", this.onClick);
  },

  methods: {
    callApi() {
      axios.post("http://localhost:81/test/test.php").then((result) => {
        this.getData = result.data;
        console.log(result);
      });
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
      // if (validation != "undefined") {
      //   validation.$error;
      // } else {
      //   false;
      // }
    },

    submit: function () {
      this.$v.$touch();
      if (this.$v.pendding || this.$v.error) return;
    },

    handelView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },

  created() {
    this.handelView();
    window.addEventListener("resize", this.handleView);
    this.callApi();
  },
};
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 10%;
  z-index: 1000;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}
.top-bar {
  display: flex;
  width: 100%;
}

.img-mune {
  height: 35px;
  width: 35px;
  margin-top: 5px;
  margin-right: 3px;
}

#navigation-icon {
  position: fixed;
  display: flex !important;
  justify-content: space-between !important;
  padding: 20px !important;
  cursor: pointer;
  visibility: hidden !important;
  width: 100%;
}

#navigation-icon2 {
  padding: 10px 10px 20px;
  margin-right: 0px !important;
  cursor: pointer;

  img {
    font-size: 2rem;
    float: left !important;
    margin-right: 10px;
  }
}

#navigation-mobile {
  position: fixed;
  top: 0px !important;
  width: 70% !important;
  padding: 10px 0 0 0;
  background-color: #222222;
  visibility: hidden;
  direction: rtl !important;
  margin-right: -230px !important;
  z-index: 1000 !important;

  ul {
    list-style: none;
    padding-left: 40px;
    margin-top: 20px;
    height: 100vh !important;
    text-decoration: none;

    li {
      font-weight: 400;
      margin-bottom: 20px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        &:hover {
          color: #d51b36 !important;
        }
      }
    }
  }
}

.open {
  transform: translateX(-230px);
  transition: transform 1s ease;
  visibility: visible !important;
}
.close {
  transform: translateX(-630px);
  transition: transform 1s ease;
}

.main-menu li a {
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: none;
}

.main-wrapper {
  position: fixed;
  min-height: 100%;
  overflow: hidden;
  direction: rtl;
  visibility: visible !important;
}

.main-wrapper::before {
  background-position: 100% 0;
  background-size: 100% 16%;
  position: absolute;
  content: "";
  right: 0;
  left: 0;
  bottom: 0px;
  top: 0px;
  background-repeat: no-repeat;
}

.p-70 {
  padding: 80px 0px;
}
.logo img {
  height: 47px;
}

.logo2 {
  height: 48px !important;
  margin-top: -10px;
}

/******* start header ********/

.main-header {
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  visibility: visible !important;
}

.parent-section-card {
  direction: rtl !important;
}

.main-header .logo {
  position: relative;
}

.main-header .d-flex {
  height: 85px;
}

.main-header .menu-container {
  position: relative;
  align-items: center;
}

.main-menu {
  margin-right: 140px;
}

.main-menu li a {
  align-items: center;
  margin-top: 30px !important;
}

.main-header .main-menu {
  overflow: hidden;
}

.main-header .main-menu li {
  display: inline-block;
  position: relative;
}

.main-header .main-menu a {
  display: block;
  margin: 0 20px;
  font-size: 16px;
  color: rgb(0, 0, 0);
  position: relative;
  transition: 0.2s ease-in-out;
}

.accordion {
  width: 25%;
}

.language a {
  color: #fff;
  font-size: 16px;
  margin-right: 20px;
  margin-left: 250px;
  text-decoration: none;
  cursor: pointer;
}

.language2 a {
  color: #fff;
  font-size: 16px;
  /* margin-right: 20px; */
  /* margin-left: 250px; */
  text-decoration: none;
  cursor: pointer;
}

.language-english {
  display: none;
}

@media (min-width: 990px) and (max-width: 1500px) {
  #navigation-mobile {
    visibility: hidden;
  }
}

.bg-header {
  background: url(../assets/imgs/bacground-app.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  margin-top: -60px;
  z-index: 10000 !important;
}
.panner-contact {
  margin-top: 220px !important;
}
.panner-contact h1 {
  color: #fff;
}
.panner-contact p {
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
}
.contact-titel {
  color: #3a9693;
}
.store {
  font-size: 12px;
  font-weight: 100;
}
.btn-panner {
  // max-width: 190px !important;
  max-height: 42px !important;
  color: #fff;
  outline: 1px solid #fff;
  padding: 10px 25px 30px 25px;
  position: relative;
  top: 30px !important;
  text-decoration: none;
  float: left;
  font-size: 16px;
  border-radius: 50px;
}
.btn-panner img {
  margin-left: 0px;
}
.btn-panner:hover {
  background: #3a9693;
  color: #fff;
  transition: 0.7s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.btn-panner2 {
  // max-width: 200px !important;
  max-height: 42px !important;
  color: #fff;
  outline: 1px solid #fff;
  padding: 10px 30px 30px 30px;
  position: relative;
  top: 30px !important;
  text-decoration: none;
  background-color: #3a9693;
  float: left;
  font-size: 16px;
  margin-right: 30px;
  border-radius: 50px;
}
.btn-panner2:hover {
  background: transparent;
  color: #fff;
  transition: 0.7s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.panner-img {
  padding-top: 150px;
}

.phone2 {
  z-index: -1;
  position: absolute;
  height: 500px;
  margin-right: 100px !important;
  z-index: 10;
}
.phone1 {
  height: 500px;
  margin-top: 40px;
  margin-left: 100px;
}

/* parent-information */
.parent-information {
  margin-top: 150px;
}

.information-img {
  position: relative !important;
}

.img-about {
  margin-left: 0px;
  height: 500px !important;
}
.img-about-2 {
  position: absolute;
  top: -30px;
  left: -80px;
  width: 200px;
}

.img-about-1 {
  position: absolute;
  bottom: 20px;
  right: -100px;
  width: 200px;
}

.information-about h2 {
  color: #000;
}

.information-about p {
  margin-top: 15px;
  font-size: 14px;
}

.information-Explain {
  margin-top: 30px;
  color: #000;
}

.information-Explain h2 {
  color: #000;
}
.information-Explain p {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.cheke {
  margin-top: 50px;
}

.cheke img {
  height: 40px;
  width: 40px;
}

.cheke1 p {
  margin-top: 2px;
  margin-left: 5px;
  max-width: 500px;
}

/* parent-section-card */
.parent-section-card {
  margin-top: 150px;
}

.line {
  max-width: 300px;
  height: 5px;
  /* border: 3px solid #bd2a2a00; */
  background-color: #3a9693;
  border-radius: 5px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.titel {
  text-align: center;
  margin-top: 50px;
}

.card {
  border: none;
  margin-top: 40px;
}
.card1 {
  text-align: center;
}
.card1 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card1 p {
  font-size: 13px;
}
.card1 h4,
p {
  margin-top: 17px;
}
.card2 {
  text-align: center;
}
.card2 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card2 h4,
p {
  margin-top: 17px;
}
.card2 p {
  font-size: 13px;
}
.card3 {
  text-align: center;
}
.card3 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card3 p {
  font-size: 13px;
}
.card3 h4,
p {
  margin-top: 17px;
}
.card4 {
  text-align: center;
}
.card4 img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card4 p {
  font-size: 13px;
}
.card4 h4,
p {
  margin-top: 17px;
}

/* parent-card-custmer */
// .bacgroung-card-custem {
//   background-image: url(../assets/bacground-custmer.png);
//   background-repeat: no-repeat;
// }
.parent-card-custmer {
  height: 500px;
  margin-top: 150px;
}

.prent-line-custem {
  margin-top: 70px;
  float: right;
}

.titel-custem {
  color: #a41d48;
  text-align: center;
  margin-top: 60px;
}

.card-parg p {
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.line1 {
  height: 30px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
}
.line2 {
  height: 25px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
  margin-top: 3px;
  margin-left: 5px;
}
.line3 {
  height: 20px;
  width: 5px;
  background-color: #a41d48;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;
}

.slide-container {
  /* width: 100%; */
  padding: 10px 0;
}

.test {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  /* height: 200px; */
  border: none !important;
  /* max-height: 200px; */
  border-radius: 10px !important;
  margin-right: auto;
  margin-left: auto;
  background-color: none;
}

.line1-custem {
  height: 5px;
  width: 150px;
  background-color: #a41d48;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card1-custem {
  width: 350px;
  height: 200px;
  margin-top: 20px;
  box-shadow: 0 4px 24px 0 rgb(22 20 18 / 15%);
  border-radius: 10px;
  margin-left: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
}
.card1-custem p {
  margin-left: 20px;
  margin-right: 10px;
  font-size: 14px;
}
.custem-img1 img {
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-left: 10px;
}

.name-custem {
  margin-left: 20px;
  margin-top: -30px;
}

.name-custem img {
  height: 80px;
  width: 80px;
}

.name-custem h5 {
  margin-top: -20px;
  padding-left: 10px;
}

/* scrren-img */
.scrren-img {
  position: relative;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}
.titel-screen {
  text-align: center;
  color: #a41d48;
}
.desc-screen {
  text-align: center;
}
.desc-screen p {
  font-size: 14px;
}
.card-screen {
  margin-left: auto;
  margin-right: auto;
}
.card-screen img {
  /* position: absolute; */
  height: 400px;
  width: 200px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}

.slide-container2 {
  width: 100%;
}

.parent-arrow {
  display: flex;
  width: 100%;
  margin-top: -250px;
  position: absolute;
  justify-content: space-between;
  z-index: 100;
}

.swiper-button-next {
  background-color: #3a9693;
  border-radius: 50%;
  padding: 2px 7px 0px 8px;
  height: 30px;
  width: 30px;
  z-index: 1;
  margin-right: -50px;
}

.swiper-button-next img {
  height: 16px;
  width: 18px;
}

.swiper-button-prev {
  background-color: #3a9693;
  border-radius: 50%;
  padding: 2px 4px 0px 6px;
  height: 30px;
  width: 30px;
  margin-right: -25px !important;
}

.swiper-button-prev img {
  height: 16px;
  width: 18px;
}
.swiper-navBtn {
  color: #fff;
}

/* form-footer */
.parent-Footer {
  height: 100%;
  // margin-top: 150px;
}
.card {
  border: none;
  border-radius: 0px;
}

.footer-section1 {
  margin-top: 13px;
  text-align: left;
  margin-left: 30px;
}
.footer-section1 a {
  font-size: 35px !important;
  text-align: left;
}
.footer-section1 p {
  font-size: 15px;
  margin-top: 20px;
  color: #000;
}

.social {
  display: inline-block;
  width: 36px;
  height: 36px;
  padding: 0px;
  border-radius: 100%;
  margin: 10px;
  transition: all 0.5s ease-in-out;
}
.social svg {
  transition: transform 0.5s ease-out;
}
.social:hover {
  border-radius: 10%;
  transform: rotate(405deg);
}
.social:hover svg {
  transform: rotate(315deg);
}

.facebook {
  fill: #3b5998;
  align-items: center;
  display: block;
  margin-left: 0px auto;
  margin-right: 0px auto;
}
.facebook:hover {
  fill: white;
  background: #3b5998;
}

.twitter {
  fill: #4099ff;
}
.twitter:hover {
  fill: white;
  background: #4099ff;
}

.googleplus {
  fill: #d34836;
}

.googleplus:hover {
  fill: white;
  background: #d34836;
}

.footer-section2 {
  margin-top: 70px;
}
.footer-section2 h1 {
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  margin-left: 80px;
}
.nav-custem {
  margin-top: 5px;
}
.nav-custem li {
  list-style: none;
}
.nav-custem li a {
  transition: 1s;
  color: #000;
  padding-top: 15px;
  text-align: left;
  margin-left: 60px;
  font-size: 17px;
}
.nav-custem li a:hover {
  transform: scale(1.07);
}

.footer-section3 {
  margin-top: 70px;
}
.footer-section3 h1 {
  font-size: 30px;
  font-weight: bold;
}
.nav-serves {
  margin-top: 5px;
}
.nav-serves li {
  list-style: none;
}
.nav-serves li a {
  color: #000;
  padding-top: 15px;
  text-align: left;
  font-size: 17px;
  transition: 1s;
}
.nav-serves li a:hover {
  transform: scale(1.07);
}
.footer-section4 {
  margin-top: 70px;
}
.footer-section4 h1 {
  font-size: 28px;
  font-weight: bold;
}
.form {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

input {
  width: 80%;
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 10px;
  padding-left: 10px;
  border-radius: 15px;
  color: #000;
  font-size: 16px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.inputBx {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  margin-bottom: 30px;
}
input:focus ~ span,
input:valid ~ span {
  transform: translateX(0px) translateY(-25px);
  font-size: 14px;
  margin-top: -5px;
}

.view {
  background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
  transition: 0.5s;
}
.footer-span {
  position: absolute;
  left: 10px;
  padding: 10px;
  display: inline-block;
  color: #000;
  transition: 0.5s;
  pointer-events: none;
}
.inputEmail {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  /* margin-bottom: 10px; */
}

.inputMobile {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

.inputpassword {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

input[type="submit"] {
  background: #000;
  color: #fff;
  max-width: 100px;
  padding: 8px 10px;
  box-shadow: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 1.5s;
}

input[type="submit"]:hover {
  background: linear-gradient(
    115deg,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0.25)
  );
  color: #000;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
}
.end-footer {
  // margin-top: 50px;
}
.end-footer h3 {
  font-size: 17px;
  margin-bottom: 0px;
  // padding-bottom: 15px;
}

.img-social {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media (min-width: 300px) and (max-width: 767px) {
  .footer-section1 {
    text-align: center;
    margin-left: 0px;
  }
  .footer-section1 a {
    text-align: center;
  }
  .footer-section2 h1 {
    text-align: center;
    margin-left: 0px;
  }
  .nav-custem li a {
    margin-left: -30px;
    text-align: center;
  }
  .footer-section3 h1 {
    text-align: center;
  }
  .nav-serves li a {
    margin-left: -30px;
    text-align: center;
  }
  .end-footer h3 {
    font-size: 13px;
  }
  .paret-social {
    margin-left: auto;
    margin-right: auto;
  }
  .footer-section4 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
}

@media (min-width: 300px) and (max-width: 991px) {
  .parent-Footer {
    border-radius: 30% 30% 0% 0% / 5% 5% 10% 10%;
  }
  input {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  #navigation-icon {
    visibility: visible !important;
  }
  .main-header {
    visibility: hidden !important;
  }
  .panner-img {
    margin-top: 0px !important;
  }
  .phone2 {
    margin-right: 70px !important;
  }
  .phone1 {
    margin-left: 90px !important;
  }
  .panner-contact {
    margin-top: 170px;
  }
  .panner-contact p {
    margin-top: 15px;
    font-size: 15px;
  }
  .img-about-2 {
    position: absolute;
    left: -20px;
    width: 150px;
    height: 70px;
  }
  .img-about-1 {
    right: -40px;
    width: 180px;
    height: 90px;
  }
  .information-about {
    margin-top: 40px;
  }
}

@media (min-width: 400px) and (max-width: 500px) {
  .main-wrapper {
    visibility: hidden !important;
  }

  .panner-contact p {
    margin-top: 15px;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    // width: 140px;
    font-size: 14px;
    padding: 13px 20px 30px 18px;
  }
  .store {
    font-size: 10px;
  }
  .information-about {
    margin-top: 0px;
    // text-align: center;
  }
  .information-Explain {
    // text-align: center;
  }
  .img-about-1 {
    width: 200px;
    position: absolute;
    left: 150px;
  }

  .card {
    margin-right: 20px;
    margin-left: 30px;
  }
  .titel-custem {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
  .info-footer {
    margin-right: auto;
    margin-left: auto;
  }
}

@media (min-width: 501px) and (max-width: 767px) {
  .main-wrapper {
    /* display: none; */
    visibility: hidden;
  }
  #navigation-icon {
    /* display: blok; */
    visibility: visible !important;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    // width: 140px;
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .store {
    font-size: 10px;
  }
  .information-about {
    margin-top: 0px;
    // text-align: center;
  }
  .information-Explain {
    // text-align: center;
  }
  .img-about-1 {
    width: 200px;
    position: absolute;
    right: -90px;
  }
  .img-about-2 {
    margin-left: 30px;
    width: 150px;
    left: -70px;
    height: 80px !important;
  }
  .card {
    margin-right: 20px;
    margin-left: 30px;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
  .cheke1 {
    display: block;
    margin-left: 0 auto;
    margin-right: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .main-wrapper {
    visibility: hidden;
  }
  #navigation-icon {
    visibility: visible !important;
  }
  .panner-contact {
    margin-top: 150px;
  }
  .panner-img {
    margin-top: 0px;
  }
  .panner-contact p {
    margin-top: 20px;
  }
  .btn-panner {
    font-size: 14px;
    padding: 10px 20px 30px 18px;
  }
  .btn-panner2 {
    font-size: 13px;
    padding: 10px 20px 30px 18px;
  }
  .img-about-1 {
    width: 220px;
    position: absolute;
    right: -75px;
    bottom: 50px;
  }
  .img-about-2 {
    margin-left: 30px;
    width: 150px;
    left: -70px;
    height: 80px !important;
  }
  .card1-custem {
    width: auto;
  }
  .card2-custem {
    width: auto;
    margin-top: 20px;
  }
  .card3-custem {
    width: auto;
  }
}

@media screen and (max-width: 750px) {
  .parent-arrow {
    /* visibility: hidden; */
    display: none;
  }
}

@media (min-width: 990px) and (max-width: 1500px) {
  .main-wrapper {
    /* display: none; */
    visibility: visible;
  }
}
</style>
