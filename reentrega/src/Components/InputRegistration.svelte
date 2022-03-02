<script>
    export let label, type, id, changePassword;

    function selectG(){
        let x = document.querySelector('.woman');
        x.style.backgroundColor = '#a2a2a2';
    }
</script>

<div>
    {#if type == 1}
    <label for="">{label}</label> <br>
    <div class="options">
        <div on:click={selectG} class="woman"><p>Mujer</p></div>
        <div><p>Hombre</p></div>
        <div><p>Otro</p></div>
    </div>
    {:else}
    <label for="">{label}</label> <br>
    <input id={id} class="input" type={type} on:keyup={changePassword}>
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
    .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
    .options div {
        background-color: #F1F1F1;
        border-radius: 10px;
        height: auto;
        width: 90px;
        padding: 0;
        text-align: center;
    }
    .options div:hover {
        background-color: #b6b6b6;
        cursor: pointer;
    }
    .options div p {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
</style>