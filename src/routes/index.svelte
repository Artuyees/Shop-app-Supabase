<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import MainBar from '../components/molecules/mainBar.svelte';
	import Products from '../components/molecules/products.svelte';
	import PromotionsBar from '../components/molecules/PromotionsBar.svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*');
		products = data;
		console.table(products);
	});

	const listOfTexts = [
		'Polecamy:',
		'Najpopularniejsze dzisiaj:',
		'Bierz póki jeszcze są:',
		'Ostatnie sztuki:',
		'Zobacz co mamy w sprzedaży:'
	];
</script>

<div class="content">
	<MainBar />
	<PromotionsBar list={listOfTexts} />
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
		align-items: center;
		justify-content: center;
	}
</style>
