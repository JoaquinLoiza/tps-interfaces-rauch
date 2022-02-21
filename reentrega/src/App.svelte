<script>
	import {Router, Route} from 'svelte-routing';
	import Homepage from './Views/Homepage.svelte';
	import Login from './Views/Login.svelte';
	import Registration from './Views/Registration.svelte';
	import AdvancedSearch from './Views/AdvancedSearch.svelte';
	import Messages from './Views/Messages.svelte';
</script>

<main>
	<Router>
		<Route path="/" component={Login} />
		<Route path="/registration" component={Registration} />
		<Route path="/home" component={Homepage} />
		<Route path="/search" component={AdvancedSearch} />
		<!--Route path="/chat" component={} /-->
		<Route path="/chats" component={Messages} />
	</Router>
</main>

<style>

</style>