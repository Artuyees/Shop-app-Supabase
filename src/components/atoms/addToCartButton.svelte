<script>
	import { cartItems } from '../../stores/cartStore';
	import { hidden, alertText } from '../../stores/alertStore';
	export let disabled = false;
	export let product;

	const handleClick = () => {
		$alertText = `Added ${product.product_name} to cart`;
		$hidden = false;
		$cartItems = [...$cartItems, product];
		setTimeout(() => {
			$hidden = true;
		}, 3000);
	};
</script>

<button class="button__small" {disabled} on:click={handleClick}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
		/>
	</svg>
</button>

<style>
	.button__small {
		display: flex;
		width: 32px;
		height: 32px;
		color: white;
		border-radius: 100%;
		background-color: var(--color, green);
		border: 1px solid black;
		align-items: center;
	}

	.button__small svg {
		width: 30px;
		height: 30px;
	}
	.button__small:hover {
		background-color: var(--colorhover, lightgreen);
		cursor: pointer;
	}
	.button__small:disabled {
		background-color: var(--colordisabled, gray);
		cursor: default;
	}
</style>
