import { browser } from '$app/env';
import { writable } from 'svelte/store';

export let cartItems = writable(browser && (JSON.parse(localStorage.getItem('cartItems')) || ''));
cartItems.subscribe((val) => browser && localStorage.setItem('cartItems', JSON.stringify(val)));
