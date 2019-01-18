<template>
  <div class="gradient" v-bind:style="{background: changeGradient}">
    <div class="home">
      <Header/>
      <Calculator/>
      <Resources/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calculator from "@/components/Calculator.vue";
import Header from "@/components/Header.vue";
import Resources from "@/components/Resources.vue";
import "@/styles.scss";
@Component({
  components: {
    Calculator,
    Header,
    Resources
  }
})
export default class Home extends Vue {
  get changeGradient() {
    let skillColor = "gray";
    if (this.$store.state.activeSkill) {
      skillColor = this.$store.state.skillColors[
        this.$store.state.activeSkill
      ];
    }
    return `linear-gradient(to top, ${skillColor} 1%, black 95%)`;
  }
}
</script>

<style scoped type="sass">
.home {
  height: 100vh;
  width: 95%;
  max-width: 550px;
  margin: auto;
  border-left: 2px solid;
  border-right: 2px solid;
  background-color: cornsilk;
}
.gradient {
  transition: all 1s;
}
</style>
