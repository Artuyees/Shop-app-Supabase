<script>
	import CartButton from '../atoms/cartButton.svelte';
	import HomeButton from '../atoms/homeButton.svelte';
	import Logo from '../atoms/logo.svelte';
	import SearchBar from '../atoms/searchBar.svelte';

	let mobile = false;
</script>

<div class="main">
	<Logo />
	{#if mobile == false}
		<SearchBar />
		<div class="mainBar__icons">
			<CartButton />
			<HomeButton />
		</div>
	{/if}
</div>

<style>
	.main {
		position: sticky;
		top: 0px;
		border-bottom: 1px solid gray;
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 50px;
		width: 100%;
		background-color: white;
	}
	.mainBar__icons {
		display: flex;
	}
</style>
