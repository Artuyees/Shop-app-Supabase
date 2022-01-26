import { writable } from 'svelte/store';

export let alertText = writable('');
export let hidden = writable(true);
