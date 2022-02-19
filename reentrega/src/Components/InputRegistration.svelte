<script>
    export let label, type;
</script>

<div>
    <label for="">{label}</label> <br>
    <input type={type}>
</div>

<style>
    div {
        padding-top: 10px;
    }
    label {
        font-size: 16px;
        color: #F1F1F1;
    }
    input {
        font-size: inherit;
        line-height: inherit;
        width: 100%;
        height: 22px;
        border-radius: 10px;
        border: #414759;
    }
</style>