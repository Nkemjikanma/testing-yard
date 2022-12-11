import { FC, useEffect, useState } from 'react';
import axios from 'axios'
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';


type Props = {
    optionType: string;
};

const Options: FC<Props> = ({ optionType }) => {
    const [items, setItems] = useState<string[]>([]);

    // optionType is 'scoops' or 'toppings
    useEffect(() => {

        //* I really don't need axios yet, but following course
        // const fetchData = async () => {
        //     const res = await fetch(`http://localhost:3030/${optionType}`);
        //     const data = await res.json();
        //     setItems(data.data);
        // };
        // fetchData().catch(console.error);
        
        axios
        .get(`http://localhost:3030/${optionType}`)
        .then((response) => setItems(response.data))
        .catch((error) => {
          // TODO: handle error response
        });
    }, [optionType]);


    const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

    const optionItems = items.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      ));
    return <div>{optionItems}</div>;
};

export default Options;

