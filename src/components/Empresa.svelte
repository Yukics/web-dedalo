<script lang="ts">

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
        <h2>¿Quienes somos?</h2>
        <p>Somos una empresa mallorquina dedicada desde el año 2003 a la impermeabilización de todo tipo de superficies. Nuestro valor diferencial reside en nuestra experiencia en el mercado y en la calidad y diversidad de nuestros productos; esta variedad es la que nos permite ofrecer a cada cliente lo que necesita, con un trato amable y cercano ofreciendo así un mejor servicio.</p>
        <p>Estamos especializados en construcción de piscinas e impermeabilizaciones de cualquier tipo de superficie mediante láminas de PVC, láminas asfálticas, cauchos e hidrofugantes. Le ofrecemos soluciones a cualquier tipo de impermeabilizaciones: aljibes, piscinas, terrazas, cubiertas, muros y lagos.</p>
        <p>Trabajamos en cualquiera de las cuatro islas, ofreciendo así nuestros servicios a clientes con problemas de humedades en cualquier lugar de las Baleares.</p>
    </div>
</div>