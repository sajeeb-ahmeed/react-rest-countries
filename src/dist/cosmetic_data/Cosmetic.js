import React from 'react';
import { addToDb } from '../../utilities/localdb/Localdb';

const Cosmetic = (props) => {
    console.log(props);
    const { name, price, id } = props?.name;
    const cart = (id) => {
        addToDb(id)
    }
    const addedBtn = () => cart(id);
    return (
        <div style={{ border: ' 2px solid red', margin: ' 20px', padding: '20px' }}>
            <h2>name: {name}</h2>
            <h2>price: {price}</h2>
            <h2>price: {id}</h2>
            <button onClick={() => cart(id)}>Purchece</button>
            <button onClick={addedBtn}>Add to cart</button>

        </div>
    );
};

export default Cosmetic;