import React from 'react';
import { useOrderDetails } from '../../contexts/OrderDetails';

interface Props {
    name: string;
    imagePath: string;
}

const ScoopOption = (props: Props) => {
    const { updateItemCount } = useOrderDetails();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        updateItemCount(name, parseInt(e.target.value), 'scopops');
    return (
        <div>
            <img
                className="w-[75%]"
                alt={`${props.name} scoop`}
                src={`http://localhost:3030${props.imagePath}`}
            />

            <form className="mt-4">
                <label className="text-left">{name}</label>
                <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default ScoopOption;
