<script>
    export let title;
    export let urlImage;
    export let site;
</script>

<div class="container">
    <div class="left">
        <img src="{urlImage}" alt="">
    </div>
    <div class="rigth">
        <p class="title">{title}</p>
        <p class="site">{site}</p>
    </div>
</div>

<style>
    .container {
        min-height: 150px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        margin-bottom: 20px;
    }

    .left, .rigth {
        width: 50%;
    }

    .title {
        font-weight: bold;
    }

    .site {
        font-size: 15px;
    }
</style>