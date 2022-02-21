<script>
	import {Router, Route} from 'svelte-routing';
	import Homepage from './Views/Homepage.svelte';
	import Login from './Views/Login.svelte';
	import Registration from './Views/Registration.svelte';
	import AdvancedSearch from './Views/AdvancedSearch.svelte';
</script>

<main>
	<Router>
		<Route path="/" component={Login} />
		<Route path="/registration" component={Registration} />
		<Route path="/home" component={Homepage} />
		<Route path="/search" component={AdvancedSearch} />
		<!--Route path="/chat" component={} /-->
	</Router>
</main>

<style>

</style>