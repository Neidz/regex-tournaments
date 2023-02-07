<script lang="ts">
	import { generateFormattedLink, type RegexLink } from '../utils/regexTargetsGenerator/links';

	export let links: RegexLink[];
	export let inputValue: string;

	$: showLivePreview = () => {
		const link = links[0].link;

		if (inputValue) {
			try {
				const regex = new RegExp(inputValue);
				const matchedWords = link.match(regex)?.slice(1);

				if (matchedWords) {
					return generateFormattedLink(link, matchedWords);
				}
			} catch {}
		}

		return link;
	};
</script>

<div class="wrapper">
	<p>{@html showLivePreview().replaceAll('specifiedColor', 'var(--main-color)')}</p>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-top: 70px;
	}

	p {
		font-size: 20px;
		word-break: break-all;
	}
</style>
