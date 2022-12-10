import { FC, useEffect, useState } from 'react';
import axios from 'axios'
import ScoopOption from './ScoopOption';

type Props = {
    optionType: string;
};

const Options: FC<Props> = ({ optionType }) => {
    const [items, setItems] = useState<>([]);

    // * optionType is
    useEffect(() => {
        // const fetchData = async () => {
        //     const res = await fetch(`http://localhost:3030/${optionType}`);
        //     const data = await res.json();
        //     setItems(data.data);
        // };
        // fetchData().catch(console.error);
        //* I really don't need axios yet, do i?
        axios
        .get(`http://localhost:3030/${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => {
          // TODO: handle error response
        });
    }, [optionType]);

    console.log(optionType);

    // TODO: replace 'null' with TopingOption once it is available
    const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

    const optionItems = items.map((item, index) => {
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />;
    });
    return <div>{optionItems}</div>;
};

export default Options;

//* I really don't need axios yet, do i?
// axios
//     .get(`http://localhost:3030/${optionType}`)
//     .then((response) => setItems(response.data)).catch((error)=>{// TODO: handle error response})
