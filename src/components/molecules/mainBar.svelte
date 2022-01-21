<script>
	import HomeButton from '../atoms/homeButton.svelte';
	import Logo from '../atoms/logo.svelte';
	import SearchBar from '../atoms/searchBar.svelte';

	let mobile = false;
</script>

<div class="main">
	<Logo />
	{#if mobile == false}
		<SearchBar />
		<HomeButton />
	{/if}
</div>

<style>
	.main {
		position: sticky;
		border-bottom: 1px solid gray;
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 100px;
		width: 100%;
		background-color: white;
	}
</style>
