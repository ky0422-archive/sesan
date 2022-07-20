import { writable } from 'svelte/store';

export let currentLine = writable(1);
export let currentColumn = writable(0);
export let evaluating = writable(false);
export let results = writable({
    result: [],
    errors: [],
});
