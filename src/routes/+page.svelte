<script>
	import Header from '../lib/Header.svelte';
</script>

<div class="app">
	<Header />
</div>

<style lang="scss">
	:global(*) {
		margin: 0;
	}
	:global(:root) {
		--bg-color: #323437;
		--main-color: #1489e2;
		--sub-color: #646669;
		--text-color: #d1d0c5;
		--error-color: #ca4754;
	}
	:global(a) {
		color: var(--sub-color);
		&:hover {
			color: var(--text-color);
		}
	}

	.app {
		min-height: 100vh;
		background-color: var(--bg-color);
		padding: 32px;
	}
</style>
