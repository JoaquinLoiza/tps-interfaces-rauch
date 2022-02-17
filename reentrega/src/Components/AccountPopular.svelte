<script>
    import ProfileImage from './ProfileImage.svelte';
    import ButtonApp from './ButtonApp.svelte';
</script>
<main>
    <div class="card">
        <div class="card-left">
            <ProfileImage height={50} width={50} pathImage={'../images/img_profile.jpeg'}/>
            <div>
                    <p>Nombre</p>
                    <p>Porfesiom</p>
                    <p>Numero de seguidores</p>
            </div>
        </div>
        <div class="card-right">
           <ButtonApp text={'Seguir'} width={50} size={12}/>
        </div>
    </div>
</main>
<style>
    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(206, 206, 206);
        padding-bottom: 4px;
        padding-top: 4px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .card-left{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        margin:2px;
        font-size: 12px;
    }
</style>