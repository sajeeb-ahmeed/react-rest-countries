import React, { useEffect, useState } from 'react';

const ExternalUsers = () => {
    const [users, setUSers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUSers(data))
    }, [])

    return (
        <div>
            <h2>Users  </h2>
            {
                users.map(user => <Getuser name={user.name} email={user.email} address={user.address.city} company={user?.company?.catchPhrase}></Getuser>)
            }
        </div>

    );
};

function Getuser(props) {
    return (
        <div>
            <h3>user name : {props.name} </h3>
            <p>Email: {props.email}</p>
            <p>City: {props.address}</p>
            <p>CatchPharse: {props.company}</p>
        </div>
    )
}

export default ExternalUsers;