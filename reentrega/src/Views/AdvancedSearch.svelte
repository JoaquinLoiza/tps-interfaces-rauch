<script>
    import Header from '../Components/Header.svelte';
    import ButtonOutline from '../Components/ButtonOutline.svelte';
    import Post from '../Components/Post.svelte';
    import LiUser from '../Components/LiUser.svelte';

    function showAllContent(){
        let all = document.querySelectorAll('.btn');

        all.forEach( e => {
            console.log(e.dataset.press);
        });
    }

    function showOnlyPersons(){
        let x = document.querySelector(".publications");
        let l = document.querySelectorAll(".userh");
        let a = document.querySelector(".seeMore");
        x.style.display = "none";

        for (const item of l) {
            item.style.display = "block";
        }
        a.style.display="none";
    }

</script>

<Header h={false} m={false}/>
<main>
    <div class="container">
        <div class="btnsOutlines">
            <div class="btn" data-press='true' on:click={showAllContent}>
                <ButtonOutline text={'Todo'} width={90} size={15}/>
            </div>
            <div class="btn" data-press='false' on:click={showOnlyPersons}>
                <ButtonOutline pressClass={'noPress'} text={'Personas'} width={90} size={15}/>
            </div>
            <div class="btn" data-press='false'>
                <ButtonOutline pressClass={'noPress'} text={'Publicaciones'} width={100} size={15}/>
            </div>
            <div class="btn" data-press='false'>
                <ButtonOutline pressClass={'noPress'} text={'Lugares'} width={90} size={15}/>
            </div>
            <div class="btn" data-press='false'>
                <ButtonOutline pressClass={'noPress'} text={'Ocupación'} width={90} size={15}/>
            </div>
        </div>

        <div class='results' id='scrollCustom'>
            <div class='peoples'>
                <div>
                    <h3>Personas</h3>
                    <div class="li-user">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <div class="li-user">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <div class="li-user">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <div class="li-user userh">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <div class="li-user userh">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <div class="li-user userh">
                        <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                    </div>
                    <a href="#" class="seeMore" on:click={showOnlyPersons}>Ver mas</a>
                </div>
            </div>
            <div class="publications">
                <div>
                    <h3>Publicaciones</h3>
                    <Post i={1} name={'Juan Lopez'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
                    <Post i={0} name={'Juan Lopez'} text={'Las familias con mascota deben contar con un veterinario de confianza desde el primer momento que el animal llega a nuestros hogares y forma parte de nuestra familia como un miembro más, que siempre estará dispuesto a resolver las dudas que puedan surgir en el día a día.'}/>
                    <Post i={1} name={'Juan Lopez'} text={'Los médicos veterinarios no sólo se forman para atender a pequeños y grandes animales sino que además lo hacen en un área que cada vez adquiere mayor relevancia y visibilidad en la población a nivel nacional e internacional.'}/>
                    <a href="#" >Ver mas</a>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
    }
    .container{
        width: 100%;
        max-width: 1200px;
    }
    .results {
        height: 80vh;
        overflow-y: scroll;
    }
    .btnsOutlines {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .li-user {
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        margin-bottom: 5px;
        width: auto;
    }
    .peoples {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .publications {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
    .publications div {
        max-width: 700px;
        height: auto;
        padding-right: 10px;
    }
    
    .peoples div{
        max-width: 700px;
        width: 100%;
        height: auto;
        padding-right: 10px;
    }

	#scrollCustom::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		margin: 20px 0 20px 0;
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	#scrollCustom::-webkit-scrollbar {
		width: 4px;
		background-color: #F5F5F5;
	}

	#scrollCustom::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #54417962;
	}
    .userh {
        display: none;
    }
    a {
        text-decoration: none;
    }
</style>