<template>
  <table class="resource">
    <thead>
      <tr>
        <th>Level</th>
        <th>Item</th>
        <th>Xp</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <Resource v-for="resource in category" v-bind:resource="resource" v-bind:key="resource.key"/>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Resource from "./Resource.vue";

@Component({
  components: {
    Resource
  }
})
export default class Resources extends Vue {
  get category() {
    if (this.$store.state.activeSkill) {
      let activeSkill = this.$store.state.skillData.find((category: any) => {
        return category.name === this.$store.state.activeSkill;
      });
      return activeSkill.resources;
    }
  }
}
</script>

<style scoped lang="scss">
table {
  padding: 2px;
  margin: auto;
  border: 1px solid black;
}
</style>
