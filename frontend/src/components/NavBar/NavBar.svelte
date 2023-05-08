<script lang="ts">
    import MediaQuery from "svelte-media-query";
    import Desktop from "./Desktop.svelte";
    import Mobile from "./Mobile.svelte";
</script>

<MediaQuery query="(min-width: 481px)" let:matches>
    {#if matches}
        <Desktop/>
    {/if}
</MediaQuery>

<!-- <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
    {#if matches}
    <div class="root tablet">
        tablet
    </div>
    {/if}
</MediaQuery> -->

<MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
        <Mobile/>    
    {/if}
</MediaQuery>