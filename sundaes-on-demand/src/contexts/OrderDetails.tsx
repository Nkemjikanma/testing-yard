import React, { createContext, useContext, useState } from 'react';
import { pricePerItems } from '../constants';

const OrderDetails = createContext();

// Create custom hook to check to see if we are in a provider. Return context value if we are in a provider. I
export function useOrderDetails() {
    const contextValue = useContext(OrderDetails);

    if (!contextValue) {
        throw new Error(
            'useOrderDetails must be called from within an OrderDetailsProvider'
        );
    }

    return contextValue;
}

export function OrderDetailsProvider({ ...props }) {
    const [optionCounts, setOptionCounts] = useState({
        scoops: {}, // {Chocolate: 1, Vanilla: 2}
        toppings: {}, // {"Gummy bears": 1}
    });

    function updateItemCount(
        itemName: string,
        newItemCount: number,
        optionType: string
    ) {
        setOptionCounts((prevOptionCounts) => ({
            ...prevOptionCounts,
            [optionType]: {
                //@ts-ignore
                ...prevOptionCounts[optionType],
                [itemName]: newItemCount,
            },
        }));
    }

    const resetOrder = () => {
        setOptionCounts({
            scoops: {}, // {Chocolate: 1, Vanilla: 2}
            toppings: {}, // {"Gummy bears": 1}
        });
    };

    // utility function to derive totals from optionCounts state value
    const calculateTotal = (optionType: string) => {
        //get an array of counts for the option type, eg [1, 2]
        //@ts-ignore
        const countsArray = Object.values(optionCounts[optionType]);

        //total the values in the array of counts for the number of items
        const totalCount = countsArray.reduce(
            //@ts-ignore
            (total, value) => total + value,
            0
        );

        //multiply the total number ofitems by the price for this item type
        //@ts-ignore
        return totalCount * pricePerItems[optionType];
    };

    const totals = {
        scoops: calculateTotal('scoops'),
        toppings: calculateTotal('toppings'),
    };

    const value = { optionCounts, totals, updateItemCount, resetOrder };
    return <OrderDetails.Provider value={value} {...props} />;
}
