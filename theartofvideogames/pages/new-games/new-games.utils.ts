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

        const url: string = `https://api.igdb.com/v4/games`;

        // const config = {
        //     headers: {
        //         Client-ID: process.env.NEXT_PUBLIC_CLIENT_ID,
        //         Authorization: process.env.NEXT_PUBLIC_SECRET_KEY
        //     }
        //   }
        // };
        const config = {};

        const response = axios.get(url, config).then(response => {
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