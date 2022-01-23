import { writable } from 'svelte/store';
import { browser } from '$app/env';
export let searchTerm = writable(browser && (localStorage.getItem('searchTerm') || ''));
searchTerm.subscribe((val) => browser && localStorage.setItem('searchTerm', val));
