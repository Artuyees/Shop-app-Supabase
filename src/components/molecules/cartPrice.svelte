<script>
	export let sum;
</script>

<div class="price__container">
	Final cost: <h1>{Math.floor(sum)} €</h1>
	<input type="submit" value="ZAMÓW" />
</div>

<style>
	.price__container {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		gap: 1em;
		align-items: center;
		min-width: fit-content;
	}
	input {
		padding: 10px;
		width: fit-content;
		height: fit-content;
		border: none;
		border-radius: 10px;
		background-color: orange;
		color: white;
		font-size: x-large;
		transition: all 0.3s;
	}
	input:hover {
		cursor: pointer;
		background-color: darkorange;
		box-shadow: 0px 3px 46px 1px rgba(220, 184, 132, 1);
	}
	input:focus {
		background-color: #fa4902;
	}
</style>
