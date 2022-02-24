<script>
    import ProfileImage from './ProfileImage.svelte';
    import ButtonApp from './ButtonApp.svelte';

    export let name, job, friends, path;

    let follow = false;

    function followAc(){
        if(follow == false){
            follow= true;
        }
        else {
            follow=false;
        }
    }
</script>
<main>
    <div class="card">
        <div class="card-left">
            <ProfileImage height={50} width={50} pathImage={path}/>
            <div class="info">
                    <p class="name">{name}</p>
                    <p class="job">{job}</p>
                    <p class="friends">{friends}</p>
            </div>
        </div>
        {#if !follow}
        <div class="card-right" on:click={followAc}>
           <ButtonApp text={'Seguir'} width={60} size={12} color={'A4CC79'} h={'rgb(166 229 99)'}/>
        </div>
        {:else}
        <div class="card-right" on:click={followAc}>
            <ButtonApp text={'Siguiendo'} width={60} size={12} color={'F1F1F1'} h={'rgb(166 229 99)'}/>
         </div>
        {/if}
    </div>
</main>
<style>
    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(206, 206, 206);
        padding-bottom: 4px;
        padding-top: 4px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .card-left{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        margin:2px;
        font-size: 12px;
    }
    .name{
        font-size: 14px;
        font-weight: 600;
        color: #212529;
    }
    .job, .friends {
        font-size: 12px;
        color: hsl(210, 11%, 15%);
    }
    .friends {
        font-weight: 600;
    }
    .info {
        padding-left: 5px;
    }

</style>