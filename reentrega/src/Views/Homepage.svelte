<script>
	import Post from '../Components/Post.svelte';
	import ProfileCard from '../Components/ProfileCard.svelte';
	import PopularAccounts from '../Components/PopularAccounts.svelte';
	import ButtonApp from '../Components/ButtonApp.svelte';
	import NewPost from '../Components/NewPost.svelte';
	import Header from '../Components/Header.svelte';
	import AdvertisingCard from '../Components/AdvertisingCard.svelte';

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
			<div class="buttonPost" on:click={createPost}>
				<ButtonApp text={'CREAR POST'} width={150} size={16} color={'A4CC79'}/>
			</div>
			<div class="separator"></div>
			<p class="advertising">Publicidad</p>
			<AdvertisingCard title={'Nutribon'} site={'nutribon.com.ar'} urlImage={'../images/publi1.png'}/>
			<AdvertisingCard title={'Vital Veterinaria'} site={'vitalveterinaria.com'} urlImage={'../images/publi2.png'}/>
		</div>
		<div class="homepage-center" id="style-2">
			<Post i={1} name={'Juan Lopez'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
			<Post i={0} name={'Fernando Swchard'} text={'Las familias con mascota deben contar con un veterinario de confianza desde el primer momento que el animal llega a nuestros hogares y forma parte de nuestra familia como un miembro más, que siempre estará dispuesto a resolver las dudas que puedan surgir en el día a día.'}/>
			<Post i={1} name={'Maria Acosta'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
			<Post i={0} name={'Felipe Suarez '} text={'Las familias con mascota deben contar con un veterinario de confianza desde el primer momento que el animal llega a nuestros hogares y forma parte de nuestra familia como un miembro más, que siempre estará dispuesto a resolver las dudas que puedan surgir en el día a día.'}/>
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
		padding: 20px 10px 20px 20px;
		overflow-y: scroll;
		height: 86vh;
		margin-right: 10px;
	}

	#style-2::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		margin: 20px 0 20px 0;
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	#style-2::-webkit-scrollbar {
		width: 4px;
		background-color: #F5F5F5;
	}

	#style-2::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #54417962;
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
	  backdrop-filter: blur(3px);
      background-color: #31354244;
	  padding: 0;
	  margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

	.buttonPost {
		display: flex;
		justify-content: center;
		margin: 20px 0 20px 0;
	}

	.separator {
		border-bottom: 1px solid #414759;
	}

	.advertising {
		margin: 20px 0 8px 0;
		color:#414759;
		font-weight: 600;
	}

</style>