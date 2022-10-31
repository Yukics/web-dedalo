<script lang="ts">
    import { onMount } from 'svelte';
    import getElements from "../lib/product";
    import ProductCard from "./ProductCard.svelte";

    let elements;
    onMount(async () => {
      elements = await getElements();
      elements = elements;
    });
</script>

<style>
  .main{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .category{
    margin-top: 4vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
    width: 90%;
    background-color: aliceblue;
    border-radius: 5px;
  }
  .products{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 4vh;
    gap: 2vw;
  }
  h1{
    font-size: 1.8em;
    color: rgb(64, 64, 64);
  }
  p{
    padding-top: 1vh;
    color: rgb(98, 98, 98);
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
  {#if elements}
    {#each elements as product}
    <div class="category">
      <h1>{product.tipo}</h1>
      <p>{product.descripcion}</p>
      <div class="products">
        {#each product.productos as tipo}
        <ProductCard product={tipo}/>
        {/each}
      </div>
    </div>
    {/each}
  {/if}
</div>