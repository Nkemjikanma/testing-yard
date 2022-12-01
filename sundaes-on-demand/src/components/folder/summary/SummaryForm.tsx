import React, { useState, useEffect } from 'react';

const SummaryForm: React.FC = () => {
    const [tcChecked, setTCChecked] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<string>('hidden');

    const checkBoxLabel = (
        <span>
            I agree to{' '}
            <span
                className="underline text-red-700"
                onMouseOver={() => {
                    setShowPopup('block');
                }}
                onMouseOut={() => {
                    setShowPopup('hidden');
                }}
            >
                Terms and Condtions
            </span>
        </span>
    );

    const popup = () => {
        <div className={`absolute w-16 h-5 bg-red-800 border border-1 border-black ${showPopup}`}>
            <div className={``}>
                <p>No icecream will actually be delivered</p>
            </div>
        </div>;
    };

    const handleSubmit = () => {};

    return (
        <div className="w-[800px] h-[550px] bg-slate-600 m-5 rounded-md p-5 grid place-items-center">
            <form
                onSubmit={handleSubmit}
                className="w-[90%] h-[90%] flex flex-col"
            >
                <div className="checkbox-holder h-10 p-1 border border-1 flex flex-row justify-center align-middle gap-3">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="terms and conditions"
                        checked={tcChecked}
                        onChange={(e) => {
                            setTCChecked(e.target.checked);
                        }}
                        className="accent-pink-600 w-5 h-5"
                    />
                    <label htmlFor="checkbox">{checkBoxLabel}</label>
                </div>

                <button
                    className="mt-3 bg-slate-800 snap-center text-white px-2 py-1"
                    disabled={!tcChecked}
                >
                    confirm order
                </button>
            </form>
        </div>
    );
};

export default SummaryForm;
