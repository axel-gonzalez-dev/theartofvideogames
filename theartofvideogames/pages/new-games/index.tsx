import { getData, getGames } from './new-games.utils';
import { useEffect, useState } from 'react';

const NewGames = () => {

    const [request, setRequest] = useState({});

    const initRequest = async (): Promise<void> => {

        try {
            const response = await getData();
            setRequest(response);
            const secondResponse = await getGames();
            console.log(secondResponse);
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
            <h1>{JSON.stringify(request)}</h1>
            <button onClick={() => initRequest()}>Abrir esta cosa</button>
        </>
    );
};

export default NewGames;