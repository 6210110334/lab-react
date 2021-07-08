import React from 'react';
import './App.css';
import WordCard from './components/WordCard';


const word = "Hello";

function App() {
    return (
        <div
            style=
            {{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <WordCard value={word} />
        </div>
    );
}
export default App;
