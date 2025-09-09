<script>
  import { Button } from "flowbite-svelte";
  import MyModal from "$lib/MyModal.svelte";

  let opened = $state(false);

  const openModal = () => {
    opened = !opened;
  }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="p-8">
  <Button onclick={openModal}>
    Show Modal
  </Button>

  <MyModal bind:isModalOpen={opened}></MyModal>
</div>
