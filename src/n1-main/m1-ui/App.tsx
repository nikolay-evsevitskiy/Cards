import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import RoutesFunk from "./routes/RoutesFunk";
import Header from "./header/Header";
import {store} from "../m2-bll/store";


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                    <RoutesFunk/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
