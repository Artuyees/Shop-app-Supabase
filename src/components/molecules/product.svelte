<script>
	import SmallButton from '../atoms/addToCartButton.svelte';
	import Card from '../atoms/card.svelte';
	export let product;
</script>

<Card>
	<a class="productInfo__link" href={`product/${product.id}`}>
		<div class="productInfo__img">
			<img src={product.img} alt="xd" />
			<span>
				{product.product_name}
			</span>
		</div>
	</a>
	<div class="info">
		{#if product.on_sale == null}<span>{product.price}€</span>{:else}<span>
				<div class="sale">
					<span class="old_price">{product.price}€</span>
					<span class="new_price"
						>&nbsp;{(product.price - product.price * (product.on_sale / 100)).toFixed(2)} €</span
					>
				</div>
			</span>{/if}
		<SmallButton disabled={!product.in_stock} {product} />
	</div>
</Card>

<style>
	.productInfo__link:hover span {
		font-weight: bold;
	}
	.productInfo__link:hover img {
		transition: all 0.3s;
		transform: scale(1.02);
	}
	.productInfo__img {
		width: 100%;
	}

	a {
		text-decoration: none;
		color: black;
	}
	.info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	img {
		width: 100%;
		height: 16rem;
		object-fit: cover;
		margin: auto;
	}
	.sale {
		display: flex;
	}
	.old_price {
		color: gray;
		text-decoration: line-through;
	}
	.new_price {
		color: red;
		font-weight: bold;
	}
</style>
