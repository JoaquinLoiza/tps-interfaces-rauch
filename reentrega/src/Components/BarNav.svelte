<script>
    import {
        HouseDoor,
        Envelope,
        Bell,
        CaretDown
    } from "svelte-bootstrap-icons";
</script>
<main>
    <a href="#">
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
</main>
<style>
    main {
        width: 120px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a :global(svg) {
        width: 1.25rem;
        height: 1.25rem;
        color: #F1F1F1;
    }
    
</style>