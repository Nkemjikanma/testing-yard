import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { response } from 'msw';

type Props = {
    optionType: string;
};

const Options: FC<Props> = (optionType) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3030/${optionType}`);
            const data = await res.json();
            setItems(data.data);
        };
        fetchData().catch(console.error)

   
    }, [optionType]);
    return <div>Options</div>;
};

export default Options;

     //* I really don't need axios yet, do i?
        // axios
        //     .get(`http://localhost:3030/${optionType}`)
        //     .then((response) => setItems(response.data)).catch((error)=>{// TODO: handle error response})