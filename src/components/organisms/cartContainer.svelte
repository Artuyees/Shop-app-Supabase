<script>
</script>

<div class="box">
	<slot />
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		width: fit-content;
		max-width: 1000px;
		min-width: fit-content;
		margin: 50px auto;
		border-radius: 10px;
		padding: 10px;
	}
	@media (max-width: 768px) {
		.box {
			width: 100%;
			margin: none;
			box-shadow: none;
			border-radius: 0;
			padding: 10px 0px;
		}
	}
</style>
