<script>
	import { searchTerm } from '../../stores/searchStore';
	import SearchIcon from './searchBarButton.svelte';
</script>

<div class="searchbar">
	<form action="/search">
		<input type="text" class="searchbar__input" placeholder="search.." bind:value={$searchTerm} />
	</form>
	<SearchIcon class="mobile-icon" />
</div>

<style>
	.searchbar {
		display: flex;
		justify-content: space-between;
		width: 12rem;
		height: 40px;
		border-radius: 10px;
		background-color: #ddd;
	}
	.searchbar__input {
		width: 85%;
		height: 40px;
		border: none;
		background: none;
		color: #999;
		font-size: 1rem;
	}
	.searchbar__input:focus {
		outline: none;
	}
</style>
