<script>
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5px;
		max-width: 72rem;
		padding: 0px 20px;
	}
	@media (max-width: 768px) {
		.container {
			justify-content: center;
			margin-bottom: 100px;
		}
	}
</style>
