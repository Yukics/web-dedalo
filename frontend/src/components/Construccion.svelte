<script lang="ts">
    import { loop_guard } from "svelte/internal";
    import {pageContent} from "../lib/product";
    import ProductCard from "./ProductCard.svelte";
    console.log($pageContent.construccion)
    // onMount(async () => {
    //   elements = await getElements();
    //   elements = elements;
    // });
</script>

<style>
  .main{
    width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding-left: 3%;
    padding-right: 3%;
  }
  .category{
    margin-top: 4vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
    width: 90%;
    background-color: var(--main-color);
    border-radius: 5px;
  }
  .products{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:stretch;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-inline: 2%;
    gap: 5%;
    
  }
  h1{
    padding-left: 2%;
    font-size: 2em;
    color: var(--alt-color);
  }
  p{
    padding-left: 2%;
    padding-top: 1vh;
    font-size: 1.2em;
    color: var(--alt-soft-color);
  }
  @media only screen and (max-width: 600px) {
    h1{
      font-size: 8em;
    }
    p{
      font-size: 4em;
    }
  }

</style>

<div class="main">
  {#await $pageContent}
    Waiting screen
  {:then}
  {#each $pageContent.construccion as build}
    <div class="category">
      <h1>{build.tipo}</h1>
      <p>{build.descripcion}</p>
      <div class="products">
        {#each build.productos as tipo, i}
          <ProductCard product={tipo} isTop={i}/>
        {/each}
      </div>
    </div>
    {/each}
  {/await}
</div>