<template>
  <tr>
    <td :style="{ backgroundColor: isSkillElegible(resource.level) }">{{resource.level}}</td>
    <td>
      <img :src="resource.src">
      {{resource.name}}
      <img v-if="resource.members" src="../assets/members_star.gif">
    </td>
    <td>{{resource.experience}}</td>
    <td>
      <input id="amount" v-model="amount" readonly>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    resource: Object
  }
})
export default class Resource extends Vue {
  resource: any = this.resource;

  get skill() {
    if (this.$store.state.activeSkill) {
      return this.$store.state.skills.find((skill: any) => {
        return skill.name === this.$store.state.activeSkill;
      });
    }
  }

  get amount() {
    return Math.ceil(
      (this.skill.targetXp - this.skill.playerXp) / this.resource.experience
    );
  }

  isSkillElegible(requiredLevel: number) {
    if (requiredLevel > this.skill.playerLevel && requiredLevel <= this.skill.targetLevel) return '#f8ff42'; // Unlocked
    else if (requiredLevel <= this.skill.playerLevel) return '#86fc41'; // Will unlock on way to goal
    else return '#e51b1b'; // Requirement not met
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
tr {
  height: 36px;
}

td {
}

input {
  background: rgba(255, 255, 255, 0);
  width: auto;
}
</style>

