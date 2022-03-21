import React from 'react';
import Cosmetic from '../cosmetic_data/Cosmetic';
const products = [
    {
        name: 'alta',
        price: 200,
        id: 1
    },
    {
        name: 'nail-palish',
        price: 300,
        id: 2
    },
    {
        name: 'lipstick',
        price: 400,
        id: 3
    },
    {
        name: 'sonu',
        price: 500,
        id: 4
    }

]
const Cosmetices = () => {
    return (
        <div>
            {
                products.map(product => <Cosmetic name={product} key={product.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetices;