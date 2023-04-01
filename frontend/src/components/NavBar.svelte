<script lang="ts">
    import {setPage} from '../lib/store.js'
    import { slide } from 'svelte/transition';
    // https://cweili.github.io/svelte-fa/
    import Fa from 'svelte-fa'
    import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

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
        display:block;
        height: 12vh;
        width: 100%;
        font: 1.2vw;
        background-color: var(--main-color);
    }
    .desktop{
        width: 100%;
    }
    nav{
        width: 100%;  
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items:stretch;
    }
    img{
        cursor: pointer;
        padding: 2vh;
        width: 6vw;
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
        color: var(--alt-color);
        padding-left: 1vw;
    }
    
    /* Mobile */
    .mobile {
        display: none;
    }
    @media only screen and (max-width: 600px) {
        .desktop{
            display:none;
        }
        .mobile{
            display: contents;
        }
        .container{
            z-index: 1;
            height: 10vh;
            background-color: var(--main-color);
        }
        nav{
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
        }
        img{
            width: 10vh;
            padding-bottom: 0vh; /* If not brokens the menu */

        }
        .burger{
            font-size: 4vh;
            color: var(--alt-color);
            padding-right: 4vh;
        }

        .mobileMenu{
            position: absolute;
            /* margin-top: -1vh; */
            width: 100%;
            height: auto;
            z-index: 100;
            background-color: var(--main-color);
            overflow-y: hidden;
        }
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1vw;
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
            <img src="/img/dedalo-rojo.svg" alt="log" on:mousedown={() => setPage("inicio")} class="icon">
            <div class="links">
                <ul>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("inicio")}><p>Inicio</p></li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("product")}><p>Productos</p></li>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={() => setPage("contact")}><p>Contacto</p></li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- mobile -->
    <div class="mobile">
        <nav>
            <div>
                <img src="/img/dedalo-rojo.svg" alt="logo">
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
                menu = false;
            }} transition:slide>
                <div class="links">
                    <ul>
                        <li on:mousedown={() => setPage("inicio")}><p>Inicio</p></li>
                        <li on:mousedown={() => setPage("product")}><p>Productos</p></li>
                        <li on:mousedown={() => setPage("contact")}><p>Contacto</p></li>
                    </ul>
                </div>
            </div>
        {/if}
    </div>
</div>
