<script>
    import ProfileImage from "./ProfileImage.svelte";
    export let user, text, hs;
</script>

<div class="li-chat">
    <div class="chat-left">
        <div>
            <!--p class="circle-connect"></p-->
            <ProfileImage width={45} height={45} pathImage={'../images/veterinaria.jpg'}/>
        </div>
        <div>
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
    padding: 5px;
}
.chat-left {
    display: flex;
    align-items: center;
}
.hs, .user, .text {
    padding: 0;
    margin: 0;
}
.hs {
    font-size: 12px;
    margin: 5px;
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
/*.circle-connect {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgb(65, 202, 37);
    border: 1px solid black;
    border-radius: 50%;
    left: 10%;
}*/
</style>