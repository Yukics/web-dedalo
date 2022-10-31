<script lang="ts">
    export let images;
    let previewImages;
    let galleryOn=false;
    if(images.lenght()>=4){
        previewImages = images.slice(0,3)
    }

</script>

<style>

</style>

