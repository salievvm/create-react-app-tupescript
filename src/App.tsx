import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello, TSX
                </p>
            </header>
        </div>
    );
}

export default App;
