<script>
	import HomeButton from '../atoms/homeButton.svelte';
	import SearchBar from '../atoms/searchBar.svelte';
</script>

<div class="main">
	<img src="../../../static/logo.png" alt="" />
	<SearchBar />
	<HomeButton />
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
