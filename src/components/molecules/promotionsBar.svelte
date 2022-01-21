<script>
	export let list;

	const x = Math.floor(Math.random() * list.length);
	console.log(list[x]);
</script>

<div class="bar">
	{list[x]}
</div>

<style>
	.bar {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: fit-content;
		padding: 10px;
		font-size: large;
	}
</style>
