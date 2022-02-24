<script>
    import {Link, link} from 'svelte-routing';
    import {
        HouseDoor,
        Envelope,
        Bell,
        CaretDown
    } from "svelte-bootstrap-icons";

    export let h, m;
    let dropdown = false;

    function show(){
        if(dropdown == false ){
            dropdown = true;
        }
        else {
            dropdown = false;
        }
    }

    function login(){
        window.location.href = "http://localhost:8080/";
    }
</script>

<main>
    <nav>
        {#if h == false}
            <Link to="/home"><HouseDoor/></Link>
        {:else}
            <div class="bord">
                <Link to="/home"><HouseDoor/></Link>
            </div>
        {/if}
        {#if m == false}
            <Link to="/chats"><Envelope/></Link>
        {:else}
            <div class="bord">
                <Link to="/chats"><Envelope/></Link>
            </div>
        {/if}
        <Bell/>
        <div on:click={show}>
            <CaretDown/>
            {#if dropdown}
            <ul class="dropdown">
                <li>Mi Perfil</li>
                <li>Configuracion</li>
                <li on:click={login}>Cerrar sesion</li>
            </ul>
             {/if}
        </div>
    </nav>
</main>

<style>
    main {
        width: 164px;
    }
    nav {
        margin-top: 3px;
        width: 130px;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    nav :global(svg) {
        width: 1.25rem;
        height: 1.25rem;
        color: #F1F1F1;
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
        margin: 0;
    }
    .dropdown {
        border: 1px solid rgb(136, 135, 135);
        border-radius: 10px;
        background-color: white;
    }
    .bord {
        border-bottom: 1px solid white;
    }
</style>