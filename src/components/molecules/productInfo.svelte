<script>
	import SmallButton from '../atoms/smallButton.svelte';

	export let product;
	import Card from '../atoms/card.svelte';
</script>

<Card>
	<a href={`product/${product.id}`}>
		<img src={product.img} alt="xd" />
	</a>
	<p>
		{product.product_name}
	</p>
	<div class="info">
		<p>{product.price}</p>
		<SmallButton disabled={!product.in_stock} />
	</div>
</Card>

<style>
	.info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	img {
		width: 10em;
		height: 10em;
		margin: auto;
	}
</style>
