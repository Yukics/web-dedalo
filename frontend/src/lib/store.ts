import { writable } from 'svelte/store'

export const page = writable(localStorage.getItem("page") ||"inicio");
export const gallery = writable(localStorage.getItem("gallery") || false);
export const image = writable(localStorage.getItem("image") ||"");

export function setPage(newPage:string) {
    page.set(newPage); // refresh UI
}
export function setGallery(newGallery:bool) {
    gallery.set(newGallery); // refresh UI
}
export function setImage(newImage:string) {
    image.set(newImage); // refresh UI
}