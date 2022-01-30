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
		min-width: fit-content;
		margin: 50px auto;
		border-radius: 10px;
		padding: 10px;
		box-shadow: 0px 0px 27px -3px rgba(92, 91, 91, 1);
	}
	@media (max-width: 768px) {
		.box {
			width: 100%;
			margin: none;
			box-shadow: none;
			border-top: 1px solid gray;
			border-bottom: 1px solid gray;
			border-radius: 0;
		}
	}
</style>
