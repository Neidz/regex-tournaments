<script lang="ts">
	import type { Status } from '../types/options';

	export let inputValue: string;
	export let status: Status;
</script>

<div class="wrapper">
	<input
		type="text"
		placeholder="enter your regex here"
		bind:value={inputValue}
		on:input={() => {
			if (status !== 'playing') {
				status = 'playing';
			}
		}}
	/>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		padding: 30px 0;
		width: 100%;
	}
	input {
		text-align: center;
		border: none;
		color: var(--text-color);
		caret-color: var(--main-color);
		background-color: var(--sub-alt-color);
		font-size: 26px;
		width: 80%;
		border-radius: 6px;

		&:focus {
			outline: none;
		}
	}
</style>
