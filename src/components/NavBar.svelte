<script lang="ts">
    import {setPage} from '../lib/store.js'
    // https://cweili.github.io/svelte-fa/
    import Fa from 'svelte-fa'
    import { faBars } from '@fortawesome/free-solid-svg-icons'

    let menu:boolean = false;

    function handleMenu(){
        console.log(!menu)
        menu = menu ? false : true;
    }

</script>

<style>
    .container{
        font: 1.2vw;
        width: 100%;
        background-color: aliceblue;
    }
    nav{
        width: 100%;  
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
    img{
        /* padding: 1vw; */
        padding-top: 1vw;
        padding-left: 1vw;
        padding-bottom: 0.6vw;
        width: 6vw;
        height: fit-content;
    }
    .links {
        display: flex;
    }
    ul {
        list-style: none;
        margin-right: 2vw;
        align-self: center;
    }
    li {
        display: inline-block;
        cursor: pointer;
        min-width: fit-content;
        color: black;
        padding-left: 1vw;
    }
    
    /* Mobile */
    .mobile {
        display:none;
    }
    @media only screen and (max-width: 600px) {
        .container{
            background-color: aliceblue;
        }
        nav{
            display: flex;
            justify-content: space-between;
            align-content: center;
        }
        img{
            width: 12vh;
            padding-left: 2vw;
            padding-top: 2vw;
        }
        .burger{
            font-size: 5vh;
            color: black;
            padding-top: 2vh;
            padding-right: 4vh;
        }
        .desktop{
            display:none;
        }
        .mobile{
            display: contents;
        }

        .mobileMenu{
            position: absolute;
            width: 100%;
            height:100%;
            z-index: 100;
            background-color: black;
            overflow-y: hidden;
        }
    }
</style>


<div class="container">
    <!-- desktop -->
    <div class="desktop">
        <nav>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => setPage("inicio")}>
                <img src="/src/img/dedalo-rojo.svg" alt="log">
            </div>
            <div class="links">
                <ul>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("inicio")}>Inicio</li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("product")}>Productos</li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("contact")}>Contacto</li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- mobile -->
    <div class="mobile">
        <nav>
            <div>
                <img src="/src/img/dedalo-rojo.svg" alt="logo">
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="burger" on:click={()=>handleMenu()}>
                <div><Fa icon={faBars}/></div>
            </div>
        </nav>
    </div>
</div>
{#if menu === true}
    <div class="mobileMenu">
        <h1>fwefwefwe</h1>
    </div>
{/if}