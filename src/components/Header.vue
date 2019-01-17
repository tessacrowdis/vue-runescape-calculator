<template>
  <header>
    <div v-for="skill in skills" v-bind:key="skill.name">
      <transition name="fade">
        <div
          class="skill"
          :class="{selected: isSelected(skill)}"
          :key="skill.id"
          v-on:click="changeActiveCategory(skill.name)"
        >
          <img :src="require(`@/assets/${skill.src}`)">
        </div>
      </transition>
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
    if (!this.$store.state.activeCategory) return false;
    return skill.name === this.$store.state.activeCategory;
  }
}
</script>

<style scoped lang="scss">
header {
  max-width: 80%;
  margin: auto;
  column-count: 7;
  padding: 2vh 0 1vh 0;
  .skill {
    height: 48px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 1s, border 3s;
    &.selected {
      transition: background-color 1s, border 3s;
      background-color: limegreen;
      border: .5px solid darkblue;
    }
  }
}

// .fade-enter-active .fade-leave-active {
//     background-color: red
// }

// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
