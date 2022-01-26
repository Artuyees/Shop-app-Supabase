<script>
	import Cart from '../components/organisms/cartContainer.svelte';

	import CartItems from '../components/molecules/cartItems.svelte';

	import { cartItems } from '../stores/cartStore';
	import CartPrice from '../components/molecules/cartPrice.svelte';
	import XIcon from '../components/atoms/xIcon.svelte';
	import { onMount } from 'svelte';

	let sum = 0;
	const handleRemove = (index) => {
		$cartItems = $cartItems.filter((e, i) => i !== index);
		updatePrice();
	};
	onMount(async () => {
		updatePrice();
	});
	const updatePrice = () => {
		sum = 0;
		if ($cartItems.length > 0) {
			$cartItems.forEach((element) => {
				if (element.on_sale == null) {
					sum += element.price;
				} else {
					sum += element.price - element.price * (element.on_sale / 100);
				}
			});
		}
		return sum;
	};
</script>

<Cart>
	{#if $cartItems.length > 0}
		{#each $cartItems as item, i}
			<div class="content">
				<CartItems {item} />
				<XIcon on:click={() => handleRemove(i)} />
			</div>
		{/each}
		<CartPrice {sum} />
	{:else}
		<h1>Your cart is empty.</h1>
	{/if}
</Cart>

<style>
	.content {
		display: flex;
		width: 100%;
	}
</style>
