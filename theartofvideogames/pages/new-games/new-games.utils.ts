import axios from 'axios';

export const getData = async (): Promise<Object> => {

    try {

        const url: string = `${process.env.NEXT_PUBLIC_TWITCH_API_URL}oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&grant_type=client_credentials`;

        const response = axios.post(url).then(response => {
            return response.data;
        }).catch(error => {
            throw error;
        })

        return response;

    } catch (error) {
        console.error(error);
        throw error;
    };
};

export const getGames = async () => {

    try{

        const url: string = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games';
        // const url: string = 'https://api.igdb.com/v4/games';

        const config = {
            headers: { 
                'Accept': 'application/json', 
                'Client-ID': `${process.env.NEXT_PUBLIC_CLIENT_ID}`, 
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`, 
                'Content-Type': 'application/json'
              }
        };

        const data = 'fields *;';

        const response = axios.post(url, data,config)
        .then(response => {
            return response.data; 
        }).catch(error => {
            throw error;
        })

        return response;

    }catch(error){
        console.error(error);
        throw error;
    }

};