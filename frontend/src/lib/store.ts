import { writable } from 'svelte/store'

export const page = writable(localStorage.getItem("page") || "inicio");
export const galleryOn = writable(false);
export const galleryImages = writable([]);
export const currentImage = writable("");

export function setPage(newPage:string) {
    page.set(newPage); // refresh UI
}

export function setGallery(newGallery:boolean, newGalleryImages) {
    galleryImages.set(newGalleryImages);
    galleryOn.set(newGallery);
}

export function setImage(newImage:string) {
    currentImage.set(newImage);
}