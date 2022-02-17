<script>
    import {
        HouseDoor,
        Envelope,
        Bell,
        CaretDown
    } from "svelte-bootstrap-icons";

    let dropdown = false;

    function show(){
        if(dropdown == false ){
            dropdown = true;
        }
        else {
            dropdown = false;
        }
    }
</script>

<main>
    <div>
        <a href="#" class="home">
            <HouseDoor/>
        </a>
        <a href="#">
            <Envelope/>
        </a>
        <a href="#">
            <Bell/>
        </a>
        <a on:click={show} href="#">
            <CaretDown/>
        </a>
    </div>
    {#if dropdown}
      <ul class="dropdown">
        <li>Mi Perfil</li>
        <li>Configuracion</li>
        <li>Cerrar sesion</li>
      </ul>
    {/if}
</main>

<style>
    main {
        width: 164px;
    }
    
    div {
        margin-top: 3px;
        width: 130px;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }

    a :global(svg) {
        width: 1.25rem;
        height: 1.25rem;
        color: #F1F1F1;
    }

    /** Agrega borde al icono de home*/
    .home :global(svg) {
        padding-bottom: 4px;
        border-bottom: 2px solid;
        border-color: #F1F1F1;
    }
    li {
        font-size: 12px;
        color: black;
        list-style: none;
        padding: 5px;
    }
    ul {
        padding: 0;
        position: absolute;
        top:15px;
        right: 30px;
    }
    .dropdown {
        border: 1px solid rgb(136, 135, 135);
        border-radius: 10px;
        background-color: white;
    }
</style>