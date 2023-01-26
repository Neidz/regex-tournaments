<script lang="ts">
	import type { RegexTarget } from '../types/regex';

	const regexTargets: RegexTarget[] = [
		{
			text: 'https://regex101.com/',
			expectedCapturedGroups: ['https', 'regex101', 'com']
		},
		{
			text: 'https://chat.openai.com/chat',
			expectedCapturedGroups: ['https', 'openai', 'com']
		},
		{
			text: 'https://www.reddit.com/',
			expectedCapturedGroups: ['https', 'reddit', 'com']
		},
		{
			text: 'https://www.thingiverse.com/thing:4062242',
			expectedCapturedGroups: ['https', 'thingiverse', 'com']
		},
		{
			text: 'https://4chan.org/',
			expectedCapturedGroups: ['https', '4chan', 'org']
		},
		{
			text: 'https://pwnagotchi.ai/installation/',
			expectedCapturedGroups: ['https', 'pwnagotchi', 'ai']
		}
	];

	const styledTargets = regexTargets.map((target) => {
		target.expectedCapturedGroups.forEach((group) => {
			target.text = target.text.replace(
				group,
				`<span style="color: var(--text-color)">${group}</span>`
			);
		});
		return target.text;
	});
</script>

<div class="wrapper">
	{#each styledTargets as text}
		<p>{@html text}</p>
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
