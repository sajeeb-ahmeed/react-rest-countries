import React from 'react';

const Csme_data1 = (props) => {
    const { name, about, address, age, balance, company, email, picture, phone } = props.data
    return (
        <div className='bg-info p-4 m-5 rounded text-uppercase fw-bold'>

            <img src={picture} alt="" />
            <h2>name : {name}</h2>
            <small>about : {about}</small> <br />
            <small>address : {address}</small> <br />
            <small>age : {age}</small> <br />
            <code>balance : {balance}</code> <br />
            <small>company : {company}</small> <br />
            <small>email : {email}</small> <br />
            <small>phone : {phone}</small>

        </div>
    );
};

export default Csme_data1;