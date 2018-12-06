<template>
	<div>
		<h1>My Vue Web Component</h1>
		<div>{{ msg }}</div>
	</div>
</template>

<script>
  export default {
    name: 'VueWebComponent',
		props: ['msg']
	}
</script>

<style scoped>

</style>
