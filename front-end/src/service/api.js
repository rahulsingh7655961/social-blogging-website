import axios from 'axios';

const url = "http://localhost:8000";

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    }
    catch (error) {
        console.log("error while calling createPost api", error);
    }
}
export const getAllPosts = async(param)=> {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        return response.data;
    }
    catch (error) {
        console.log("error while calling getAllPosts api", error);
    }
}

export const getPost = async(id)=>{
    try{
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    }catch(error){
        console.log("Error while calling getPost Api",error);
    }
}

export const updatePost = async(id,post)=>{
    try{
        await axios.post(`${url}/update/${id}`,post);
    }catch(error){
        console.log("Error while calling updatePost Api",error);
    }
}

export const deletePost = async(id)=>{
    try {
        await axios.delete(`${url}/delete/${id}`)
    } catch (error) {
        console.log('Error while calling deletePost',error);
    }
}