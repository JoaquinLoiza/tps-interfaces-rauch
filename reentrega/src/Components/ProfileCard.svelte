<script>
    import ProfileImage from './ProfileImage.svelte';
    import ButtonApp from './ButtonApp.svelte';
</script>

<div class="container">
    <div class="image">
        <ProfileImage height={120} width={120} pathImage={'../images/img_profile.jpeg'}/>
    </div>
    <div class="name">
        <h1>José Perez</h1>
        <p>@joseperezok</p>
        <ButtonApp text={'Mi perfil'} width={90} size={15} color={'A4CC79'} h={'rgb(166 229 99)'}/>
    </div>
</div>

<style>
    .image, .name{
        width: 50%;
    }

    .container {
        height: 150px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
    }

    .image {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 20px;
        margin: 0;
    }

    p {
        margin-top: 2px;
        margin-bottom: 8px;
        font-size: 15px;
    }
</style>