<script lang="ts">
    import { Modal, Button } from "flowbite-svelte";

    let { isModalOpen = false } = $props();
    let opened = $state(isModalOpen);
    $effect(() => {
        opened = isModalOpen;
    })

    const doSomething = () => {
        debugger;
//        console.log('Doing something...');
        const timer = setInterval(() => {
            debugger;
            opened = false;
            clearInterval(timer);
        }, 1000)
    }
</script>

<Modal title="My Modal" bind:open={opened} size="md" permanent><!-- dismissable=false  -->
    <p class="mb-4 text-gray-500 dark:text-gray-400">
        This is a modal example using Flowbite-Svelte.
    </p>
    {#snippet footer()}
        <div class="flex justify-end">
            <Button color="gray" onclick={doSomething}>Do Something</Button>
        </div>
    {/snippet}
</Modal>