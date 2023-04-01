import yaml from "js-yaml";
import fs from "fs";

try {
    const completed_json = {};
    const yaml_files = getYamlFiles();

    for (const yaml_file of yaml_files) {
        completed_json[`${yaml_file.slice(0,2)}`] = readFile(`./public/content/${yaml_file}`);
    }
    for (const key in completed_json) {
        for(let i=0; i < completed_json[key]["catalogo"].length; i++){
            for(let y=0; y < completed_json[key]["catalogo"][i]["productos"].length; y++){
                completed_json[key]["catalogo"][i]["productos"][y]["img"] = getImagesFrom(`./public/content${completed_json[key]["catalogo"][i]["productos"][y]["imgPath"]}`)
            }
        }
    }
    fs.writeFileSync('./public/content.json', JSON.stringify(completed_json), 'utf8');
} catch (err) {
    console.error(err);
}

function getYamlFiles() {
    const files = fs.readdirSync('./public/content/');
    let content_files = [];
    const regExp = RegExp('^.*-content\.yml$');
    for (const file of files) {
        if (regExp.test(file)) { 
            content_files.push(file);
        }
    }
    return content_files
}

function getImagesFrom(path){
    let image_names = fs.readdirSync(path);
    for(let i=0; i < image_names.length; i++){
        // Removes "./public" from path
        image_names[i] = `${path.substring(8)}${image_names[i]}`
    }
    return image_names
}

function readFile(path){
    const data = yaml.load(fs.readFileSync(path, 'utf8'));
    return data
}