import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const pokemonId = useSignal<number>(1); //for use with primitives, booleans, strings, numbers

  return (
    <>
      <span class="text-2xl">Search</span>
      <span class="text-9xl">{pokemonId}</span>

      <div class="mt-2">
        <button class="btn btn-primary mr-2">Previous</button>
        <button class="btn btn-primary">Next</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',

  meta: [
    {
      name: 'description',
      content: 'This is my first app with Qwik',
    },
  ],
};
