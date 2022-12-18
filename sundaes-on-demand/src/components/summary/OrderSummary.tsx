import React from 'react';
import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';

type Props = {};

const OrderSummary = (props: Props) => {
    const { totals, optionCounts } = useOrderDetails();

    const scoopsArray = Object.entries(optionCounts.scoops); // [["Chocolate", 2], ["Vanilla", 1]]
    const scoopList = scoopsArray.map(([key, value]) => (
        <li key={key}>
            {value}
            {key}
        </li>
    ));

    const toppingsArray = Object.keys(optionCounts.toppings); // ["M&Ms", "Gummy Bears"]
    const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
            <ul>{scoopList}</ul>
            <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
            <ul>{toppingsList}</ul>
            <SummaryForm />
        </div>
    );
};

export default OrderSummary;
