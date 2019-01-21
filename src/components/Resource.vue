<template>
  <tr v-show="members(resource.members)">
    <td>{{resource.level}}</td>
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

  members(isMembersOnly: Boolean) {
    if (!isMembersOnly) return true;
    return this.$store.state.hideMembers !== isMembersOnly;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
tr {
  height: 36px;
}

input {
  background: rgba(255, 255, 255, 0);
  width: auto;
}
</style>

