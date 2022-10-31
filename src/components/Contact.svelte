<script lang="ts">
  // import Button, {Label, Icon} from '@smui/button';
  // import Textfield from '@smui/textfield';
  // import CharacterCounter from '@smui/textfield/character-counter';
  import { Input, Label, Helper } from 'flowbite-svelte';
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

  }
  .emailContact{
    padding-top: 2vw;
    padding-bottom: 1vw;
    border-radius: 1vw;
    position: inherit;
    background-color: aliceblue;
    height: 36vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  h1{
    font-size: 1.6em;
    color: slategray;
  }
</style>

<div class="container">
  <div class="emailContact">
      <h1>Ponte en contacto</h1>
      <form>
        <Input type="text" id="first_name" placeholder="Correo" required bind:value={$mail.value} />
      </form>
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