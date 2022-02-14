<script>
    import Search from "svelte-bootstrap-icons/lib/Search";
</script>

<main>
    <div class="search">
        <div class="container">
            <Search/>
        </div>
        <input type="text">
    </div>
</main>

<style>
    .search {
        background-color: white;
        width: 500px;
        border-radius: 50rem;
        display: flex;
        align-items: center;
    }

    input {
        outline: none;
        border: none;
        background-color: transparent;
        width: 100%;
        height: 26px;
        margin-right: 1rem;
        font-size: 1rem;
    }

    .container {
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
        margin-right: 1rem;
    }

    .container :global(svg) {
        width: 1.25rem;
        height: 1.25rem;
        line-height: 1em;
        color: #414759;
    }

</style>