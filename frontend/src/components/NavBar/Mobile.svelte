<script lang="ts">
    import {setPage} from '../../lib/store.js';
    import { slide, fly } from 'svelte/transition';
    // https://cweili.github.io/svelte-fa/
    import Fa from 'svelte-fa';
    import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    // let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${vh}px`);

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

<div class="container" >
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
        }} in:fly="{{ duration: 500 }}" out:fly="{{ y: 200, duration: 500 }}">
            <div class="links">
                <ul>
                    <li on:mousedown={() => setPage("inicio")}><p>Inicio</p></li>
                    <li on:mousedown={() => setPage("product")}><p>Piscinas</p></li>
                    <li on:mousedown={() => setPage("construccion")}><p>Construcción</p></li>
                    <li on:mousedown={() => setPage("contact")}><p>Contacto</p></li>
                </ul>
            </div>
        </div>
    {/if}
</div>


<style>    
    .container{
        z-index: 200;
        height: 10vh;
        background-color: var(--main-color);
    }
    nav{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }
    img{
        padding-left: 5vw;
        width: 10vh;
    }

    .mobileMenu{
        position: absolute;
        margin-top: 10vh;
        top: 0;
        width: 100%;
        height: auto;
        z-index: 100;
        background-color: var(--main-color);
        overflow-y: hidden;
    }
    .burger{
        color: var(--alt-color);
        font-size: 6em;
        padding-right: 5vw;
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
        color: var(--alt-color);
    }
</style>