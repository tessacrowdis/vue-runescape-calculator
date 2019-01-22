<template>
  <div class="gradient" v-bind:style="{backgroundColor: changeBackgroundColor}">
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
  get changeBackgroundColor() {
    let activeSkill = this.$store.state.activeSkill;
    return activeSkill ? this.$store.state.skillColors[activeSkill] : 'gray';
  }
}
</script>

<style scoped type="sass">
.home {
  min-height: 100vh;
  width: 95%;
  max-width: 550px;
  margin: auto;
  border-left: 2px solid;
  border-right: 2px solid;
  background-color: cornsilk;
  padding: 25px 0 50px 0;
}
.gradient {
  transition: all 1.5s;
  background: linear-gradient(.25turn, rgba(0,0,0,0), cornsilk, cornsilk, rgba(0,0,0,0));
}
</style>
