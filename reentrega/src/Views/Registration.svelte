<script>
    import InputRegistration from "../Components/InputRegistration.svelte";
    import ButtonApp from "../Components/ButtonApp.svelte";
    import {
        ArrowLeftCircle
  } from "svelte-bootstrap-icons";

 let state = { r: false, c:false};


  function nextReg(){
      if(state.r == false){
        state.r = true; 
      }else {
        state.r = false; 
      }
  }

  function prevReg(){
      if(state.r == false){
        state.r = true; 
      }else {
        state.r = false; 
      }
  }

  function reloadLogin(){
    window.location.href = "http://localhost:8080/";
  }

  function confirmation(){
    if(state.c == false){
        state.c = true; 
    }else {
        state.c = false;
    }
    setTimeout(() => {
        window.location.href = "http://localhost:8080/home";
    }, 3000);
  }

</script>

<main>
    <div class="registration">
        <div class="log">
            <img src="../images/Logo.svg" alt="">
        </div>
        {#if !state.r}
        <div class="form">
            <h1>Registro</h1>
            <InputRegistration label={'Nombre'} type={'text'}/>
            <InputRegistration label={'Apellido'} type={'text'}/>
            <InputRegistration label={'Fecha de Nacimiento'} type={'date'}/>
            <InputRegistration label={'Genero'} type={1}/>

            <div class="buttons">
                <div class="arrow" on:click={reloadLogin}>
                    <ArrowLeftCircle/>
                    <p>Volver</p>
                </div>
                <div on:click={nextReg}>
                    <ButtonApp text={'Siguiente'} width={70} size={14} color={'A4CC79'}/>
                </div>
            </div>
        </div>
        {:else}
        <div class="form">
            {#if !state.c}
            <h1>Ya casi...</h1>
            <InputRegistration label={'Email'} type={'text'}/>
            <InputRegistration label={'Contraseña'} type={'password'}/>
            <InputRegistration label={'Repetir contraseña'} type={'password'}/>
            <div class="buttons">
                <div class="arrow" on:click={prevReg}>
                    <ArrowLeftCircle/>
                    <p>Volver</p>
                </div>
                <div on:click={confirmation}>
                    <ButtonApp text={'Confirmar'} width={70} size={14} color={'A4CC79'}/>
                </div>
            </div>
            {:else}
            <div>
                <h1>Se ha creado tu cuenta exitosamente!</h1>
                <div class="reload">
                    <div class="c">

                    </div>
                </div>
            </div>
            {/if}
        </div>
        {/if}
    </div>
</main>

<style>
main {
    background-color: #544179;
    height: 100vh;
    width: 100vw;
}
.registration {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    padding-top: 10%;
}
.log, .form {
    height: auto;
    width: auto;
    height: 300px;
    width: 300px;
    padding: 30px;
}
.form {
    border-left: 1px solid #f1f1f186;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    justify-content: space-between;
    align-items: center;
}

.buttons .arrow {
    color: #F1F1F1;
    display: flex;
    align-items: center;
}
.reload {
    margin-top: 30px;
    width: 100%;
    height: 30px;
    border: 3px solid #F1F1F1;
    border-radius: 30px;
}
.reload .c {
    background-color: #F1F1F1;
    width: 100%;
    height: 30px;
    border-radius: 30px;
    animation: reload 3s linear;
}

@keyframes reload {
    0% {
        width: 25%;
    }
    25%{
        width: 50%;
    }
    50%{
        width: 75%;
    }
    100%{
        width: 100%;
    }
}
</style>