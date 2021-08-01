import axios from 'axios';

const url = "http://localhost:8000";

export const createPost = async(post) =>{
    try{
        return await axios.post(`${url}/create`,post);
    }
    catch(error){
        console.log("error while calling createPost api",error);
    }
}