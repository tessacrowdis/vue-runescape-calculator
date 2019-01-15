<template>
  <table class="resource">
    <Resource
      v-for="resource in category"
      v-bind:resource="resource"
      v-bind:key="resource.key"
    />
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
    if (this.$store.state.activeCategory) {
      let activeCategory = this.$store.state.categories.find(
        (category: any) => {
          return category.name === this.$store.state.activeCategory;
        }
      );
      return activeCategory.resources;
    }
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
