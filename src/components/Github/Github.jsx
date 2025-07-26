import React, {useEffect} from 'react';
import { useState } from 'react';

function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Rusz01')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => console.error('Error fetching GitHub data:', error));
    }, []);

    return (
    <>
        <img className="w-45 rounded-full m-auto mt-20" src={data.avatar_url} alt="" />
        <div className="text-center m-4 p-4 text-2xl">Github Followers: {data.followers}</div>
    </>
    )

}

export default Github;