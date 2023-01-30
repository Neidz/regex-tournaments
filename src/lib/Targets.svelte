<script lang="ts">
	import type { RegexLink } from '../utils/regexTargetsGenerator/links';

	export let links: RegexLink[];
</script>

<div class="wrapper">
	{#each links as link}
		<p>{@html link.formattedLink.replaceAll('specifiedColor', 'var(--main-color)')}</p>
	{/each}
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	p {
		font-size: 20px;
	}
</style>
