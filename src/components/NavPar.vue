<template>
  <div>
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="parent-logo">
        <img class="img-logo" src="../assets/logo-ashiaa.png" />
      </div>

      <div class="parent-toogel-smail">
        <div class="">
          <div class="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img class="toggler-icon" src="../assets/menu.png" alt="" />
            </button>
          </div>
        </div>
      </div>

      <div
        class="collapse navbar-collapse parent-nav"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto conta lightGreen pullDown">
          <router-link to="/" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Home</a
            ></router-link
          >
          <router-link to="" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >AboutUs</a
            ></router-link
          >
          <router-link to="" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Features</a
            ></router-link
          >
          <router-link to="" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Reviews</a
            ></router-link
          >
          <router-link to="" tag="li"
            ><a class="nav-link" style="font-family: dubai"
              >Screenshots</a
            ></router-link
          >
        </ul>
        <div class="d-flex language" role="search">
          <a href="">EN</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").css("background", "#a0a0a0");
    } else {
      $(".navbar").css("background", "none");
    }
  });
});
export default {
  name: "NavPar",
};
</script>

<style scoped lang="scss">
body {
  direction: rtl !important;
}
.navbar {
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0px !important;
  left: 0px !important;
  padding: 10px;
  z-index: 30;
  direction: rtl !important;
}
.img-logo {
  margin-left: 70px;
  height: 50px;
  width: 30px;
}
.toggler-icon {
  height: 38px;
  width: 38px;
}
.navbar-toggler {
  outline: none;
  box-shadow: none;
  border: none;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.toggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: none;
}

.parent-nav {
  width: 100% !important;
  margin-left: 250px;
  margin-top: 10px;
}
.navbar-nav {
  width: 100%;
  height: 100%;
}
.navbar-nav li {
  padding-left: 30px;
}

.navbar-nav li a {
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 400;
  position: relative;
  font-size: 16px;
}

.navbar-nav li a:focus {
  color: #a41d48;
}

.language a {
  color: #fff;
  text-decoration: none;
  margin-right: 70px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
}
.language a:focus {
  color: #a41d48;
}

@media (min-width: 300px) and (max-width: 991px) {
  .navbar {
    height: 70px;
  }
  .img-logo {
    height: 50px;
    width: 27px;
    margin-left: 30px !important;
    margin-top: 0px;
  }
  .navbar-toggler {
    margin-right: 20px;
    margin-top: 10px;
  }
  .toggler-icon {
    height: 30px;
    width: 30px;
  }
  .parent-nav {
    background-color: #fff;
    width: 100% !important;
    margin-left: 0px !important;
    margin-top: 5px;
  }
  .navbar-nav li {
    margin-left: 0px;
    width: 100% !important;
  }
  .navbar-nav li a {
    color: #000;
    width: 100%;
  }
  .language a {
    margin-left: 30px;
    color: #000;
  }
}
</style>
