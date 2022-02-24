<script>
    import ProfileImage from "./ProfileImage.svelte";
    export let name, user, pathImage, w, h;
</script>

<div class="liUser">
    <ProfileImage pathImage={pathImage} width={w} height={h}/>
    <div class="name">
        <h1>{name}</h1>
        <h2>{user}</h2>
    </div>
</div>

<style>
    .liUser {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 7px 5px 7px 5px;
    }
    .name {
        display: block;
        justify-content: flex-start;
        align-items: center;
    }
    .name h1, .name h2{
        margin: 0;
        padding: 0;
        padding-left: 5px;
    }
    h1 {
        color: rgb(51, 51, 51);
        font-size: 14px;
    }
    h2 {
        color: rgb(87, 87, 87);
        font-size: 12px;
    }
</style>