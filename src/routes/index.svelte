<script>
	import supabase from '$lib/db';
	import Product from '../components/molecules/product.svelte';
	import { onMount } from 'svelte';
	import Products from '../components/organisms/products.svelte';
	import PromotionsBar from '../components/molecules/Navbar.svelte';
	import Card from '../components/atoms/card.svelte';

	let products = [];
	onMount(async () => {
		let { data } = await supabase.from('Products').select('*').limit(3);
		products = data;
	});
</script>

<PromotionsBar />
<main>
	<Products>
		{#each products as product}
			<Product {product} />
		{/each}
		<Card><a href="/search"><h1 class="link">SEE ALL PRODUCTS</h1></a></Card>
	</Products>
</main>

<style>
	h1 {
		text-align: center;
	}
	main {
		display: flex;
		justify-content: center;
	}
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
