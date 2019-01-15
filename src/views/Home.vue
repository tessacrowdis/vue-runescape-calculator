<template>
	<div class="home">
		<Header/>
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<Calculator/>
		<Resources/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calculator from "@/components/Calculator.vue";
import Header from "@/components/Header.vue";
import Resources from "@/components/Resources.vue"
@Component({
	components: {
		Calculator,
		Header,
		Resources
	}
})
export default class Home extends Vue {}
</script>
