<script lang="ts">
	import '../styles/variables.svelte';
	import '../styles/fonts.svelte';
	import Header from '../lib/Header.svelte';
	import ModeOptions from '$lib/ModeOptions.svelte';
	import type { DifficultyLevel, ModeType } from '../types/options';
	import Targets from '$lib/Targets.svelte';
	import { generateLinks } from '../utils/regexTargetsGenerator/links';
	import RegexInput from '$lib/RegexInput.svelte';

	let selectedMode: ModeType = 'links';
	let selectedDifficulty: DifficultyLevel = 'medium';
	let inputValue: string = '';

	const links = generateLinks(selectedDifficulty, 5);
</script>

<div class="app">
	<Header />
	<ModeOptions {selectedMode} {selectedDifficulty} />
	<Targets {links} />
	<RegexInput {inputValue} />
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
