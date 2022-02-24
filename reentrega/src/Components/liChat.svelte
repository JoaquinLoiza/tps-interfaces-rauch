<script>
    import ProfileImage from "./ProfileImage.svelte";
    export let user, path, text, hs, showMsj;
</script>

<div class="li-chat" on:click={showMsj} id="x"> 
    <div class="chat-left">
        <p class="circle-connect"></p>
        <div class="profile">
            <ProfileImage width={45} height={45} pathImage={path}/>
        </div>
        <div class="name">
            <div class="user-chat">
                <p class="user">{user}</p>
            </div>
            <p class="text">{text}</p>
        </div>
    </div>
    <div>
        <p class="hs">{hs}</p>
    </div>
</div>

<style>
.li-chat {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5px 10px 5px 10px;
}
.chat-left {
    display: flex;
    align-items: center;
    padding: 2px;
}
.hs, .user, .text {
    padding: 0;
    margin: 0;
}
.hs {
    font-size: 12px;
}
.user {
    font-size: 14px;
    font-weight: 600;
}
.text{
    font-size: 14px;
    color: rgb(85, 85, 85)mportant;
}
.user, .text {
    padding-left: 3px;
}
.user-chat {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.circle-connect {
    position: relative;
    width: 10px;
    height: 10px;
    background-color: rgb(65, 202, 37);
    border: 1px solid black;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    left: 48px;
    bottom: -15px;
}
.name {
    margin-left: 5px;
}

@media (max-width: 376px) {
    .chat-left {
        margin: 0;
        padding: 0;
    }
    .li-chat {
        padding: 0;
        padding-top: 5px;
        padding-right: 10px;
    }
}
</style>