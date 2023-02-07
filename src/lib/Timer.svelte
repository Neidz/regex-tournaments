<script lang="ts">
	import type { Status } from '../types/options';

	export let timer: number;
	export let status: Status;
	export let inputValue: string;

	const incrementTimer = () => {
		if (status === 'playing') {
			timer++;
			setTimeout(() => incrementTimer(), 1000);
		}
	};

	$: if (status === 'playing' && timer === 0) {
		setTimeout(() => incrementTimer(), 1000);
	}
	$: minutes = Math.floor(timer / 60);
	$: seconds = timer % 60 < 10 ? `0${timer % 60}` : timer % 60;
</script>

<div class="wrapper">
	<p>current time:</p>
	<p class={status === 'finished' ? 'colored' : ''}>{minutes}:{seconds}</p>
	<button
		on:click={() => {
			status = 'idle';
			inputValue = '';
			timer = 0;
		}}>restart</button
	>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
	}
	.colored {
		color: var(--main-color);
	}
	p {
		color: var(--text-color);
		font-size: 20px;
	}
	button {
		font-size: 20px;
	}
</style>
