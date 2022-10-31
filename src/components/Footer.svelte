<script lang="ts">

</script>

<style>
    /* Desktop */
    .container{
        position: relative;
        font-size: 0.5vw;
        width: 100%;
        background-color:#242424;
        height: 16vh;
        font-size: 80%;
        line-height: 2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .info{
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .autor{
        text-align: center;
    }
    p{
        font-size: 0.8vw;
        line-height: 1.4vw;
        color: aliceblue;
    }

    /* Mobile */
    @media only screen and (max-width: 600px) {
        .container{
            font-size: 0.5vw;
            width: 100%;
            background-color:#242424;
            /* padding-bottom: 4vh; */
            height: 52vh;
            font-size: 80%;
            line-height: 2vw;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .info{
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
        }
        .autor{
            padding-top: 2vh;
            text-align: center;
            align-items: center;
            width: 100%;
            font-size: 3rem;
            line-height: 1.4em;
        }
        p{
            font-size: 3.6rem;
            line-height: 1.4em;
            color: aliceblue;
            word-break:break-all;
        }
        .bold{
            color: rgb(158, 158, 158);
            font-weight: 900;
        }
    }
</style>

<div class="container">
    <div class="info">
        <div class="col1">
            <p class="bold">Localización</p><br>
            <p>C/ Son Julià, 200 - Nave 14<br>Polígono Son Noguera<br>07620 Llucmajor</p>
        </div>
        <div class="col2">
            <br><p class="bold">Contacto</p><br>
            <p>Teléfono 1: 607 288 872<br>Teléfono 2: 670 628 972<br>Email: impermeabilizaciones@dedalosl.com</p>
        </div>
        <div class="autor">
            <a href="/">Dedalo SL ©</a><br>
            <a href="https://github.com/yukics" target="_blank" rel="noopener noreferrer">Alejo Morell 2022 ©</a>
        </div>
    </div>
</div>