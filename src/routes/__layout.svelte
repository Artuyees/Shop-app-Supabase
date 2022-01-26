<script>
	import MainBar from '../components/molecules/mainBar.svelte';
	import About from '../components/molecules/about.svelte';
	import Alert from '../components/atoms/alert.svelte';
</script>

<svelte:head>
	<title>Watch store</title>
	<meta name="description" content="Here you can buy watch from your dreams." />
</svelte:head>
<Alert />
<div class="everything">
	<div class="main__content">
		<MainBar />
		<slot />
		<About />
	</div>
</div>

<style>
	.everything {
		min-height: 100vh;
		display: block;
		position: relative;
	}
	.main__content {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
	}
</style>
