<script>
    import {
        HouseDoor,
        Envelope,
        Bell,
        CaretDown
    } from "svelte-bootstrap-icons";
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
        <a href="#">
            <CaretDown/>
        </a>
    </div>
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

</style>