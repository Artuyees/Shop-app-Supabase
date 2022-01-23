<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import Products from '../components/molecules/products.svelte';
	import PromotionsBar from '../components/molecules/promotionsBar.svelte';
	import Card from '../components/atoms/card.svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*').limit(4);
		products = data;
	});

	const listOfTexts = [
		'Polecamy:',
		'Najpopularniejsze dzisiaj:',
		'Bierz póki jeszcze są:',
		'Ostatnie sztuki:',
		'Zobacz co mamy w sprzedaży:'
	];
</script>

<PromotionsBar list={listOfTexts} />
<Products>
	{#each products as product}
		<Product {product} />
	{/each}
	<Card />
</Products>
