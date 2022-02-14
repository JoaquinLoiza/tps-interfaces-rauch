<script>
	import Post from './Post.svelte';
</script>

<main>
    <div class="homepage">
		<div class="homepage-left">lateral izq</div>
		<div class="homepage-center">
			<Post name={'Juan Lopez'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
			<Post name={'Fernando Swchard'} text={'Las familias con mascota deben contar con un veterinario de confianza desde el primer momento que el animal llega a nuestros hogares y forma parte de nuestra familia como un miembro más, que siempre estará dispuesto a resolver las dudas que puedan surgir en el día a día.'}/>
			
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