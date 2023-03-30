<script>
    export let item;
    export let lazy = false;

    let src = item;
    let observer = null;

    if (lazy) {
    src = "";
    observer = new IntersectionObserver(onIntersect, { rootMargin: "200px" });
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
        }
    };
    }
</script>

<style>

    .mini{
        width: 22%;
        height: 4vh;
        object-fit: cover;
    }

</style>

<img src={`${item}`} alt="miniaturas" class="mini" use:lazyLoad/>
    <!-- <img src={`${item}`} alt="miniaturas" class="mini" on:mousedown={() => galleryOn=true} on:mousedown={() => currentImage=item} /> -->