<script>
    import LiUser from './LiUser.svelte';
    import {
        XLg
  } from "svelte-bootstrap-icons";
    export let close;

    function selectUser(){
        let x = document.querySelector('.select');
        let y = document.querySelector('.input');
        let z = document.querySelector('.user');
        x.style.backgroundColor = "#414759";
        z.style.display="block";
    }

</script>

<div class="msg">
    <div class="header">
        <div on:click={close}><XLg/></div>
        <h1>Nuevo mensaje</h1>
        <a href="x">Chat</a>
    </div>
    <div class="search-user">
        <div class="for">
            <h1>Para:</h1>
        </div>
        <div class="user">
            <h1>Juan Perez</h1>
        </div>
        <div class="input">
            <input type="text">
        </div>
        
    </div>
    <div class="body">
        <h1>Recientes</h1>
        <div id="list">
            <div class="li-user" on:click={selectUser}>
                <LiUser name={'Juan Perez'} user={'@JuanPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                <div class="circle select"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Martin Sanchez'} user={'@MartinOk'} pathImage={'../images/images-hombre-gatito.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Joaquin Lopez'} user={'@LopezJoaquinOk'} pathImage={'../images/images-hombre.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Maria Perez'} user={'@MariaPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div> 
            <div class="li-user">
                <LiUser name={'Juan Lucero'} user={'@LuceroOk'} pathImage={'../images/images-hombre-gatito.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div> 
            <div class="li-user">
                <LiUser name={'Juan Acosta'} user={'@JuanOk'} pathImage={'../images/images-hombre.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Martin Sanchez'} user={'@MartinOk'} pathImage={'../images/images-hombre-gatito.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Joaquin Lopez'} user={'@LopezJoaquinOk'} pathImage={'../images/images-hombre.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
            <div class="li-user">
                <LiUser name={'Maria Perez'} user={'@MariaPerezOk'} pathImage={'../images/veterinaria.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div> 
            <div class="li-user">
                <LiUser name={'Juan Lucero'} user={'@LuceroOk'} pathImage={'../images/images-hombre-gatito.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div> 
            <div class="li-user">
                <LiUser name={'Juan Acosta'} user={'@JuanOk'} pathImage={'../images/images-hombre.jpg'} w={30} h={30}/>
                <div class="circle"></div>
            </div>
        </div>
        
    </div>
</div>

<style>
    .msg {
        width: 300px;
        height: 400px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        padding: 10px;
        color: #414759;
    }
    a, a:hover {
        color: #414759;
        text-decoration: none;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        border-bottom: 1px solid #c0c0c0;;
        padding-bottom: 5px;
    }
    .search-user{
        display: flex;
        justify-content: start;
        align-items: center;
        height: 30px;
        padding-top: 7px;
        border-bottom: 1px solid #c0c0c0;;
        padding-bottom: 7px;
    }
    h1 {
        font-size: 16px;
        color: #414759;
        font-weight: 600;
    }
    .header h1 {
        font-size: 18px;
        color: #414759;
        font-weight: 800;
    }
    input {
        border: none;
        outline: none;
        border: 0;
        margin-left: 3px;
    }
    .body {
        height: auto;
    }
    #list {
        overflow-y: scroll;
        height: 270px;
    }

    #list::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		margin: 20px 0 20px 0;
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	#list::-webkit-scrollbar {
		width: 4px;
		background-color: #F5F5F5;
	}

	#list::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #54417962;
	}
    .li-user {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .circle {
        width: 15px;
        height: 15px;
        border: 2px solid #414759;
        border-radius: 15px;
        margin-right: 10px;
    }
    .user {
        display: none;
    }
    .search-user .user h1{
        margin: 2px;
        padding: 4px;
        font-size: 14px;
        background-color: #414759;
        color: white;
        border-radius: 14px;
        font-weight: 400;
    }

    @media (max-width: 376px) {
        .msg {
            height: 550px;
            margin-top: 20px;
        }
        #list {
        height: 420px;
        }
    }
</style>            