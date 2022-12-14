import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItems } from '../../constants';
import { formatCurrency } from '../../utilities';
import { useOrderDetails } from '../../contexts/OrderDetails';

type Props = {
    optionType: string;
};

const Options: FC<Props> = ({ optionType }) => {
    const [items, setItems] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);
    const { totals } = useOrderDetails();

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
            .catch((error) => setError(true));
    }, [optionType]);

    if (error) {
        return <AlertBanner />;
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
    const title =
        optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));
    return (
        <>
            <h2>{title}</h2>

            <p>{formatCurrency(pricePerItems[optionType])} each</p>
            <p>
                {title} total: {formatCurrency(totals)}
            </p>
            {optionItems}
        </>
    );
};

export default Options;
