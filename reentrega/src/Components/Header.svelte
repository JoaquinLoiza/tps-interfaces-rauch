<script>
    import InputSearch from './InputSearch.svelte';
    import BarNav from './BarNav.svelte';

    function home(){
        window.location.href = "http://localhost:8080/home";
    }
</script>

<main>
    <header>
        <div>
            <img src="images/Logo_nav.svg" alt="logo vetunity" on:click={home}>
            <InputSearch/>
            <BarNav/>
        </div>
    </header>
</main>

<style>
    header {
        background-color: #544179;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div {
        max-width: 1200px;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>