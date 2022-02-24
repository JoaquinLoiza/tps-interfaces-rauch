<script>
    export let text;
    export let width;
    export let size;
    export let color;
    export let h;

</script>

<div style="width:{width}px;font-size:{size}px;background-color:#{color}" onmouseover="this.style.backgroundColor='{h}';" onmouseout="this.style.backgroundColor='#{color}';">
    <span>{text}</span>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        padding: 5px 0 5px 0;
    }

</style>