<script>
    import {
        Search
    } from "svelte-bootstrap-icons";
</script>

<div class="header">
    <img src="../images/Logo_nav.svg" alt="">
    <div>
        <Search/>
    </div>
</div>

<style>
    .header {
       padding: 10px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       background-color: #544179;
       width: auto;
       height: 40px;
       color: white;
       padding-right: 15px;
    }
    .header :global(svg){
        height: 20px;
        width: 20px;
        padding-left: 15px;
    }
    .header div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>