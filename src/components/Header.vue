<template>
	<div class="header">
		<div v-for="skill in skills">
			<div v-on:click="changeActiveCategory(skill.name)">
				<img :src="skill.src">
				<h2 v-if="skill.name === activeCategory">{{ skill.name }}</h2>
				<h4 v-else>{{ skill.name }}</h4>
			</div>
		</div>
	</div>
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
