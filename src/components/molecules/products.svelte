<script>
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 5px;
		padding: 0px 20px;
		border-right: 1px solid #f0f0f0;
		border-left: 1px solid #f0f0f0;
		margin-bottom: 200px;
	}
</style>
