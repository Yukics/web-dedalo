<script lang="ts">
    import Fa from 'svelte-fa'
    import { faX } from '@fortawesome/free-solid-svg-icons'
    export let images;
    let galleryOn=false;
    let currentImage;
</script>

<style>
    .first-image{
        width: 100%;
        height: 20vh;
        object-fit: cover;
        border-radius: 5px;
    }
    .miniaturas{
        gap: 4%;
        width: 100%;
        height: 16%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;      
    }
    ::-webkit-scrollbar {
        width: 1vw;
        height: 1vh;
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
        height: auto;
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
    }
    .selectedImage{
        object-fit: contain;
        position: relative;
        padding-top: 8vh;
        margin: auto;
    }
    .imgBig{
        opacity: 1;
        margin: auto;
        max-width: 80vw;
        max-height: 70vh;
    }
    .imageSelection{
        margin-left: 10vw;
        margin-right: 10vw;
        padding-top: 2vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        overflow-x: scroll;
    }
    .imageSelection > img{
        width: auto;
        max-height: 8vh;
    }
    .closeButton{
        margin-top: 2%;
        margin-left: 2%;
        color:aliceblue;
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

{#if galleryOn}
    <div class="gallery" >
        <div class="closeButton" on:mousedown={() => galleryOn=false}><Fa icon={faX}/></div>
        <div class="selectedImage">
            <img src={`/content/${currentImage}`} alt="currently selected" class="imgBig">
        </div>
        <div class="imageSelection">
            {#each images as image}
                <img src={`/content/${image}`} alt="miniaturas" class="mini" on:mousedown={() => currentImage=image}/>
            {/each}
        </div>
    </div>
{/if}

<div>
    <img src={`/content/${images[0]}`} alt="main product" class="first-image"/>
</div>
<div class="miniaturas">
    {#each images as image}
        <img src={`/content/${image}`} alt="miniaturas" class="mini" on:mousedown={() => galleryOn=true} on:mousedown={() => currentImage=image}/>
    {/each}
</div>