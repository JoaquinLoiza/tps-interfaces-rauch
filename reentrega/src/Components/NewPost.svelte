<script>
    import XSquare from "svelte-bootstrap-icons/lib/XLg";
    import ButtonApp from "./ButtonApp.svelte";
</script>

<div class="post">
    <div class="post-a">
        <p>Compartir publicación</p>
        <XSquare/>
    </div>
    <div class="post-b">
        <textarea placeholder="¿Qué estás pensando?"></textarea>
    </div>
    <div class="post-c">
        <ButtonApp text={'Postear'} width={120} size={15}/>
    </div>
</div>

<style>
    p {
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
        margin: 2px 0 6px 0;
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