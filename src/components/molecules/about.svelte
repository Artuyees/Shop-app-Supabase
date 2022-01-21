<script>
</script>

<div class="about__container">
	<a href="/about">About page</a>
	<a href="/about">About page</a>
	<a href="/about">About page</a>
	<a href="/about">About page</a>
	<a href="/about">About page</a>
	<a href="/about">About page</a>
</div>

<style>
	a {
		text-decoration: none;
		color: black;
	}
	.about__container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 3em 20%;
		grid-template-areas:
			'. . .'
			'. . .'
			'. . .';
		gap: auto;
		width: 100%;
		height: 200px;
		text-align: center;
		background-color: #f0f0f0;
		height: fit-content;
		position: absolute 0;
	}
</style>
