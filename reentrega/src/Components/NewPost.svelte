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
            <ButtonApp text={'Postear'} width={120} size={15}/>
        </div>
    </div>
</div>

<style>
    p {
        color: #414759;
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
		width: 590px;
		border-radius: 10px;
  		box-shadow: 5px 5px 16px -1px rgba(0,0,0,0.2);
  		background-color: rgb(235, 235, 235);
	}
	.post-a {
        width: 546px;
		display:flex;
		justify-content: space-between;
		align-items:center;
        text-align: center;
        margin: 8px 24px 0 24px;
	}

    .post-b {
        margin: 0 24px 0 24px;
    }

    .post-c{
        display:flex;
        justify-content:space-around;
        text-align: center;
        margin: 4px 0 8px 0;
    }
    textarea {
        min-height: 200px;
        font-size: 15px;
        font-family: Nunito,'Courier New', Courier, monospace;
        width: 100%;
        resize: none;
        outline: none;
        border: none;
        border-radius: 10px;
    }
</style>