<script lang="ts">
	import type { Status } from '../types/options';

	export let timer: number;
	export let status: Status;

	const incrementTimer = () => {
		if (status === 'playing') {
			timer++;
			setTimeout(() => incrementTimer(), 1000);
		}
	};

	$: if (status === 'playing') {
		setTimeout(() => incrementTimer(), 1000);
	}
</script>

<div class="wrapper">
	<p>current time:</p>
	<div class="time">
		<p class="minutes">{Math.floor(timer / 60)}</p>
		<p class="seconds">{timer % 60}</p>
	</div>
	<button
		on:click={() => {
			status = 'idle';
			timer = 0;
		}}>restart</button
	>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	.time {
		display: flex;
		flex-direction: row;
	}
	p {
		color: var(--text-color);
		font-size: 20px;
	}
	.seconds {
		font-size: 14px;
	}
</style>
