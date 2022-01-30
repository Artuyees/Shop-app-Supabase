<script>
	export let list;
	const x = Math.floor(Math.random() * list.length);
</script>

<div class="bar">
	{list[x]}
</div>

<style>
	.bar {
		display: flex;
		justify-content: center;
		background-color: #f0f0f0;
		width: 100%;
		margin-top: 10px;
		height: fit-content;
		font-size: xx-large;
		padding: 10px 0;
	}
</style>
