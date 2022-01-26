<script context="module">
	export async function load({ params }) {
		const id = params.id;
		return { props: { id } };
	}
</script>

<script>
	export let id;
	import supabase from '$lib/db';
	import SmallButton from '../../components/atoms/addToCartButton.svelte';
	import { onMount } from 'svelte';
	let products = [];
	onMount(async () => {
		let { data, error } = await supabase.from('Products').select('*').eq('id', `${id}`);
		products = data;
	});
	console.log(id);
</script>

{#each products as product}
	<div class="card">
		<img src={product.img} alt="" />
		<div class="product__text">
			<h1>{product.product_name}</h1>
			<div class="price__tag">
				{#if product.on_sale == null}<h3>{product.price} pln</h3>{:else}<h3>
						<div class="sale">
							<span class="old_price">{product.price} pln</span>
							<span class="new_price"
								>{(product.price - product.price * (product.on_sale / 100)).toFixed(2)} pln</span
							>
						</div>
					</h3>{/if}
				{#if !product.in_stock}SOLD OUT{/if}
				<div class="price__tag--button">
					<SmallButton disabled={!product.in_stock} {product} />
				</div>
			</div>
			<p>{product.text}</p>
		</div>
	</div>
{/each}

<style>
	.card {
		margin-top: 100px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 200px;
		display: flex;
		max-width: max-content;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 20px 20px;
		border: 1px solid #f0f0f0;
		border-radius: 10px;
	}

	@media (min-width: 766px) {
		.card {
			flex-direction: row;
			wrap: nowrap;
			max-width: 50%;
		}
		img {
			width: 400px;
			height: 400px;
			padding-right: 20px;
		}
	}
	.price__tag {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		gap: 4px;
	}
	.price__tag--button {
		margin-left: auto;
	}
	.product__text {
		display: flex;
		flex-direction: column;
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
	img {
		width: 100%;
		object-fit: cover;
	}
</style>
