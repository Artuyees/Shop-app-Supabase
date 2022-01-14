<script>
	export let text;
	export let disabled = false;
</script>

<button class="button__small" {disabled}>{text}</button>

<style>
	.button__small {
		width: min-content;
		height: min-content;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		background-color: var(--color, green);
		border: 1px solid black;
		margin: auto;
	}
	.button__small:hover {
		background-color: var(--colorhover, lightgreen);
		cursor: pointer;
	}
	.button__small:disabled {
		background-color: var(--colordisabled, gray);
		cursor: default;
	}
</style>
