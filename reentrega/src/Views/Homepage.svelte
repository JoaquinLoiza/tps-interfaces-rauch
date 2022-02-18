<script>
	import Post from '../Components/Post.svelte';
	import PostImages from '../Components/PostImages.svelte';
	import ProfileCard from '../Components/ProfileCard.svelte';
	import PopularAccounts from '../Components/PopularAccounts.svelte';
	import ButtonApp from '../Components/ButtonApp.svelte';
	import NewPost from '../Components/NewPost.svelte';
	import Header from '../Components/Header.svelte';

	function createPost(){
		let d = document.querySelector('.createPost');
    	d.style.visibility = 'visible';
	}
</script>

<Header/>
<main>
	<div class="createPost">
		<NewPost/>
	</div>
    <div class="homepage" id="home">
		<div class="homepage-left">
			<ProfileCard/>
			<div on:click={createPost}><ButtonApp text={'Postear'} width={150} size={20}/></div>
		</div>
		<div class="homepage-center">
			<Post name={'Juan Lopez'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
			<PostImages name={'Juan Carlos Caseros'} text={'La EMA señala en porcinocultura, Suiseng Diff/A, nueva vacuna para la inmunización pasiva de lechones recién nacidos mediante la inmunización activa de cerdas reproductoras, y comentan al respecto que “al proteger a los animales contra enfermedades que podrían haber necesitado tratamiento con antimicrobianos, esta nueva vacuna puede ayudar a reducir el uso de antimicrobianos.'}/>
			<Post name={'Fernando Swchard'} text={'Las familias con mascota deben contar con un veterinario de confianza desde el primer momento que el animal llega a nuestros hogares y forma parte de nuestra familia como un miembro más, que siempre estará dispuesto a resolver las dudas que puedan surgir en el día a día.'}/>
		</div>
	    <div class="homepage-right">
			<PopularAccounts/>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}
	.homepage {
		display: flex;
	    justify-content: space-between;
		max-width: 1200px;
	}
	.homepage-left {
		width: 25%;
		padding-top: 20px;
	}
	.homepage-center {
		width: 50%;
		padding: 20px;
	}
	.homepage-right {
		width: 25%;
		padding-top: 20px;
	}
	.createPost {
      position: fixed;
      height: 100%;
      width: 100%;
      visibility: hidden;
      background-color: #41475944;
	  padding: 0;
	  margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>