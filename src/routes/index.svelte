<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { worker as browserWorker } from '../mocks/browser';

  export const load: Load = async () => {
    browserWorker?.start();
    return {
      status: 200,
    };
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={async () => console.log(await fetch('/user'))}>Click me</button>
