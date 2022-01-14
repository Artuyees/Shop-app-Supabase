<script>
	export let product;
	import Card from '../atoms/smallCard.svelte';
</script>

<Card>
	<img src={product.img} alt="xd" />
	<p>
		{product.product_name}
	</p>
</Card>

<style>
	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	img {
		width: 100px;
		height: 100px;
	}
</style>
