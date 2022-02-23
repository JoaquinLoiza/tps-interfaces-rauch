<script>
    import Header from '../Components/Header.svelte';
    import ButtonOutline from '../Components/ButtonOutline.svelte';
</script>

<Header />
<main>
    <div class="btnsOutlines">
        <div>
            <ButtonOutline text={'Todo'} width={90} size={15}/>
        </div>
        <div>
            <ButtonOutline pressClass={'noPress'} text={'Personas'} width={90} size={15}/>
        </div>
        <div>
            <ButtonOutline pressClass={'noPress'} text={'Publicaciones'} width={100} size={15}/>
        </div>
        <div>
            <ButtonOutline pressClass={'noPress'} text={'Lugares'} width={90} size={15}/>
        </div>
        <div>
            <ButtonOutline pressClass={'noPress'} text={'Ocupación'} width={90} size={15}/>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
    }
    
    .btnsOutlines {
        margin-top: 20px;
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: center;
    }
</style>