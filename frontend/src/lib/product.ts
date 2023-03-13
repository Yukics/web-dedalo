import axios from "axios";
import yaml from "js-yaml";

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
    return confFile
}

async function listDirectoryToArray(path:string): Promise<string[]>{

    const res = await axios.get(`/content${path}`);

    let arr: string[] = [];

    res.data.forEach(litem => {
        arr.push(`/content${path}${litem.name}`)
    });

    // console.log(arr.shift())
    return arr;
}

// function getImageFromPath(hostname: string): string{
//     return hostname.substring(hostname.lastIndexOf("/") + 1)
// }

// function extractFromHtmlTags(taggedHtml:string):string{
//     return taggedHtml.substring(
//         taggedHtml.indexOf(">") + 1, 
//         taggedHtml.lastIndexOf("<")
//     );
// }