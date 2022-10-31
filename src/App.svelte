<script lang="ts">
  import {page} from './lib/store.js'

  import NavBar from "./components/NavBar.svelte"
  import Main from "./components/Main.svelte"
  import Empresa from "./components/Empresa.svelte"
  import Footer from "./components/Footer.svelte";
  import Products from "./components/Products.svelte"
  import Contact from './components/Contact.svelte';

  //? page store persistence
  page.subscribe(val => localStorage.setItem("page", val));
  let disabledScroll=true;
</script>

<style>
  body{
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
  {:else if $page === "contact"}
  <Contact/>
  {/if}
  <Footer/>
</main>
  



