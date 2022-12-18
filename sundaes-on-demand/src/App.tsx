import { useState } from 'react';
import OrderEntry from './components/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

// components
import SummaryForm from './components/summary/SummaryForm';

function App() {
    return (
        <div
            className="App w-full overflow-hidden bg-slate-400 flex flex-row justify-center"
            id="app-id"
        >
            <OrderDetailsProvider>
                {/* Summary page and entry page need a provider */}
                <OrderEntry />
            </OrderDetailsProvider>
            {/* confirmation page does not need provider */}
        </div>
    );
}

export default App;
