<script lang="ts">
    import {setPage} from '../lib/store.js'
    import { slide } from 'svelte/transition';
    // https://cweili.github.io/svelte-fa/
    import Fa from 'svelte-fa'
    import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

    let menu:boolean = false;

    function handleMenu(){
        menu = menu ? false : true;
    }

    function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		
		document.body.addEventListener('click', onClick);
		
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}
</script>

<style>
    .container{
        width: 100%;
        font: 1.2vw;
        background-color: aliceblue;
    }
    .desktop{
        width: 100%;
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
        width: 100%;
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
            align-items: center;
        }
        img{
            width: 12vh;
            padding-left: 4vw;
            padding-top: 2vw;
            padding-bottom: 1vw;
        }
        .burger{
            font-size: 4vh;
            color: black;
            padding-right: 4vh;
        }
        .desktop{
            display:none;
        }
        .mobile{
            display: contents;
        }
        .mobileMenu{
            opacity: 96%;
            position: absolute;
            width: 100%;
            height:auto;
            z-index: 100;
            background-color: rgb(255, 255, 255);
            overflow-y: hidden;
        }
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 10vw;
        }
        li{
            width: 100%;
            text-align:center;
            align-items: center;
            font-size: 6em ;
            line-height: 2em;
        }

    }
</style>


<div class="container" >
    <!-- desktop -->
    <div class="desktop">
        <nav>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:mousedown={() => setPage("inicio")}>
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
            <div class="burger" on:mousedown={()=>handleMenu()}>
                {#if menu === true}
                    <div><Fa icon={faX}/></div>
                {:else}
                    <div><Fa icon={faBars}/></div>
                {/if}
            </div>
        </nav>
        {#if menu === true}
            <div class="mobileMenu" on:mousedown={()=>handleMenu()} use:clickOutside={() => {
                console.log('clicked outside');
                menu = false;
            }} transition:slide>
                <div class="links">
                    <ul>
                        <li on:mousedown={() => setPage("inicio")}>Inicio</li>
                        <li on:mousedown={() => setPage("product")}>Productos</li>
                        <li on:mousedown={() => setPage("contact")}>Contacto</li>
                    </ul>
                </div>
            </div>
        {/if}
    </div>
</div>
