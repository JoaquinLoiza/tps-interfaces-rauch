<script>
    import Header from '../Components/Header.svelte';
    import LiChat from '../Components/liChat.svelte';
    import ProfileImage from "../Components/ProfileImage.svelte";
    import MessageChat from '../Components/MessageChat.svelte';
    import ButtonApp from '../Components/ButtonApp.svelte';
    import HeaderMobile from '../Components/HeaderMobile.svelte';
    import NewMsg from '../Components/NewMsg.svelte';

    import {
        PencilSquare,
        PlusCircle,
        Images,
        Send,
        CameraVideo,
        Telephone,
        XLg,
        Mic
  } from "svelte-bootstrap-icons";

    let show = true;
    let callvideo = false;
    const showMsj = () => {
       if(show = true){
           show=false;
       }
       else{
           show=true;
       }
    }

    function noShowMsj(){
        show=true;
    }

    function showCallvideo(){
        callvideo = true;
    }
    function showNoCallvideo(){
        callvideo = false;
    }

    function newMsg(){
        let x = document.querySelector('.msg');
        x.style.display='flex';
    }

    const close = () => {
        let x = document.querySelector('.msg');
        x.style.display='none';
    }
</script>

<div class="mobile">
    <HeaderMobile/>
</div>


<div class="destk">
   <Header h={false} m={true}/> 
</div>
<div class="msg">
   <NewMsg {close}/>
