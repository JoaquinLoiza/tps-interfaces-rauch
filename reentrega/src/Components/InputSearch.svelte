<script>
    import Search from "svelte-bootstrap-icons/lib/Search";
</script>

<main>
    <div class="search">
        <Search height="20" width="20"/>
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
    }
</style>