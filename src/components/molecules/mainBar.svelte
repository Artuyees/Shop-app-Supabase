<script>
	import CartButton from '../atoms/cartButton.svelte';
	import HomeButton from '../atoms/homeButton.svelte';
	import Logo from '../atoms/logo.svelte';
	import SearchBar from '../atoms/searchBar.svelte';
</script>

<div class="main">
	<div class="aligner" />
	<Logo />
	<div class="items">
		<SearchBar />
		<div class="main__icons ">
			<CartButton />
			<HomeButton />
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: auto;
		padding: 0.5rem 0;
		width: 100%;
		background-color: white;
	}
	.aligner {
		display: none;
		width: 1rem;
		height: 1rem;
	}
	.items {
		display: none;
		width: auto;
		gap: 0.5rem;
	}
	@media (min-width: 768px) {
		.items {
			display: flex;
		}
		.aligner {
			display: flex;
		}
	}
	.main__icons {
		display: flex;
	}
</style>
