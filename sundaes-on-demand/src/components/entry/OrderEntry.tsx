import Options from './Options';

type Props = {};

const OrderEntry = () => {
    return (
        <div>
            <Options optionType="scoops" />
            <Options optionType="toppings" />
        </div>
    );
};
export default OrderEntry;
