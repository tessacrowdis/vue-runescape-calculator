<template>
  <header>
    <div v-for="skill in skills">
      <div
        class="skill"
        v-bind:key="skill.key"
        v-bind:class="{selected: isSelected(skill)}"
        v-on:click="changeActiveCategory(skill.name)"
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
  get activeCategory() {
    return this.$store.state.activeCategory;
  }
  get skills() {
    return this.$store.state.categories;
  }

  changeActiveCategory(name: String) {
    this.$store.commit("changeActiveCategory", name);
  }

  isSelected(skill: any) {
    return skill.name === this.$store.state.activeCategory;
  }
}
</script>

<style scoped lang="scss">
header {
  max-width: 80%;
  margin: auto;
  column-count: 7;
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
