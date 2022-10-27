import axios from 'axios';
import yaml from 'js-yaml';

export default async function getElements(){
    try {
        const res = await axios.get(`/content/content.yml`);
        return yaml.load(res.data);
    } catch (err) {
        console.log(err);
        return false
    }
}