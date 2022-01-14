<script>
</script>

<div class="card">
	<slot />
</div>

<style>
	.card {
		display: grid;
		grid-column: auto;
		height: min-content;
		box-shadow: 0 0 1px black;
		padding: 10px;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: min-content;
	}
</style>
