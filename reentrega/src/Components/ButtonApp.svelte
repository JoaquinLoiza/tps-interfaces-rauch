<script>
    export let text;
    export let width;
</script>

<div style=width:{width}px>
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
    }

</style>