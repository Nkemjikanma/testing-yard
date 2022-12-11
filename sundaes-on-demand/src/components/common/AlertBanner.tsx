import React, { FC } from 'react';

type Props = {
    message: string;
    variant: string;
};

const AlertBanner: FC<Props> = ({ ...props }) => {
    // * if message is truthy
    const {
        message = 'An unexpected error occured. Please try again later.',
        variant = 'danger',
    } = props;
    return <div className="bg-red-500">{message}</div>;
};

export default AlertBanner;
