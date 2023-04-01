<script lang="ts">
    import Gallery from "./Gallery.svelte";
    import { fade } from 'svelte/transition';
    export let product;
    export let isTop;
</script>

<style>
    h2{
        font-size: 1.4em;
        color:aliceblue;
    }
    p{
        font-size: 1em;
        color: aliceblue;
    }
    .card{
        background-color: rgba(0, 17, 39, 0.748);
        border-radius: 10px;
        width: 28%;
        padding: 1%;
        display: flex;
        /* margin-top: 5%; */
        flex-direction: column;
    }
    .not-top{
        margin-top: 2%;
    }
    @media only screen and (max-width: 600px) {
        .card{
            width: 100%;
        }
        h2{
            font-size: 6em;
        }
        p{
            font-size: 4em;
        }
    }
</style>


<div class="card" class:not-top="{isTop >= 3}" in:fade>
    <h2>{product.name}</h2>
    <Gallery images={product.img}/>
    <p>{product.descripcion}</p>
</div>