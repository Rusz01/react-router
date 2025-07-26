import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

    const { userid } = useParams();

    return (

        <div className="flex justify-center content-center h-[50vh] mt-20 ">User: {userid} </div>
    )


}

export default User;