<script lang="ts">
  import { Input, Textarea, Button, P } from 'flowbite-svelte';
    // import { xl } from 'flowbite-svelte/types';
  import { form, field } from 'svelte-forms';
  import { required, email } from 'svelte-forms/validators';

  const mail = field('mail', '', [email(), required()]);
  const message = field('message', '', [required()]);
  const myForm = form(mail, message);

</script>

<style>
  .container{
    padding: 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 76vh;
  }
  .emailContact{
    padding-top: 2vw;
    padding-bottom: 1vw;
    border-radius: 1vw;
    background-color: aliceblue;
    height: 50vh;
    width: 34vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .formulario{
    height: 30vh;
    width: 28vw;
    flex-direction: column;
    display: flex;
    gap: 1vw;
  }

  h1{
    height: 1vh;
    font-size: 1.6em;
    color: slategray;
  }

  input, textarea{
    color: dimgray;
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #dfdfdf;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  .boton{
    padding: 0.4vw;
    font-size: 1rem;
  }

  @media only screen and (max-width: 600px) {
    .container{
      padding-top: 0vw;
      width: 92%;
      display: flex;
      align-items: center;
      justify-items: center;
    }

    h1{
      font-size: 6em;
    }
    .emailContact{
      width: 90%;
    }
    .formulario{
      padding-top: 2vh;
      width: 70vw;
      flex-direction: column;
      display: flex;
      gap: 1vw;
    }
    input, textarea{
      font-size: 4em;
    }
    .boton{
      font-size: 6vw;
      height: 6vh;
    }

  }
</style>

<div class="container">
  <div class="emailContact">
      <h1>Ponte en contacto</h1>
      <form class="formulario">
        <input
          type="text"
          placeholder="Mail"
          class="mail"
        />
        <textarea
          placeholder="Mensaje"
          class="mensaje"
        />
        <button class="boton">Enviar</button>
      </form>
      <!-- <Input type="text" id="mail" placeholder="Correo" required bind:value={$mail.value} class="mail text-white"/>
      <Textarea rows="3" size="2xl" type="text" id="message" placeholder="Mensaje" required bind:value={$message.value} class="message"/> -->
      <!-- <Button class="boton text-xl color:white" pill={true} style={"fontSize"}><P class="text-white" size="xl">Enviar</P></Button> -->
    <!-- <section> -->
      <!-- <Textfield 
        variant="outlined" 
        input$maxlength={50} 
        bind:value={$mail.value} 
        label="Email"
        style="width: 22vw; height: 200px; font-size: 4em"
        />
      <Textfield 
        textarea 
        input$maxlength={240} 
        bind:value={$message.value} 
        label="Mensaje"
        style="width: 22vw; height: 200px; font-size: 4em"
      >
        <CharacterCounter slot="internalCounter">0 / 240</CharacterCounter>
      </Textfield>
      <Button variant="raised" style="background-color: blue; width: 10vw; height: 90vh">
        <Label>Enviar</Label>
        <Icon class="material-icons">favorite</Icon>
      </Button> -->
    </div>
</div>