import axios from "axios"
const Access_Key = import.meta.env.VITE_UNSPLASH_KEY
export const fetchImges = async (page = 1) => {
    try {
        const res = await axios.get(`https://api.unsplash.com/photos`, 
            {headers: {Authorization: `Client-ID ${Access_Key}`,},
            params: {page: page,per_page: 12,},});
            console.log(res.data);
            
        return res.data
    } catch (error) {
        console.log("error", error);
    }
}


