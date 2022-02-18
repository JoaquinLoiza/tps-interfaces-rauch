<script>
    import ButtonApp from "./ButtonApp.svelte";
</script>

<div class="post">
    <div class="post-a">
        <p>Compartir publicación</p>
    </div>
    <div class="post-b">
        <textarea placeholder="¿Qué estás pensando?"></textarea>
    </div>
    <div class="post-c">
        <ButtonApp text={'Postear'} width={120} size={15}/>
    </div>
    
</div>

<style>
    .post {
		width: 300px;
		border-radius: 10px;
  		box-shadow: 5px 5px 16px -1px rgba(0,0,0,0.2);
  		background-color: rgb(235, 235, 235);
	}
	.post-a {
		display:flex;
		justify-content: space-between;
		align-items:center;
        text-align: center;
	}
    .post-c{
        display:flex;
        justify-content:center;
        text-align: center;
    }
    textarea {
        resize: none;
        outline: none;
        border: none;
        border-radius: 10px;
        width: 80%;
        margin: 5px;
    }
</style>