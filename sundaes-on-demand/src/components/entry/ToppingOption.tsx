import React, { FC } from 'react';

type Props = {
    name: string;
    imagePath: string;
};

const ToppingOption: FC<Props> = ({...props}) => {
    const {name, imagePath} = props
    return (
        <div>
            <img
                src={`http://localhost:3030${imagePath}`}
                alt={`${name} topping`}
            />
        </div>
    );
};

export default ToppingOption;
