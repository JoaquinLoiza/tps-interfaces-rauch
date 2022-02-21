<script>
export let send, text;
</script>

{#if !send}
<div class="e">
    <p>{text}</p>
</div>
{:else}
<div class="r">
    <p>{text}</p>
</div>
{/if}

<style>
    .e{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    p {
        font-size: 14px;
        width: auto;
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        width: auto;
    }
    .e p {
        text-align: end;
        background-color: #efefef;
    }
    .r{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .r p {
        text-align: start;
        background-color: #ffffff
    }
</style>