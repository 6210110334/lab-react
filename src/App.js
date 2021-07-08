import React from 'react';
import './App.css';
import WordCard from './components/WordCard';


const word = ["hello", "school", "songkla","home","popular","easy","english"];
const i = Math.floor(Math.random() * word.length)

function App() {
    return (
        <div>
            <div style=
                {{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <WordCard value={word[i]} />
            </div>
        </div>
    );
}
export default App;
