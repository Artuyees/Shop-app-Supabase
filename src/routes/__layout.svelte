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
	<MainBar />
	<div class="content-wrap">
		<slot />
	</div>
	<About />
</div>

<style>
	.everything {
		min-height: 100vh;
		height: 100%;
		position: relative;
	}
	.content-wrap {
		padding-bottom: 60px;
	}
</style>
