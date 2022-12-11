import React, { useState, useEffect } from 'react';

const SummaryForm: React.FC = () => {
    const [tcChecked, setTCChecked] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<string>('hidden');

    // const popup = () => {
    //  <div className={`absolute w-16 h-5 bg-green-800 ${showPopup} z-10`}>
    //     <div>
    //         <p>No icecream will actually be delivered</p>
    //     </div>
    // </div>
    // };

    const checkBoxLabel = (
        <span className="">
            I agree to{' '}
            <span className="text-red-700 hover:underline transition-all group">
                Terms and Condtions
                <div
                    className={`absolute w-44 h-50 bg-slate-800 right-0 -top-1 opacity-0 group-hover:opacity-100 text-center rounded-lg`}
                    data-testid='popup-div'
                >
                    <div>
                        <p>No icecream will actually be delivered</p>
                    </div>
                </div>
            </span>
        </span>
    );

    const handleSubmit = () => {};

    return (
        <div className=" w-[800px] h-[550px] bg-slate-600 m-5 rounded-md p-5 grid place-items-center">
            <form
                onSubmit={handleSubmit}
                className=" w-[90%] h-[90%] flex flex-col relative"

            >
                <div className="checkbox-holder h-10 p-1 flex flex-row justify-center align-middle gap-3">
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
