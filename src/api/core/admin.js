import axios from "axios"
import { env } from "./environment";

const base_url = `${env}/directory`

export const getAdminData = async (name) => {

    const response = await axios.get(`${base_url}/${name}`);
    
    if(response.status === 200) {
        return response.data;
    } else{
        return [];
    }

}

export const updateAdminData = async (id, data) => {

    const response = await axios.put(`${base_url}/update/${id}`, data);
    
    if(response.status === 200) {

        return response.data;

    } else{

        return [];

    }

}

export const uploadFile = async (data) => {

    const response = await axios.post(`${base_url}/upload`, data);
    
    if(response.status === 200) {

        return response.data;

    } else{

        return [];

    }

}

