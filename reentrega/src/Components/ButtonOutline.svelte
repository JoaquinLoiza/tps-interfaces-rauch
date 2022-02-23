<script>
    export let text;
    export let width;
    export let size;
    
    function press(){
        let d = document.querySelector('.'+text);
    	d.classList.toggle("noPress");
	}
</script>

<div class="btnOutline noPress {text}" on:click={press} style= width:{width}px;font-size:{size}px; >
    <span>{text}</span>
</div>

<!--{#if press}
    <div class="btnOutline" on:click={press} style= width:{width}px;font-size:{size}px; >
        <span>{text}</span>
    </div>
{:else}
    <div class="btnOutline noPress" on:click={press} style= width:{width}px;font-size:{size}px; >
        <span>{text}</span>
    </div>
{/if}
-->

<style>
    .btnOutline {
        color: #F1F1F1;
        background-color: #544179;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #544179;
        border-radius: 20px;
        cursor: pointer;
        padding: 3px 0 3px 0;
        margin: 0 5px 0 5px;
    }
    
    .btnOutline:hover {
        background-color: #544179;
        border-color: #a4cc79 ;
        color: #F1F1F1;
    }
    
    .noPress {
        color: #544179;
        background-color: transparent;
    }
</style>



