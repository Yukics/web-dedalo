import axios from "axios";
import { writable } from 'svelte/store';

// Stores
export const pageContent = writable(await getElements());

export function setpageContent(newContent) {
    pageContent.set(newContent);
}

// Functions
export default async function getElements(){
    try {
        const language = getLanguage();
        const res = await axios.get(`/content.json`).then(res => res.data);
        return res[language]
    } catch (err) {
        console.log(err);
        return false
    }
} 

function getLanguage():string{
    const userLang:string = navigator.language || navigator.userLanguage; 
    return userLang.slice(0,2)
}