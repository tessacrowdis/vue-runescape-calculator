<template>
  <div class="calculator">
    <input type="checkbox" v-model="hideMembers">Hide Members?
    <div v-if="activeCategory === null">
      <h3>Please select a category to begin!</h3>
    </div>

    <div v-else class="grid">
      <div class="column">
        <label>Your {{ activeCategory }} level:</label>
        <input
          v-model="skill.playerLevel"
          v-on:change="updateSkillByLevel('playerLevel', skill.playerLevel)"
          type="number"
        >
      </div>
      <div class="column">
        <label>Your {{ activeCategory }} Xp:</label>
        <input
          v-model="skill.playerXp"
          v-on:change="updateSkillByXp('playerXp', skill.playerXp)"
          type="number"
        >
      </div>

      <div class="column">
        <label>Your Target level:</label>
        <input
          v-model="skill.targetLevel"
          v-on:change="updateSkillByLevel('targetLevel', skill.targetLevel)"
          type="number"
        >
      </div>
      <div class="column">
        <label>Your Target Xp:</label>
        <input
          v-model="skill.targetXp"
          v-on:change="updateSkillByXp('targetXp', skill.targetXp)"
          type="number"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "@/styles.scss";

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

  get hideMembers() {
    return this.$store.state.hideMembers;
  }

  set hideMembers(value: Boolean) {
    this.$store.state.hideMembers = value;
  }

  updateSkillByLevel(field: any, level: Number) {
    if (level > 120) level = 120;
    if (level < 0) level = 1;
    let updatedSkill = this.skill;
    updatedSkill[field] = level;
    this.$store.dispatch("updateFromLevel", { updatedSkill, field });
  }

  updateSkillByXp(field: any, xp: Number) {
    if (xp > 20000000) xp = 20000000;
    if (xp < 0) xp = 0;
    let updatedSkill = this.skill;
    updatedSkill[field] = xp;
    this.$store.dispatch("updateFromXp", { updatedSkill, field });
  }
}
</script>

<style scoped lang="scss">
.calculator {
  margin: 0.6vw auto;
}
.grid {
  .column {
    display: inline-block;
    width: 46%;
    margin: 5px 2%;
    label {
      display: block;
      text-align: left;
    }
    input {
      width: 75%;
      background: rgba(255, 255, 255, 0.75);
    }
  }
}
</style>