<script>
	import SmallButton from '../atoms/smallButton.svelte';

	export let product;
	import Card from '../atoms/smallCard.svelte';
</script>

<Card>
	<img src={product.img} alt="xd" />
	<p>
		{product.product_name}
	</p>
	<SmallButton text={'KUP TERAZ'} disabled={!product.in_stock} />
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
		margin: auto;
	}
</style>
