<script>
    import {
    ChatSquareText,
    HandThumbsUp,
    HandThumbsDown,
    HandThumbsUpFill,
    HandThumbsDownFill,
    Share,
    ThreeDotsVertical
  } from "svelte-bootstrap-icons";

	export let name;
  export let text;
  export let countLikes = 12;

  let state = { liked: false, dislike:false, comments:false};
  
  function giveLike(){
    if(state.liked == false) {
      state.liked = true;
      countLikes++;
    }
    else {
      countLikes--;
      state.liked = false;
    }
  }

  function giveDisLike(){
    if(state.dislike == false){
      state.dislike = true;
    }
    else {
      state.dislike = false;
    }
  }

  function showComments(){
    if(state.comments == false){
      state.comments = true;
    }
    else {
      state.comments = false;
    }
  }

</script>

<main>
    <div class="post">
        <div class="card-head">
          <div class="card-h1">
            <div class="photo-post"></div>
            <div class="name-time">
              <div><h1>{name}</h1></div>
              <div class="time">14 de Febrero del 2022 a las 15:30hs.</div>
            </div>
          </div>
          <div class="card-h2">
            <div><ThreeDotsVertical/></div>
          </div>
        </div>
        <!--Cuerpo del post-->
        <div class="card-body">
          <p>
            {text}
          </p>
        </div>
        <!--Footer del post-->
        <div class="card-f">
          <div class="card-f1">
            <div>
              <span>{countLikes}</span>
            </div>
            {#if !state.liked}
            <div on:click={giveLike}>
              <HandThumbsUp/>
            </div>
            {:else}
            <div on:click={giveLike}><HandThumbsUpFill/></div>
            {/if}

            {#if !state.dislike}
            <div on:click={giveDisLike}><HandThumbsDown/></div>
            {:else}
            <div on:click={giveDisLike}><HandThumbsDownFill/></div>
            {/if}

            <div><ChatSquareText/></div>
            <div><Share/></div>
          </div>
      
          <div class="card-f2">
            <p on:click={showComments}>3 Comentarios</p>
          </div>
        </div>
      </div>
</main>

<style>
    .post {
    width: auto;
    height: auto;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .name-time {
    margin-left: 5px;
  }
  .card-head, .card-f {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-h1, .card-f1 {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .card-h2, .card-f2 {
    display: flex;
    justify-content: end;
  }
  .card-h2 div{
    font-size: 12px;
    color: #AAAAAA;
  }
  .photo-post {
    height: 35px;
    width: 35px;
    background-color: white;
    border: 1px solid;
    border-color: #414759;
    border-radius: 50%;
    background-image: url('https://papelmatic.com/wp-content/uploads/2019/09/papelmatic-higiene-profesional-limpieza-desinfeccion-clinicas-veterinarias-1200x900.jpg');
  }
  h1 {
    font-size: 17px;
    font-weight: 600;
    color: #414759;
    margin-bottom: 0;
  }
  p {
    font-size: 15px;
    font-weight: 600;
  }
  div :global(svg){
    height: 18px;
    width: 18px;
    padding-right: 10px;
  }
  .time {
    color:#414759;
    font-size: 12px;

  }
  span {
    height: 20px;
    width: 20px;
  }
  .card-head, .card-body, .card-f {
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-f2 p {
    font-size: 12px;
  }
</style>