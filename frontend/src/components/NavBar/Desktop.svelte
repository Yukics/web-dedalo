<script lang="ts">
    import {setPage} from '../../lib/store.js';   
</script>

<div class="container" >
    <nav>
        <img src="/img/dedalo-rojo.svg" alt="log" on:mousedown={() => setPage("inicio")} class="icon">
        <div class="links">
            <ul>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={() => setPage("inicio")}><p>Inicio</p></li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={() => setPage("product")}><p>Piscinas</p></li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={() => setPage("construccion")}><p>Construcción</p></li>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={() => setPage("contact")}><p>Contacto</p></li>
            </ul>
        </div>
    </nav>
</div>

<style>
    .container{
        display: block;
        height: 10vh;
        width: 100%;
        font: 1.2vw;
        background-color: var(--main-color);
    }
    nav{
        width: 100%;  
        height: 100%;
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
        flex-direction: row;
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
</style>