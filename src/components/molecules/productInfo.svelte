<script>
	import SmallButton from '../atoms/smallButton.svelte';

	export let product;
	import Card from '../atoms/card.svelte';
</script>

<Card>
	<a class="productInfo__link" href={`product/${product.id}`}>
		<div class="productInfo__img">
			<img src={product.img} alt="xd" />
			<p>
				{product.product_name}
			</p>
		</div>
	</a>
	<div class="info">
		<p>{product.price}</p>
		<SmallButton disabled={!product.in_stock} />
	</div>
</Card>

<style>
	.productInfo__link:hover p {
		font-weight: bold;
	}
	.productInfo__link:hover img {
		transition: all 0.3s;
		transform: scale(1.02);
	}
	.productInfo__img {
		height: 200px;
	}
	a {
		text-decoration: none;
		color: black;
	}
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
		width: 150px;
		height: 150px;
		object-fit: cover;
		margin: auto;
	}
</style>
