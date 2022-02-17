<script>
    export let text;
    export let width;
    export let size;
</script>

<div style=width:{width}px;font-size:{size}px>
    <span>{text}</span>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #A4CC79;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 0 5px 0;
    }

</style>