<script>
    export let pathImage;
    export let height;
    export let width;
</script>

<div style="height:{height}px; width:{width}px; background-image: url({pathImage})"></div>

<style>
    div{
        background-size: 100%;
        border-radius: 50%;
        border: 1px solid;
        border-color: #414759;
    }
</style>