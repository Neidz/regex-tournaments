<style lang="scss">
	:global(h1, h2, h3, p, button, input, span) {
		font-family: 'Roboto', sans-serif;
		color: var(--sub-color);
	}

	:global(p, a, button, input) {
		font-size: 14px;
	}

	:global(a) {
		color: var(--sub-color);
		&:hover {
			color: var(--text-color);
		}
	}

	:global(button) {
		background-color: var(--transparent);
		border: none;
		&:hover {
			color: var(--text-color);
			cursor: pointer;
		}
	}
</style>
