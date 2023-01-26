<script lang="ts">
	import '../styles/variables.svelte';
	import '../styles/fonts.svelte';
	import Header from '../lib/Header.svelte';
	import ModeOptions from '$lib/ModeOptions.svelte';
	import type { LevelType, ModeType } from '../types/options';
	import Targets from '$lib/Targets.svelte';

	let selectedMode: ModeType = 'links';
	let selectedLevel: LevelType = 'medium';
</script>

<div class="app">
	<Header />
	<ModeOptions {selectedMode} {selectedLevel} />
	<Targets />
</div>

<style lang="scss">
	:global(*) {
		margin: 0;
	}

	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		background-color: var(--bg-color);
		padding: 32px;
	}
</style>
