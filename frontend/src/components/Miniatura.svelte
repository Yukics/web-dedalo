<script lang="ts">
    import {
        setGallery,
        setImage,
    } from "../lib/store.js";
    export let item;
    export let lazy = false;

    let src = item;
    let observer = null;

    if (lazy) {
        src = "";
        observer = new IntersectionObserver(onIntersect, {
            rootMargin: "200px",
        });
    }

    function onIntersect(entries) {
        if (!src && entries[0].isIntersecting) {
            src = item;
        }
    }

    function lazyLoad(node) {
        observer && observer.observe(node);
        return {
            destroy() {
                observer && observer.unobserve(node);
            },
        };
    }
</script>

<img
    use:lazyLoad
    src={`${item}`}
    alt="miniaturas"
    class="mini"
    on:mousedown={() => setImage(item)}
    on:mousedown={() => setGallery(true)}
/>

<style>
    .mini {
        width: 22%;
        height: 4vh;
        object-fit: cover;
    }
</style>
