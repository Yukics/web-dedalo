<script lang="ts">
    import Gallery from "./Gallery.svelte";
    import { fade } from 'svelte/transition';
    export let product;
</script>

<style>
    .card{
        background-color: rgba(0, 17, 39, 0.748);
        border-radius: 5px;
        width: 23%;
        padding: 2vh;
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }
    .first-image{
        padding-top: 2vh;
        width: 100%;
        height: 20vh;
        object-fit: cover;
        border-radius: 5px;
    }
    @media only screen and (max-width: 600px) {
        .card{
            width: 100%;
        }
        h2{
            font-size: 6em;
            color:aliceblue;
        }
        p{
            font-size: 4em;
            color: aliceblue;
        }
    }
</style>

<div class="card" in:fade>
    <h2>{product.name}</h2>
    <!-- <img src={`/content/${product.img[0]}`} alt="main product" class="first-image"/> -->
    <Gallery images={product.img}/>
    <p>{product.descripcion}</p>
</div>