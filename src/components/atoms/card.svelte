<script>
</script>

<div class="card">
	<slot />
</div>

<style>
	.card {
		height: 350px;
		width: 250px;
		display: grid;
		grid-column: auto;
		box-shadow: 0 0 1px black;
		padding: 10px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
