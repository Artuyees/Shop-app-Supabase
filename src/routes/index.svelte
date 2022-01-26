<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import Products from '../components/organisms/products.svelte';
	import PromotionsBar from '../components/molecules/promotionsBar.svelte';
	import Card from '../components/atoms/card.svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*').limit(3);
		products = data;
	});

	const listOfTexts = [
		'Today we can recommend:',
		'Best products:`',
		'Take while you still can:',
		'last items:',
		'See what we can recommend:'
	];
</script>

<PromotionsBar list={listOfTexts} />
<Products>
	{#each products as product}
		<Product {product} />
	{/each}
	<Card><a href="/search"><h1 class="link">SEE ALL PRODUCTS</h1></a></Card>
</Products>

<style>
	h1 {
		line-height: 200%;
	}
	a {
		text-decoration: none;
		color: black;
		background-color: white;
		width: inherit;
		height: 100%;
	}
	a:hover {
		transform: scale(1.02);
		transition: all 0.2s;
		background-color: #f0f0f0;
	}
</style>
