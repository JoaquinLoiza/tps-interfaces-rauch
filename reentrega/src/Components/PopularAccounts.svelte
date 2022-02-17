<script>
    import AccountPopular from './AccountPopular.svelte';
</script>
<div>
    <h2>Sugerencias para ti</h2>
    <div class="divAccounts">
        <AccountPopular/>
        <AccountPopular/>
        <AccountPopular/>
        <AccountPopular/>
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