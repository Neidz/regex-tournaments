<script lang="ts">
	import type { LevelType, ModeType } from '../types/options';

	export let selectedMode: ModeType;
	export let selectedLevel: LevelType;

	const modes: ModeType[] = ['links', 'lorem', 'lorem2'];
	const levels: LevelType[] = ['easy', 'medium', 'hard'];
</script>

<div class="wrapper">
	<div class="mode">
		{#each modes as mode}
			<button
				class={selectedMode === mode ? 'colored' : ''}
				on:click={() => {
					selectedMode = mode;
				}}>{mode}</button
			>
		{/each}
	</div>
	<div class="spacer" />
	<div class="level">
		{#each levels as level}
			<button
				class={selectedLevel === level ? 'colored' : ''}
				on:click={() => {
					selectedLevel = level;
				}}>{level}</button
			>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		margin: 30px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: var(--sub-alt-color);
		padding: 12px;
		border-radius: 6px;
		gap: 4px;
	}
	.colored {
		color: var(--main-color);
	}
	.spacer {
		height: 15px;
		width: 2px;
		border-radius: 2px;
		background-color: var(--sub-color);
	}
	.level,
	.mode {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 4px;
	}
</style>
