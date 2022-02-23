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
            <ButtonOutline text={'Personas'} width={90} size={15}/>
        </div>
        <div>
            <ButtonOutline text={'Publicaciones'} width={100} size={15}/>
        </div>
        <div>
            <ButtonOutline text={'Lugares'} width={90} size={15}/>
        </div>
        <div>
            <ButtonOutline text={'Ocupación'} width={90} size={15}/>
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