</div>
<div class="chats">
    <div class="chat-list">
        <div class="chat-header">
            <h3 class="destk">Chats</h3>
            <div on:click={newMsg}>
                <PencilSquare/>
            </div>
        </div>
        <div class="list" id="style-2">
            <div class="chat-header-mobile">
                <h3>Chats</h3>
                <div on:click={newMsg}>
                    <PencilSquare/>
                </div>
            </div>
                <LiChat user={'Romina Dehesa'} path={'../images/veterinaria.jpg'} text={'Bueno!'} hs={'2hs'} {showMsj}/>
                <LiChat user={'Juan Perez'} path={'../images/images-hombre-gatito.jpg'} text={'Genial!'} hs={'3hs'}/>
                <LiChat user={'Martin Acosta'} path={'../images/images-hombre.jpg'} text={'Ok!'} hs={'4hs'}/>
                <LiChat user={'Daiana Sanchez'} path={'../images/veterinaria.jpg'} text={'Paso por la veterinaria a las 18hs. Nos vemos!'} hs={'4hs'}/>
                <LiChat user={'Marcos Caseros'} path={'../images/images-hombre-gatito.jpg'} text={'Saludos'} hs={'1d'}/>
                <LiChat user={'Esther Sanchez'} path={'../images/images-hombre.jpg'} text={'Hola!'} hs={'2d'}/>
                <LiChat user={'Romina Dehesa'} path={'../images/veterinaria.jpg'} text={'Listo, genial!'} hs={'2hs'}/>
                <LiChat user={'Juan Perez'} path={'../images/images-hombre-gatito.jpg'} text={'Genial!'} hs={'3hs'}/>
                <LiChat user={'Martin Acosta'} path={'../images/images-hombre.jpg'} text={'Ok!'} hs={'4hs'}/>
                <LiChat user={'Joaquin Martinez'} path={'../images/images-hombre-gatito.jpg'} text={'Listo!'} hs={'4hs'}/>
                <LiChat user={'Marcos Caseros'} path={'../images/images-hombre.jpg'} text={'Saludos'} hs={'1d'}/>
                <LiChat user={'Juan Carlos Martinez'} path={'../images/images-hombre-gatito.jpg'} text={'Hola!'} hs={'1s'}/>
                <LiChat user={'Juan Perez'} path={'../images/images-hombre-gatito.jpg'} text={'Genial!'} hs={'3hs'}/>
                <LiChat user={'Martin Acosta'} path={'../images/images-hombre.jpg'} text={'Ok!'} hs={'4hs'}/>
                <LiChat user={'Joaquin Martinez'} path={'../images/images-hombre-gatito.jpg'} text={'Listo!'} hs={'4hs'}/>
                <LiChat user={'Marcos Caseros'} path={'../images/images-hombre.jpg'} text={'Saludos'} hs={'1d'}/>
                <LiChat user={'Juan Carlos Martinez'} path={'../images/images-hombre-gatito.jpg'} text={'Hola!'} hs={'1s'}/>
        </div>
    </div>
    <div class="chat destk">
        {#if !show}
                {#if !callvideo}
                <div class="chat-username">
                    <div class="chat-photo-username">
                        <ProfileImage width={45} height={45} pathImage={'../images/veterinaria.jpg'}/>
                        <div>
                            <h3>Romina Dehesa</h3>
                            <p>Conectado(a)</p>
                        </div>
                    </div>
                    <div class="icons">
                        <Telephone/>
                        <CameraVideo on:click={showCallvideo}/>
                        <XLg on:click={noShowMsj}/>
                    </div>
                </div>
                <div class="chat-body" id="style-2">
                    <MessageChat send={true} text={'Hola!'}/>
                    <MessageChat send={true} text={'Como andas?'}/>
                    <MessageChat send={true} text={'Necesito tu ayuda!'}/>
                    <MessageChat send={false} text={'Hola, bien y vos?'}/>
                    <MessageChat send={false} text={'Si, decime!'}/>
                    <MessageChat send={true} text={'Bien, bien!'}/>
                    <MessageChat send={true} text={'Mi perro tiene alergia, necesito que se mejore.'}/>
                    <MessageChat send={true} text={'Que puedo hacer?'}/>
                    <MessageChat send={false} text={'Lo mejor es que vengas a una consulta, en la veterinaria.'}/>
                    <MessageChat send={false} text={'Si queres, te doy un turno para esta semana.'}/>
                    <MessageChat send={true} text={'Bueno!'}/>
                    <MessageChat send={true} text={'El martes podra ser?'}/>
                    <MessageChat send={false} text={'Si. A las 17hs te parece?'}/>
                    <MessageChat send={true} text={'Si, si. Genial!'}/>
                </div>
                <div class="chat-footer">
                    <div class="icons">
                        <PlusCircle/>
                        <Images/>
                    </div>
                    <div class="input-chat"><input type="text" placeholder="Aa"></div>
                    <div class="send">
                        <Send/>
                    </div>
                </div>
            {:else}
            <div class="chat-username">
                <div class="chat-photo-username">
                    <ProfileImage width={45} height={45} pathImage={'../images/veterinaria.jpg'}/>
                    <div>
                        <h3>Romina Dehesa</h3>
                    </div>
                </div>
                <div class="icons">
                    <XLg on:click={showNoCallvideo}/>
                </div>
            </div>
            <div class="callvideo">
                <div><Mic/></div>
                <div><CameraVideo/></div>
            </div>
            {/if}
        {:else}
        <div class="sec-chat">
            <div>
                <div class="rond-send"><Send/></div>
                <h2>Envia un mensaje privado a un amigo o a un grupo.</h2>
                <div on:click={newMsg}>
                    <ButtonApp text={'Enviar Mensaje'} width={140} size={14} color={'A4CC79'}/>
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

<style>
    .chats {
        display: flex;
        justify-content: center;
    }
    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #414759;
        padding-bottom: 10px;
    }
    .chat-header:global(svg){
        margin: 0;
        margin-bottom: 8px;
    }
    .chat-list, .chat {
        height: 100vh;
        margin: 20px;
    }
    .chat-list {
        width: 30%;
        height: 100vh;
        margin-right: 10px;
    }
    .chat {
        width: 50%;
        height: 84vh;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        padding-top: 5px;
        margin-left: 10px;
    }
    h3 {
        font-size: 16px;
        color: #414759;
        margin: 0;
        padding: 0;
        font-weight: 600;
    }
    .chat-photo-username {
        display: flex;
        align-items: center;
    }
    .chat-photo-username p {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #6b6b6b;
    }
    .chat-photo-username div {
        margin-left: 5px;
    }
    .list {
        width: auto;
        height: 80vh;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        padding-top: 5px 10px 5px 10px;
        overflow-y: scroll;
    }
    #style-2::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
		box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
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
		box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #54417962;
	}
    .chat {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .chat-username, .chat-footer {
        height: 10%;
    }
    .chat-username {
        border-bottom: 1px solid #c0c0c0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }
    .chat-footer {
        border-top: 1px solid #c0c0c0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input {
        border-radius: 10px;
        border: 1px solid #626a82c6;
        padding: 5px;
        width: 100%;
    }
    .icons, .send {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #544179;
    }
    .chat-username .icons {
        display: flex;
        justify-content: end;
    }
    .send {
        width: 10%;
    }
    .input-chat {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chat-body {
        overflow-y: scroll;
    }
    .icons :global(svg), .send :global(svg){
        width: 20px;
        height: 20px;
        margin: 10px;
    }
    .sec-chat {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .sec-chat div {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    h2 {
        font-size: 16px;
        color: #666666;
    }
    .rond-send {
        border: 2px solid #666666;
        border-radius: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#666666;
        padding: 20px;
    }
    .rond-send :global(svg){
        height: 30px;
        width: 30px;
    }
    .callvideo {
        background-image: url('../images/callvideo.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .callvideo div {
        height: 50px;
        width: 50px;
        background-color: rgba(255, 255, 255, 0.898);
        border: 1px solid #544179;
        border-radius: 60px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #544179;
    }
    .callvideo div :global(svg) {
        height: 25px;
        width: 25px;
    }
    .mobile {
        display: none;
    }
    .chat-header-mobile {
        display: none;
    }
    .msg {
        position: fixed;
        height: 100%;
        width: 100%;
        backdrop-filter: blur(3px);
        background-color: #31354244;
        z-index: 1;
        display: none;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 376px) {
        .destk {
            display: none;
        }
        .mobile {
            display: block;
            width: 375px;
            height: 100hv;
        }
        .chats {
            width: auto;
        }
        .chat-list {
            margin: 10px;
            width: 100%;
        }
        .chat-header {
            display: none;
        }
        .chat-header :global(svg){
            display: none;
        }
        .chat-header-mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #544179;
            border-bottom: 1px solid #c0c0c0;
            padding-left: 10px;
            padding-right: 10px;
        }
        h3 {
            font-size: 20px;
            font-weight: 600;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .chat-header-mobile :global(svg){
            display: block;
            height: 20px;
            width: 20px;
        }
        .list {
            display: block;
            justify-content: center;
            align-items: center;
            height: 87vh;
        }
        p {
            padding: 0;
            margin:0;
        }
        .msg {
        align-items: start;
    }
    }
 </style>