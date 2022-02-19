<script>
	import {Router, Route} from 'svelte-routing';
	import Homepage from './Views/Homepage.svelte';
	import Login from './Views/Login.svelte';
	import Registration from './Views/Registration.svelte';
</script>

<main>
	<Router>
		<Route path="/" component={Login} />
		<Route path="/registration" component={Registration} />
		<Route path="/home" component={Homepage} />
		<!--Route path="/chat" component={} /-->
	</Router>
</main>

<style>

</style>