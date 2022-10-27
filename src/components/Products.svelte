<script lang="ts">
    import { onMount } from 'svelte';
    import getElements from "../lib/product";
    let elements;
    onMount(async () => {
		elements = await getElements();
	});
</script>

<style>

</style>

{elements}