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
  import Comment from './Comment.svelte';
  import Dropdown from './Dropdown.svelte';
	export let name;
  export let text;
  export let countLikes = 12;

  let state = { liked: false, dislike:false, comments:false, dropdown:false};
  
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

  function showDropdown(){
    if(state.dropdown == false){
      state.dropdown = true;
    }
    else {
      state.dropdown = false;
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
            <div on:click={showDropdown}><ThreeDotsVertical/>
              {#if state.dropdown}
              <div class="dropdown">
                <Dropdown/>
              </div>
              {/if}
            </div>
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
              <HandThumbsUp on:click={giveLike}/>
            {:else}
              <HandThumbsUpFill on:click={giveLike}/>
            {/if}

            {#if !state.dislike}
              <HandThumbsDown on:click={giveDisLike}/>
            {:else}
              <HandThumbsDownFill on:click={giveDisLike}/>
            {/if}

            <ChatSquareText/>
            <Share/>
          </div>
      
          <div class="card-f2">
            <p class="comment" on:click={showComments}>3 Comentarios</p>
          </div>
        </div>
        {#if state.comments}
          <Comment name={'Milagros Perez'} time={'Hace 2 dias'} text={'Muy bueno!'} path={'../images/images-hombre-gatito.jpg'}/>
          <Comment name={'Juana Acosta'} time={'Hace 12 hora'} text={'Muy bueno!'} path={'../images/veterinaria.jpg'}/>
          <Comment name={'Juan Martin'} time={'Hace 4 hora'} text={'Genial'} path={'../images/images-hombre.jpg'}/>
        {/if}
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
    padding-top: 16px;
  }
  .name-time{
    margin-left: 3px;
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
    color: #414759;
    margin: 0;
  }
  div :global(svg){
    height: 18px;
    width: 18px;
    padding-right: 10px;
    cursor: pointer;
  }
  .time {
    color:#414759;
  }
  span {
    height: 20px;
    width: 20px;
  }
  .card-head, .card-body, .card-f {
    padding-left: 10px;
    padding-right: 10px;
  }
  .card-h2 :global(svg){
    margin: 0;
    padding: 0;
  }
  .dropdown {
  position: absolute;
  }
  p, h1, .time{
  font-size: 14px;
  }
  .comment {
    font-weight: 400;
  }
  .comment:hover {
    cursor: pointer;
  }
</style>