<script>
    export let label, type;
</script>

<div>
    {#if type == 1}
    <label for="">{label}</label> <br>
    <select name="genero">
        <option>Mujer</option>
        <option>Hombre</option>
        <option>Otro</option>
    </select>
    {:else}
    <label for="">{label}</label> <br>
    <input class="input" type={type}>
    {/if}
</div>

<style>
    div {
        padding-top: 10px;
    }
    label {
        font-size: 16px;
        color: #F1F1F1;
    }
    .input {
        padding: 0;
        width: 100%;
        height: 22px;
        border-radius: 10px;
        border: #414759;
    }
    select {
        padding: 0;
        width: 100%;
        height: 22px;
        border-radius: 10px;
        border: #414759;
    }
</style>