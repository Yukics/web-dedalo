<script lang="ts">
    import {pageContent} from "../lib/product";
</script>

<style>
    .container{
        position: relative;
        background-color: #0099ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center; 
        justify-content: center;
        padding-bottom: 6vh;
        height: 50%;
    }
    .content{
        width: 50%;
    }
    p{
        text-align:justify;
        font-size: 80%;
        line-height: 2vw;
    }

    /* Mobile */
    @media only screen and (max-width: 600px) {
        .container{
            position: relative;
            background-color: #0099ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center; 
            justify-content: center;
            padding-bottom: 6vh;
            height: 50%;
        }
        .content{
            width: 80%;
        }
        h2{
            font-size: 6rem;
        }
        p{
            /* text-align:justify; */
            font-size: 4rem;
            line-height: 1.4em;
            text-align:left;
        }
    }
</style>

<div class="container">
    <div class="content">
        {@html $pageContent.presentacion}
    </div>
</div>