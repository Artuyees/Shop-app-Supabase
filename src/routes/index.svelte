<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/productInfo.svelte';
	import { onMount } from 'svelte';
	import MainBar from '../components/molecules/mainBar.svelte';
	import Products from '../components/molecules/products.svelte';
	import PromotionsBar from '../components/molecules/promotionsBar.svelte';
	import About from '../components/molecules/about.svelte';

	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*').limit(5);
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

<div class="everything">
	<MainBar />
	<div class="main__content">
		<PromotionsBar list={listOfTexts} />
		<Products>
			{#each products as product}
				<Product {product} />
			{/each}
		</Products>
	</div>
	<About />
</div>

<style>
	.main__content {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		z-index: -1;
	}
	.everything {
		min-height: 100vh;
		display: block;
		position: relative;
	}
</style>
