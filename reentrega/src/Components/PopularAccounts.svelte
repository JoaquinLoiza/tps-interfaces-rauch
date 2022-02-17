<script>
    import AccountPopular from './AccountPopular.svelte';
</script>
<div>
    <h2>Sugerencias para ti</h2>
    <div class="divAccounts">
        <AccountPopular name={'Romina Dehesa'} job={'Estudiante'} friends={'10K amigos'} path={'../images/veterinaria.jpg'}/>
        <AccountPopular name={'Juan Carlos Monte'} job={'Veterinario'} friends={'15K amigos'} path={'../images/images-hombre-gatito.jpg'}/>
        <AccountPopular name={'Martin Conrrado'} job={'Medico'} friends={'20K amigos'} path={'../images/images-hombre.jpg'}/>
        <AccountPopular name={'Joaquin Loiza'} job={'Veterinario'} friends={'40K amigos'} path={'../images/retrato-del-hombre-y-perro-veterinarios.jpg'}/>
        
    </div>
</div>

<style>
    .divAccounts {
        width: auto;
        height: auto;
        border-radius: 10px;
        background-color: white;
        box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        padding-top: 5px;
    }
    h2 {
        font-size: 16px;
        color: #414759;
        margin: 0;
        margin-bottom: 8px;
        font-weight: 600;
    }
</style>