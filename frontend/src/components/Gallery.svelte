<script lang="ts">
    import Fa from 'svelte-fa'
    import { faX } from '@fortawesome/free-solid-svg-icons'
    import Lazy from 'svelte-lazy';

    export let images;
    let galleryOn: Boolean = false;
    let currentImage: String;
</script>

<style>
    .first-image{
        width: 100%;
        height: 20vh;
        object-fit: cover;
        border-radius: 5px;
    }
    .miniaturas{
        gap: 1%;
        width: 100%;
        height: 16%;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;     
        overflow-y: hidden;

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
        width: 3vw;
        height: 3vw;
        min-width: 3vw;
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
        /* position: relative; */
        padding-top: 8vh;
        /* margin: auto; */
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .imgBig{
        opacity: 1;
        margin: auto;
        max-width: 80vw;
        max-height: 70vh;
    }
    .imageSelection{
        margin: auto;
        margin-left: 5%;
        position: absolute;
        bottom: 4vh;
        width: 90%;
        /* padding-bottom: 4vh; */
        display: flex;
        flex-direction: row;
        gap: 1vw;
        overflow-x: scroll;
    }
    /* .imageSelection > img{
        width: auto;
        max-height: 8vh;
    } */
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
        .mini {
            width: 10vw;
            height: 10vw;
            min-width: 10vw;
        }
    }
</style>

{#if galleryOn}
    <!-- TODO poner botón < y > -->
    <div class="gallery" >
        <div class="closeButton" on:mousedown={() => galleryOn=false}><Fa icon={faX}/></div>
        <div class="selectedImage">
            <img src={`${currentImage}`} alt="currently selected" class="imgBig">
        </div>
        <div class="imageSelection">
            {#each images as image}
                <Lazy>
                    <img src="{image}" alt="miniaturas" class="mini" on:mousedown={() => currentImage=image}/>
                </Lazy>
            {/each}
        </div>
    </div>
{/if}

<div>
    <img src={`${images[0]}`} alt="main product" class="first-image"/>
</div>
<div class="miniaturas">
    {#each images as image}
        <Lazy>
            <img src="{image}"
                alt="main product" 
                class="mini" 
                on:mousedown={() => galleryOn=true} 
                on:mousedown={() => currentImage=image}
                />
        </Lazy>
    {/each}
</div>