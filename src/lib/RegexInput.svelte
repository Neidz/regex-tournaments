<script lang="ts">
	import type { Status } from '../types/options';
	import { comapreArrays } from '../utils/compareArrays';
	import type { RegexLink } from '../utils/regexTargetsGenerator/links';

	export let inputValue: string;
	export let status: Status;
	export let links: RegexLink[];

	$: if (status === 'idle') {
		inputValue = '';
	} else {
		try {
			const isFinished = () => {
				const regex = new RegExp(inputValue);

				return links.every((el) => {
					const matchedWords = el.link.match(regex)?.slice(1);
					console.log(matchedWords);
					console.log(el.expectedWords);

					if (!matchedWords || !comapreArrays(el.expectedWords, matchedWords)) {
						return false;
					}
					return true;
				});
			};

			if (isFinished()) {
				status = 'finished';
			}
		} catch {}
	}
</script>

<div class="wrapper">
	<div class="textContainer">
		<p>/</p>
		<input
			type="text"
			placeholder="enter your regex here"
			bind:value={inputValue}
			on:input={() => {
				if (status === 'idle') {
					status = 'playing';
				}
			}}
		/>
		<p>/</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		padding: 30px 0;
		width: 100%;
	}
	.textContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--sub-alt-color);
		width: 80%;
		border-radius: 6px;
		padding: 0 4px;
	}
	input {
		width: 100%;
		text-align: center;
		border: none;
		color: var(--text-color);
		background-color: var(--transparent);
		caret-color: var(--main-color);
		font-size: 26px;
		&:focus {
			outline: none;
		}
	}
	p {
		font-size: 26px;
	}
</style>
