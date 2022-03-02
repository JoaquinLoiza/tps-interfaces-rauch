<script>
    import InputRegistration from "../Components/InputRegistration.svelte";
    import ButtonApp from "../Components/ButtonApp.svelte";
    import {Link, link} from 'svelte-routing';

    function reload(){
        window.location.href = "http://localhost:8080/home";
    }
</script>

<main>
    <div class="container">
        <div class="layer"></div>
    </div>
    <div class="blur-login">
        <div class="blur"></div>
    </div>
    <div class="div-login">
        <div class="login">
            <div class="log">
                    <img src="../images/Logo.svg" alt="">
            </div>
            <div class="l">
                    <h1>Iniciar Sesion</h1>
                    <InputRegistration label={'Nombre'} type={'text'}/>
                    <InputRegistration label={'Contraseña'} type={'password'}/>
                    <div class="buttons">
                    <div>
                        <div class="btn" on:click={reload}>
                            <ButtonApp text={'Iniciar Sesion'} width={100} size={14} color={'A4CC79'} h={'rgb(166 229 99)'}/>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <h3>¿No tienes una cuenta? <Link to="/registration"><inline>Registrate.</inline></Link></h3>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
.container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.layer {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('../images/vetu.png');
    background-repeat: repeat-x;
    background-size: contain;
    opacity: 0.5;
    animation: moveBackground 50s infinite linear;
}

@keyframes moveBackground {
    0% {
        background-position: 0%;
    }
    100% {
        background-position: 100%;
    }
}
main {
    background-color: #544179;
    height: 100vh;
    width: 100vw;
}
.div-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
.login {
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    z-index: 1;
}
.blur-login {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.blur {
    width: 800px;
    height: 500px;
    background-color: #544179;
    filter: blur(30px);
}
.log{
    height: auto;
    width: auto;
    height: auto;
    width: 300px;
    padding: 30px;
    z-index: 1;
}
.l {
    height: auto;
    width: auto;
    height: 300px;
    width: 300px;
    padding: 30px;
    border-left: 1px solid #f1f1f186;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
}
img {
    height: 300px;
    width: 300px;
}
h1 {
    text-align: center;
    color: #F1F1F1;
    margin: 0;
}
.buttons {
    display: flex;
    justify-content: center;
}

.buttons :global(a) {
    text-decoration: none;
}

.btn {
    margin: 20px;
}
h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #F1F1F1;
    text-decoration: none;
}
h3 inline{
    text-decoration: none;
    color: #F1F1F1;
    border-bottom: 1px solid white;
}
</style>