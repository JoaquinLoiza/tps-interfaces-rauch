<script>
    import { 
        XLg,
        Camera,
        CameraReels,
        GeoAlt
    } from "svelte-bootstrap-icons/lib/";
    import ButtonApp from "./ButtonApp.svelte";
    export let toogleNewPost;
</script>

<div class="post">
    <div class="post-a">
        <p>Compartir publicación</p>
        <div class="close" on:click={toogleNewPost}>
            <XLg/>
        </div>
    </div>
    <div class="post-b">
        <textarea placeholder="¿Qué estás pensando?"></textarea>
    </div>
    <div class="post-c">
        <div class="containerIcons">
            <Camera/>
            <CameraReels/>
            <GeoAlt/>
        </div>
        <div on:click={toogleNewPost}>
            <ButtonApp text={'Postear'} width={120} size={15} color={'A4CC79'} h={'rgb(166 229 99)'}/>
        </div>
    </div>
</div>

<style>
    p {
        font-size: 16px;
        color: #414759;
        font-weight: 600;
    }

    .close {
        cursor: pointer;
    }

    .containerIcons {
        display: flex;
        align-items: center;
    }

    .containerIcons :global(svg) {
        margin: 0 8px 0 8px;
        width: 20px;
        height: 20px;
        color: #414759;
    }

    .post-a :global(svg) {
        margin-right: 2px;
        color: #414759;
    }

    .post {
		width: 500px;
		border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        padding: 10px;
        color: #414759;
	}
	.post-a {
        width: 500px;
		display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        border-bottom: 1px solid #c0c0c0;
        padding-bottom: 10px;
	}
    .post-b{
        height: 100%;
        border-bottom: 1px solid #c0c0c0;
    }

    textarea {
        font-family: Nunito,'Courier New', Courier, monospace;
        resize: none;
        outline: none;
        border: none;
        width: 100%;
        height: 200px;
    }
    .post-c{
        display:flex;
        justify-content:space-around;
        text-align: center;
        padding-top: 10px;
    }
</style>