<script lang="ts">
	import type { DifficultyLevel, Mode, Status } from '../types/options';

	export let selectedMode: Mode;
	export let selectedDifficulty: DifficultyLevel;
	export let status: Status;
	export let timer: number;

	const modes: Mode[] = ['links', 'html'];
	const levels: DifficultyLevel[] = ['easy', 'medium', 'hard'];
</script>

<div class="wrapper">
	<div class="mode">
		{#each modes as mode}
			<button
				class={selectedMode === mode ? 'colored' : ''}
				on:click={() => {
					selectedMode = mode;
					status = 'idle';
					timer = 0;
				}}>{mode}</button
			>
		{/each}
	</div>
	<div class="spacer" />
	<div class="level">
		{#each levels as level}
			<button
				class={selectedDifficulty === level ? 'colored' : ''}
				on:click={() => {
					selectedDifficulty = level;
					status = 'idle';
					timer = 0;
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
