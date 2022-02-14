<script>
    import {
    Alarm,
    Bank,
    CloudMoon,
    Github,
    PaintBucket,
    Wrench,
    Heart,
    Share,
    HeartFill
  } from "svelte-bootstrap-icons";

	export let name;
  export let text;
  export let urlImg;

</script>

<main>
    <div class="post">
        <div class="card-head">
          <div class="card-h1">
            <div class="photo-post"></div>
            <div>
              <h1>{name}</h1>
            </div>
          </div>
          <div class="card-h2">
            <div>3 min</div>
            <div>:</div>
          </div>
        </div>
        <div class="card-body">
          <p>
            {text}
          </p>
        </div>
        <div class="card-head">
          <div class="card-h1">
            <div><Heart/></div>
            <div><Share/></div>
            <div><HeartFill/></div>
          </div>
      
          <div class="card-h2">
            <div>10 Me gusta</div>
            <div>2 Comentarios</div>
          </div>
        </div>
      </div>
</main>

<style>
    .post {
    width: 100%;
    height: auto;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
  }
  .card-head {
    display: flex;
    justify-content: space-between;
  }
  .card-h1 {
    display: flex;
    justify-content: start;
  }
  .card-h2 {
    display: flex;
    justify-content: end;
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
    font-size: 16px;
    font-weight: 600;
    color: #414759;
  }
</style>