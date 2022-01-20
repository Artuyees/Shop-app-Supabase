<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import MainBar from '../components/molecules/mainBar.svelte';
	import Products from '../components/molecules/products.svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*');
		products = data;
		console.table(products);
	});
</script>

<div class="content">
	<MainBar />
	<Products>
		{#each products as product}
			<Product {product} />
		{/each}
	</Products>
</div>

<style>
	.content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
