<template>
  <tr>
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
    resource: Object,
  }
})
export default class Resource extends Vue {
  resource: any = this.resource;

  get skill() {
    if (this.$store.state.activeCategory) {
      return this.$store.state.skills.find((skill: any) => {
        return skill.name === this.$store.state.activeCategory;
      });
    }
  }

  get amount() {
    return Math.ceil(
      (this.skill.targetXp - this.skill.playerXp) /
        this.resource.experience
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

