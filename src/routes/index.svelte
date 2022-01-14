<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*');
		products = data;
		console.table(products);
	});
</script>

<div class="content">
	{#each products as product}
		<Product {product} />
	{/each}
</div>

<style>
	.content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
