import { getData, getGames } from './new-games.utils';
import { useEffect, useState } from 'react';

const NewGames = () => {

    const [request, setRequest] = useState({});

    const initRequest = async (): Promise<void> => {

        try {
            // const response = await getData();
            const secondResponse = await getGames();
            console.log(secondResponse);
            // setRequest(response);
        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        initRequest();
    }, []);

    return (
        <>
            <h1>{JSON.stringify(request)}</h1>
        </>
    );
};

export default NewGames;