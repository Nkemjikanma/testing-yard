import React from 'react';

type Props = {
    name: string;
    imagePath: string;
};

const ScoopOption = (props: Props) => {
    return (
        <div>
            <img
            className=''
                alt={`${props.name} scoop`}
                src={`http://localhost:3030/${props.imagePath}`}
            />
        </div>
    );
};

export default ScoopOption;
