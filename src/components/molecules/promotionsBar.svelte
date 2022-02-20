<script>
</script>

<div class="bar">
	<a href="/about">MEN</a>
	<a href="/about">WOMEN</a>
	<a href="/about">NEW</a>
	<a href="/about">SALE</a>
</div>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: underline;
	}
	.bar {
		display: flex;
		gap: 5rem;
		justify-content: center;
		background-color: white;
		width: 100%;
		height: fit-content;
		font-size: xx-large;
		padding: 10px 0;
		margin: 0.5rem 0;
		background-color: #f6f6f6;
	}
	@media (max-width: 768px) {
		.bar {
			font-size: 100%;
			gap: 1rem;
		}
	}
</style>
