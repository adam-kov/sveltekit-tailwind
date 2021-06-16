<script>
	import { BASE_URL } from "../helpers";
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">
	<h1 class="pb-8">Welcome to SvelteKit</h1>
	<p>Visit <a href="about">about page</a></p>
</div>

<svelte:head>
	<title>Main Page</title>

	<link rel="canonical" href={BASE_URL}>
	<meta name="description" content="This is the main page of the SvelteKit-Tailwind template.">

	<meta property="og:type" content="website">
	<meta property="og:url" content={BASE_URL}>
	<meta property="og:title" content="SvelteKit-Tailwind Template Page">
	<meta property="og:description" content="This is the main page of the SvelteKit-Tailwind template.">
	<meta property="og:image" content={BASE_URL + 'images/link.png'}>

	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content={BASE_URL}>
	<meta property="twitter:title" content="SvelteKit-Tailwind Template Page">
	<meta property="twitter:description" content="This is the main page of the SvelteKit-Tailwind template.">
	<meta property="twitter:image" content={BASE_URL + 'images/link.png'}>
</svelte:head>
