import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import MainPage from "./main/MainPage";
import Header from "./header/Header";
import {store} from "./bll/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Header/>
                    <MainPage/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
