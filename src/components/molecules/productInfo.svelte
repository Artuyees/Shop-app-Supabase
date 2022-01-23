<script>
	import SmallButton from '../atoms/smallButton.svelte';
	import { cartItems } from '../../stores/cartStore';
	export let product;
	import Card from '../atoms/card.svelte';

	const handleClick = () => {
		$cartItems = [...$cartItems, product];
	};
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
		{#if product.on_sale == null}<h3>{product.price} pln</h3>{:else}<h3>
				<div class="sale">
					<span class="old_price">{product.price} pln</span>
					<span class="new_price"
						>{(product.price - product.price * (product.on_sale / 100)).toFixed(2)} pln</span
					>
				</div>
			</h3>{/if}
		<SmallButton disabled={!product.in_stock} on:click={handleClick} />
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
		height: 20%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	.sale {
		display: flex;
		flex-direction: column;
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
