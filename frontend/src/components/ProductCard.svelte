<script lang="ts">
    import Gallery from "./Gallery.svelte";
    import { fade } from 'svelte/transition';
    export let product;
    export let isTop;
    console.log(product.img)
</script>

<style>
    h2{
        font-size: 1.4em;
        color:var(--main-color);
    }
    p{
        font-size: 1em;
        color: var(--main-color);
    }
    .card{
        background-color: var(--alt-color);
        border-radius: 10px;
        width: 28%;
        padding: 1%;
        display: flex;
        flex-direction: column;
    }
    .not-top-desktop{
        margin-top: 2%;
    }
    @media only screen and (max-width: 600px) {
        .card{
            width: 100%;
        }
        .not-top-mobile{
            margin-top: 10%;
        }
        h2{
            padding-left: 4vw;
            font-size: 6em;
        }
        p{
            padding-left: 4vw;
            font-size: 4em;
        }
    }
</style>


<div class="card" class:not-top-desktop={isTop >= 3} class:not-top-mobile={isTop >= 1} in:fade>
    <h2>{product.name}</h2>
    <Gallery images={product.img}/>
    <p>{product.descripcion}</p>
</div>