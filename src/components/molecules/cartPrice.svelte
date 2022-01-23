<script>
	export let sum;
</script>

<div class="price__container">
	FINALNY KOSZT: <h1>{Math.floor(sum)} pln</h1>
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
		width: 25%;
		height: 50px;
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
