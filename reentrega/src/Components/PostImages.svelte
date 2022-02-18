<script>
    import {
    ChatSquareText,
    HandThumbsUp,
    HandThumbsDown,
    HandThumbsUpFill,
    HandThumbsDownFill,
    Share,
    XLg,
    ThreeDotsVertical
  } from "svelte-bootstrap-icons";
  import Comment from './Comment.svelte';
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

  function showImg(){
    let d = document.querySelector('.popup');
    d.style.visibility = 'visible';
  }

  function xImages(){
    let d = document.querySelector('.popup');
    d.style.visibility = 'hidden';
  }
</script>

<main>
    <div class="post">
        <div class="popup">
          <div on:click={xImages}><XLg/></div>
        </div>
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
        <div class="card-img">
            <div class="img" on:click={showImg}></div>
            <div class="galery" on:click={showImg}>
              <div><p>5+</p></div>
            </div>
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
            <p class="comment" on:click={showComments}>2 Comentarios</p>
          </div>
        </div>
        {#if state.comments}
        <Comment name={'Milagros Perez'} time={'Hace 2 dias'} text={'Muy bueno!'} path={'../images/images-hombre-gatito.jpg'}/>
        <Comment name={'Juana Acosta'} time={'Hace 12 hora'} text={'Muy bueno!'} path={'../images/veterinaria.jpg'}/>
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
    .img {
    background-image: url('../images/veterinaria.jpg');
    background-position: center;
    background-size: contain;
    height: 100px;
    width:50%;
    margin: 2px;
    }
    .galery {
      background-image: url('../images/images-hombre-gatito.jpg');
      background-size: cover;
      height: 100px;
      width:50%;
      margin: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .galery div{
      background-color: #414759bb;
      height: 100px;
      width:100%;
      margin: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    }
    .galery p{
      font-size: 40px;
      font-weight: 900;
      color:#f0efef;
      /*text-shadow: 1px 1px 1px white;*/
    }
    .card-img {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    .name-time{
    margin-left: 3px;
    }
    p, h1, .time{
    font-size: 14px;
    }
    .comment {
      font-weight: 400;
    }
    .popup {
      position: fixed;
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      left: 0;
      top: 0;
      visibility: hidden;
      background-color: #41475944;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popup div {
      height: 500px;
      width: 500px;
      background-image: url('../images/images-hombre-gatito.jpg');
      background-size: cover;
      border: 1px solid #737c97;
      display: flex;
      justify-content: end;
    }
</style>