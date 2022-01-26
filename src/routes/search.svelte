<script>
	import { searchTerm } from '../stores/searchStore';
	import Products from '../components/organisms/products.svelte';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	console.log('SEARCH TERM', searchTerm);
	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*');
		products = data;
	});
	let filteredProducts = [];
	$: {
		if (searchTerm) {
			filteredProducts = products.filter((product) =>
				product.product_name.toLowerCase().includes($searchTerm.toLowerCase())
			);
		} else {
			filteredProducts = [...products];
		}
	}
</script>

<Products>
	{#if filteredProducts.length > 0}
		{#each filteredProducts as product}
			<Product {product} />
		{/each}
	{:else}
		<h1>No products found..</h1>
	{/if}
</Products>

<style>
	h1 {
		color: gray;
	}
</style>
