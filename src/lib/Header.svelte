<script lang="ts">
	import SettingsIcon from '../assets/settingsIcon.svelte';
	import LeaderboardIcon from '../assets/leaderboardIcon.svelte';
	import UserIcon from '../assets/userIcon.svelte';
</script>

<header>
	<h1>regex<span>tournaments</span></h1>
	<div class="icons">
		<a href="/settings"><SettingsIcon /></a>
		<a href="/leaderboard">
			<LeaderboardIcon />
		</a>
		<a href="/login" class="userIcon">
			<UserIcon />
		</a>
	</div>
</header>

<style lang="scss">
	header {
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	h1 {
		color: var(--text-color);
	}
	span {
		color: var(--main-color);
	}
	.icons {
		display: flex;
		align-items: center;
		margin-left: auto;
		gap: 12px;
	}
</style>
