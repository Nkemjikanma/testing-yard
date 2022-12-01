import { useState } from 'react';

// components
import SummaryForm from './components/folder/summary/SummaryForm';

function App() {
    return (
        <div
            className="App w-full overflow-hidden bg-slate-400 flex flex-row justify-center"
            id="app-id"
        >
            <SummaryForm />
        </div>
    );
}

export default App;
