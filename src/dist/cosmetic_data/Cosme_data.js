import React, { useEffect, useState } from 'react';
import Csme_data1 from '../Cosmetics/Csme_data1';

const Cosme_data = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div>
            <h1>Cosmetics data</h1>
            {
                datas.map(data => <Csme_data1 data={data} key={data._id}></Csme_data1>)
            }
        </div>
    );
};

export default Cosme_data;