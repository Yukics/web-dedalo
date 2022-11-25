import axios from 'axios';
import yaml from 'js-yaml';

export default async function getElements(){
    try {
        const res = await axios.get(`/content/content.yml`);
        const loadedFile = yaml.load(res.data);
        const confFile = await getImagesFromRoutes(loadedFile);
        console.log(confFile)
        return confFile
    } catch (err) {
        console.log(err);
        return false
    }
} 

async function getImagesFromRoutes(confFile){
    let arr = confFile;
    for (let i = 0; i < arr.length; i++) {
        for(let y= 0; y < arr[i].productos.length; y++){
            arr[i].productos[y].img = await listDirectoryToArray(arr[i].productos[y].imgPath)
        }
    }
    console.log(confFile)
    return confFile
}

async function listDirectoryToArray(path:string){
    const res = await axios.get(`/content${path}`);
    var el = document.createElement( 'html' );
    el.innerHTML = res.data
    const lis = el.querySelectorAll("ul li")

    let arr: string[] = [];
    lis.forEach(litem => {
        console.log(litem)
        arr.push(`/content${path}/${extractFromHtmlTags(litem.innerHTML)}`)
    });
    console.log(arr);
    return arr
}

function extractFromHtmlTags(taggedHtml:string):string{
    return taggedHtml.substring(
        taggedHtml.indexOf(">") + 1, 
        taggedHtml.lastIndexOf("<")
    );
}