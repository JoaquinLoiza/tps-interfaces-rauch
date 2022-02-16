<script>
    import ProfileImage from './ProfileImage.svelte';
</script>

<div class="container">
    <div class="image">
        <ProfileImage height={120} width={120} pathImage={'../images/img_profile.jpeg'}/>
    </div>
    <div class="name">
        <h1>Jose Perez</h1>
        <button>Mi perfil</button>
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
        margin-top: 30px;
    }

    .image {
        display: flex;
        justify-content: center;
    }

    h1 {
        font-size: 20px;
        margin-top: 0;
    }
</style>