<script lang="ts">
  import {page} from './lib/store.js'

  import NavBar from "./components/NavBar/NavBar.svelte"
  import Main from "./components/Main.svelte"
  import Empresa from "./components/Empresa.svelte"
  import Footer from "./components/Footer/Footer.svelte";
  import Products from "./components/Products.svelte";
  import Construccion from "./components/Construccion.svelte";
  import Contact from './components/Contact/Contact.svelte';

  //? page store persistence
  page.subscribe(val => localStorage.setItem("page", val));
  let disabledScroll=true;

</script>

<style>
  main{
    overflow-y: auto;
  }
  .scroll-lock {
		overflow-y: hidden;
	}
</style>

<main class:scroll-lock={disabledScroll}>
  <NavBar/>

  {#if $page === "inicio"}
    <Main/>
    <Empresa/>

  {:else if $page === "product"}
    <Products/>

  {:else if $page === "construccion"}
    <Construccion/>
  
  {:else if $page === "contact"}
    <Contact/>
  {/if}
  <Footer/>
</main>
  



