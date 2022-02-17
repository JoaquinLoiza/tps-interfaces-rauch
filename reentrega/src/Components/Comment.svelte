<script>
   import ProfileImage from './ProfileImage.svelte';
   export let path, name, time, text;
</script>

<div class="comment">
    <div class="comment-head">
        <ProfileImage height={30} width={30} pathImage={path}/>
       <div>
            <p>{name}<inline>{time}</inline></p>
            <p>{text}</p>
       </div>
    </div>
</div>

<style>
    .comment-head{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    p, inline {
        margin: 0;
        padding: 0;
        padding-left: 2px;
        font-size: 14px;
    }
    inline {
        padding-left: 3px;
        font-size: 12px;
    }
    .comment {
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        border-top: 1px solid #e7e7e7;
    }
</style>