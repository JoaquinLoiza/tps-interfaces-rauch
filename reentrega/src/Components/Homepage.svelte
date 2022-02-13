<script>
	import Post from './Components/Post.svelte';
</script>

<main>
    <div class="homepage">
		<div class="homepage-left">lateral izq</div>
		<div class="homepage-center">
			<Post/>
		</div>
	    <div class="homepage-right">persons que quizas conoscas</div>
	</div>
</main>

<style>
.homepage {
    display: flex;
    justify-content: space-between;
}
.homepage-left {
	width: 25%;
	background-color: rgb(146, 142, 142);
}
.homepage-center {
	width: 50%;
}
.homepage-right {
	width: 25%;
	background-color: rgb(146, 142, 142);
}
</style>