<script>
</script>

<div class="box">
	<slot />
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;
		width: fit-content;
		max-width: 1000px;
		margin: 100px auto;
		border-radius: 10px;
		padding: 10px;
	}
</style>
