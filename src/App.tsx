import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/NavBar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {
    

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container ph2">
                <Switch>
                    <Route component={TodosPage} path='/' exact />
                    <Route component={AboutPage} path='/about' />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
