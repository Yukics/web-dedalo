export default function getLanuage():string{
    const userLang:string = navigator.language || navigator.userLanguage; 
    return userLang
}