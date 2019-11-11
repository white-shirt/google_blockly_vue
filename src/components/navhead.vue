<template>
  <div id="navhead">
    <div class="navIcon tohomepage"><button @click="nav('homepage.html')"><img :src="backpic"></button></div>
    <div class="navIcon saveBtn" v-if="saveBtn" @click="save"></div>
    <div class="navIcon bleicon">
      <button>
        <blecpt></blecpt>
      </button>
    </div>
    <div class="navIcon Guide" v-if="isLevel" @click="openGuide">
      <img class="guideImg" :src="guideImg" />
    </div>
    <power class="power"></power>
    <!-- <div class="navIcon helpicon"><button @click="help"></button></div> -->
  </div>
</template>

<script>
import backpic from "../../static/img/system/toindex.png";
import guideImg from "../../static/img/system/guide.png";
import blecpt from "./bluetooth.vue";
import power from "./power.vue";
export default {
  name: "navhead",
  props: ['backurl'],
  data() {
    return {
      backpic, guideImg,
      isLevel: false,
      saveBtn: true
    }
  },
  components: { blecpt, power },
  methods: {
    nav: function (url) {
      if (this.backurl) {
        window.location.replace(this.backurl);
      } else {
        window.location.replace(url);
      }
    },
    openGuide: function () {
      if (this.backurl == "level.html") {
        this.$emit("openGuide");
      }
    },
    save: function () {
      this.$emit("Save");
    }
  },
  mounted: function () {
    document.getElementById("navhead").style.fontSize = document.documentElement.clientWidth / 750 * 100 + 'px';
    console.log(window.location.pathname.substr(1))
    if (this.backurl == "level.html") this.isLevel = true;
    if (window.location.pathname.substr(1) !== "blockly.html") this.saveBtn = false;
  }
}
</script>

<style scoped>
#navhead {
  position: relative;
  width: 100%;
  height: 0.6em;
  background: rgb(0, 104, 124);
}

.navIcon {
  position: absolute;
  width: 0.48em;
  height: 0.48em;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
}

.navIcon img {
  display: block;
  width: 100%;
}

button {
  position: absolute;
  width: 100%;
  height: 100%;
}

.tohomepage {
  top: 50%;
  left: 0.3em;
}

.saveBtn {
  top: 50%;
  background: #eee;
  right: 1.33em;
}

.bleicon {
  top: 50%;
  right: 0.7em;
}

.Guide {
  top: 50%;
  right: 1.33em;
}

.power {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  width: auto;
  height: auto;
  right: 0.3em;
}

</style>


