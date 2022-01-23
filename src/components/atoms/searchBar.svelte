<script>
	import SearchIcon from './searchBarButton.svelte';
</script>

<div class="searchbar">
	<input type="text" class="searchbar__input" />
	<SearchIcon class="mobile-icon" />
</div>

<style>
	.searchbar {
		display: flex;
		justify-content: space-between;
		width: 30%;
		height: 40px;
		border: 1px solid black;
		border-radius: 10px;
		background-color: #ffffff;
	}
	.searchbar__input {
		width: 85%;
		height: 60px;
		border: none;
		background: none;
		font-size: 24px;
	}
	.searchbar__input:focus {
		outline: none;
	}
</style>
