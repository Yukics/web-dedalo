<script lang="ts">
    import { onMount } from 'svelte';
    import getElements from "../lib/product";
    let elements;
    onMount(async () => {
      elements = await getElements();
      console.log(elements)
    });
</script>

<style>

</style>

{JSON.stringify(elements)}