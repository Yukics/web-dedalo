<script lang="ts">
    import Fa from 'svelte-fa'
    import { faX } from '@fortawesome/free-solid-svg-icons'
    import Miniatura from './Miniatura.svelte';
    import {galleryOn, setGallery, currentImage, setImage, galleryImages} from '../lib/store.js';
    export let images;
    const hasAPI = "IntersectionObserver" in window;
</script>

<style>
    .first-image{
        width: 100%;
        height: 20vh;
        object-fit: cover;
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
        width: 1vw;
        height: 1vh;
    }

    .miniaturas{
        gap: 1%;
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;      
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(118, 175, 255, 0.587);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .mini{
        width: 22%;
        height:fit-content;
        object-fit: cover;
    }
    .gallery{
        margin:0;
        top:0;
        left:0;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0,0.9);
        overflow-y: hidden;
        display:flex;
        align-items: center;
        flex-direction: column;
    }
    .selectedImage{
        object-fit: contain;
        position: relative;
        padding-top: 8vh;
        margin: auto;
        justify-items: center;
        text-align: center;
    }
    .imgBig{
        opacity: 1;
        margin: auto;
        max-width: 80vw;
        max-height: 70vh;
    }
    .imageSelection{
        width: auto;
        max-width: 90%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        padding-top: 2vh;
        margin-bottom: 1vh;
        gap: 1vw;
        overflow-x: scroll;
    }
    .imageSelection > img{
        width: auto;
        max-height: 8vh;
    }
    .closeButton{
        position: absolute;
        top: 2%;
        left: 2%;
        color: aliceblue;
        font-size: 2em;
    }
    .closeButton:hover{
        cursor: pointer;
        color: aliceblue;
    }
    @media only screen and (max-width: 600px) {
        .closeButton{
            font-size: 6em;
            padding: 2vw;
        }
        /* .closeButton{}
        } */
    }
</style>

<div>
    <img src={`${images[0]}`} alt="main product" class="first-image" on:mousedown={() => setImage(images[0])} on:mousedown={() => setGallery(!$galleryOn, images)}/>
</div>

<!-- <div class="miniaturas" >
    {#each images as item, i}
        <Miniatura {item} array={images} lazy={hasAPI && i > 1} on:mousedown={() => setImage(item)} on:mousedown={() => setGallery(!$galleryOn, images)}/>
    {/each}
</div> -->

{#if $galleryOn}
    <div class="gallery" >
        <div class="closeButton" on:mousedown={() => setGallery(false, [])}><Fa icon={faX}/></div>
        <div class="selectedImage">
            <img src={`${$currentImage}`} alt="currently selected" class="imgBig">
        </div>
        <div class="imageSelection">
            {#each $galleryImages as image}
                <img src={`${image}`} alt="miniaturas" class="mini" on:mousedown={() => setImage(image)}/>
            {/each}
        </div>
    </div>
{/if}