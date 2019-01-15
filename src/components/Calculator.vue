<template>
  <div class="calculator">
    <p>Supports up to level 30 as of now</p>
    <div v-if="activeCategory === null">
      <h3>Please select a category</h3>
    </div>
    <div v-else>
      <h3>Your {{ activeCategory }} level: {{ skill.playerLevel }}</h3>
      <input
        v-model="skill.playerLevel"
        v-on:change="updateSkillByLevel('playerLevel', skill.playerLevel)"
        type="number"
      >
      <h3>Your {{ activeCategory }} Xp: {{ skill.playerXp }}</h3>
      <input
        v-model="skill.playerXp"
        v-on:change="updateSkillByXp('playerXp', skill.playerXp)"
        type="number"
      >

      <h3>Your Target level: {{ skill.targetLevel }}</h3>
      <input
        v-model="skill.targetLevel"
        v-on:change="updateSkillByLevel('targetLevel', skill.targetLevel)"
        type="number"
      >
      <h3>Your Target Xp: {{ skill.targetXp }}</h3>
      <input
        v-model="skill.targetXp"
        v-on:change="updateSkillByXp('targetXp', skill.targetXp)"
        type="number"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Calculator extends Vue {
  get activeCategory() {
    return this.$store.state.activeCategory;
  }

  get skill() {
    if (this.$store.state.activeCategory) {
      return this.$store.state.skills.find((skill: any) => {
        return skill.name === this.$store.state.activeCategory;
      });
    }
  }

  updateSkillByXp(field: any, xp: Number) {
    let updatedSkill = this.skill;
    updatedSkill[field] = xp;
    this.$store.dispatch("updateFromXp", { updatedSkill, field });
  }

  updateSkillByLevel(field: any, level: Number) {
    let updatedSkill = this.skill;
    updatedSkill[field] = level;
      this.$store.dispatch("updateFromLevel", { updatedSkill, field });
  }
}
</script>