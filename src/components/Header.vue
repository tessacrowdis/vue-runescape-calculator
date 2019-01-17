<template>
  <header>
    <div v-for="skill in skills">
      <div
        class="skill"
        v-bind:key="skill.key"
        v-bind:class="{selected: isSelected(skill)}"
        v-on:click="changeActiveSkill(skill.name)"
      >
        <img :src="require(`@/assets/${skill.src}`)">
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  get activeSkill() {
    return this.$store.state.activeSkill;
  }

  get skills() {
    return this.$store.state.skillData;
  }

  changeActiveSkill(name: String) {
    this.$store.commit("changeActiveSkill", name);
  }

  isSelected(skill: any) {
    return skill.name === this.$store.state.activeSkill;
  }
}
</script>

<style scoped lang="scss">
header {
  max-width: 80%;
  margin: auto;
  column-count: 3;
  padding: 2vh 0;
  .skill {
    height: 36px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.selected {
      background-color: lightseagreen;
      border: 1px solid;
    }
  }
}
</style>
