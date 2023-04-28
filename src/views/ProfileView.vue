<template>
  <section>
    <div class="contanier">
      <div class="hero">
        <nav class="text-start parent-logo">
          <router-link to="/" tag="li">
            <img class="logo" src="../assets/imgs/logo.png" alt="" />
          </router-link>
        </nav>

        <div class="content d-inline-block d-md-flex justify-content-center">
          <div class="div-text">
            <h1>{{ user.username }}</h1>
            <p>
              {{ user.description }}
            </p>
            <a href="" class="btn" @click.prevent="saveData">حفظ - SAVE</a>
          </div>

          <div class="div-img">
            <img
              class="test rounded-circle border border-3"
              :src="user.userPic"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5 social px-3">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12">
          <div class="row text-center">
            <div
              class="col-md-4 col-6"
              v-for="(social, index) in socials"
              :key="index"
            >
              <a :href="social.link" target="_blank">
                <button class="btn2 rounded text-dark bg-transparent mb-3">
                  <div class="bg-transparent rounded">
                    <img class="team-logo pt-1" :src="social.image" />
                    <p class="fs-5 name-social pt-2">
                      {{ social.name }}
                    </p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from "../Firebase/init.js";
import { collection, getDocs, doc, where, query } from "firebase/firestore";

export default {
  name: "ProfileView",
  data() {
    return {
      user: {
        id: "",
        username: "",
        contactName: "",
        description: "",
        userPic: "",
        phoneNumber: "",
        email: "",
        snapchat: "",
        whatsapp: "",
      },
      socials: [],
    };
  },

  created() {
    this.getUser();
  },

  methods: {
    async getUser() {
      const userLink = this.$route.params.linkName;

      const q = query(
        collection(db, "users"),
        where("linkName", "==", userLink)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        this.$router.push("/");
      } else {
        querySnapshot.forEach((doc) => {
          this.user.id = doc.data().id;
          this.user.username = doc.data().username;
          this.user.contactName = doc.data().contactName;
          this.user.userPic = doc.data().image;
          this.user.description = doc.data().description;
          this.user.phoneNumber = doc.data().contactNumber;
          this.user.email = doc.data().contactEmail;
        });
      }
      console.log(this.user);

      const docProfiles = await getDocs(
        collection(doc(db, "users", this.user.id), "profiles")
      );
      // const active = true;
      // if (this.isActives == "true") {
      docProfiles.forEach((doc) => {
        const profile = {};
        profile.image = doc.data().imageUrl;
        profile.name = doc.data().name;
        profile.isSociaMedia = doc.data().isSociaMedia;
        if (doc.data().isSociaMedia) {
          profile.link = doc.data().socialMediaLink + doc.data().link;
        }
        if (profile.name === "snapchat")
          this.user.snapchat = doc.data().socialMediaExample;
        if (profile.name === "whatsapp") this.user.whatsapp = doc.data().link;
        this.socials.push(profile);
      });
      // } else {
      //   console.log("empty");
      // }
    },

    saveData() {
      let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${this.user.contactName}
TEL;TYPE=WORK,VOICE:${this.user.phoneNumber}:
`;
      if (this.user.whatsapp !== "")
        vcard += `TEL;TYPE=WHATSAPP,VOICE:${this.user.whatsapp}:
`;
      vcard += `EMAIL:${this.user.email}
REV:${new Date().toISOString()}
END:VCARD`;

      // TEL;TYPE=WHATSAPP,VOICE:${this.user.phoneNumber}:

      this.downloadToFile(vcard, "vcard.vcf", "text/vcard");
    },

    downloadToFile(content, filename, contentType) {
      const a = document.createElement("a");
      const file = new Blob([content], { type: contentType });

      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();

      URL.revokeObjectURL(a.href);
    },
  },
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.contanier {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.contanier {
  // position: absolute;
  height: 100% !important;
  width: 100% !important;
  top: 0px !important;
  right: 0;
  background-color: #ffffff;
  padding: 10px 0px 10px 0px;
}
.contanier .hero {
  // position: relative;
  // z-index: 10;
  // height: 400px;
  width: 70%;
  // background: rgba(0, 0, 0, 0.534);
  // padding: 0px 40px 0px 0px;
  // margin-bottom: 100px;
}
.hero nav li {
  list-style: none;
}
.hero nav .logo {
  height: 35px;
  margin-top: 15px;
  margin-bottom: 20px;
  padding-right: 20px;
  cursor: pointer;
}

.hero nav .nav-links a:hover,
.hero nav .nav-links a.active {
  color: #801f82;
}
.content {
  width: 100%;
  border: 3px solid #e9e9e9;
  box-shadow: -15px 17px 17px rgba(10, 10, 10, 0.15);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0px 40px 0px 0px;
  backdrop-filter: blur(25px);
  background-color: #f9fafb;
}
.hero .content {
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
.hero .content .div-text {
  width: 40% !important;
}
.hero .content .div-text h1 {
  margin-bottom: 20px;
  font-size: 40px;
  color: #3a9693;
  font-weight: 700;
  text-transform: capitalize;
}
.hero .content .div-text h4 {
  color: #3f3f3f;
  font-size: 24px;
  margin-bottom: 10px;
}
.hero .content .div-text p {
  color: #000000;
  margin-bottom: 50px;
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.hero .content .div-text .btn {
  padding: 15px 20px;
  background-color: #fff;
  border: 2px solid #3a9693;
  color: #3a9693;
  border-radius: 5px;
  font-weight: bold;
}
.hero .content .div-text .btn:hover {
  color: #fff;
  transition: 0.3s;
  background-color: #3a9693;
}

.hero .content .div-img {
  width: 40%;
}
.hero .content .div-img li {
  list-style: none;
  cursor: pointer;
}
.test {
  width: 80%;
  height: 290px;
  margin-right: 90px;
  // border-radius: 50%;
}

.parent-logo {
  // background-color: #f0f0f0;
  border-radius: 20px;
  padding-left: 20px;
}
/* animation */

.hero .logo,
.hero .content .div-text h1,
.hero .content .div-text h4,
.hero .content .div-text .btn {
  position: relative;
  top: 50px;
  animation: slide-top 0.5s linear forwards;
  opacity: 0;
}
.hero .logo {
  animation-delay: 0.2s;
}
.hero .content .div-text h1 {
  animation-delay: 0.5s;
}
.hero .content .div-text h4 {
  animation-delay: 0.9s;
}
.hero .content .div-text .btn {
  animation-delay: 1.8s;
}
@keyframes slide-top {
  0% {
    top: 50px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.hero .content .div-text p {
  position: relative;
  left: 100px;
  animation: slide-right 0.5s linear forwards;
  animation-delay: 1.3s;
  opacity: 0;
}
@keyframes slide-right {
  0% {
    left: 100px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

.hero .content .div-img img {
  opacity: 0;
  transform: scale(0.8);
  animation: fade-img 0.5s linear forwards;
  animation-delay: 2.1s;
}
@keyframes fade-img {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.social {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.btn2 {
  // height: 110px;
  // width: 130px;
  // z-index: 10000 !important;
  border: 0px solid;
  margin: 10px;
  padding: 5px 5px;
}

.btn2 img {
  height: 100px;
  // margin-bottom: 50px;
}

.btn2 p {
  color: #000000;
  -webkit-text-fill-color: #000000;
  // background-color: #3a9693;
  // width: 100px !important;
  // height: 100px !important;
}

@media (min-width: 300px) and (max-width: 768px) {
  .contanier {
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    height: 30% !important;
    width: 100%;
    top: 0;
    right: 0;
    display: block;
    margin-right: auto;
    margin-left: auto;
    // background-color: #f9fafb;
  }
  .contanier .hero {
    width: 90% !important;
    // height: 410px;
  }
  .content {
    height: 410px;
    width: 100%;
  }
  .hero .content .div-text {
    width: 90% !important;
  }
  .hero .content .div-text h1 {
    font-size: 25px;
    padding-top: 30px;
  }
  .hero .content .div-text p {
    font-size: 15px;
    margin-bottom: 20px;
  }
  .hero .content .div-img {
    width: 85%;
    // height: 290px !important;
    // display: block !important;
    // margin-right: auto !important;
    // margin-left: auto !important;
    margin-bottom: 30px;
    border-radius: 50%;
  }
  .test {
    width: 200px !important;
    height: 200px;
    margin-top: 100px;
    display: block !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .hero .content .div-text .btn {
    padding: 7px 10px;
  }
  .social {
    padding-top: 80px;
  }
  .hero .content {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .contanier .hero {
    // padding: 0px 40px 0px 120px;
  }
  .contanier::before {
    height: 90%;
  }
  .parent-logo {
    // background-color: #000000 !important;
    border-radius: 20px;
    padding-left: 20px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .contanier::before {
    height: 60% !important;
  }
  .social {
    margin-top: 50px;
  }
  .hero .content .div-img {
    width: 50%;
    height: 200px !important;
  }
  .test {
    width: 100% !important;
    height: 100%;
    margin-right: 50px;
    margin-top: 10px;
    // border-radius: 70%;
  }
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
  .btn2 p {
    color: #000000;
  }
}

/* Portrait */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .btn2 p {
    color: #000000;
  }
}

/* Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .btn2 p {
    color: #000000;
  }
}
</style>
