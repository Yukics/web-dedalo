import { writable } from 'svelte/store'

export const page = writable(localStorage.getItem("page") ||"inicio");

export function setPage(newPage:string) {
    page.set(newPage); // refresh UI
}