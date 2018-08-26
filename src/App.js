import React, {Component} from 'react';
import './App.css';
import SimpleTable from './components/SimpleTable.js'
import Provider from "react-redux/src/components/Provider";
import {store} from "./store";
import {Route, HashRouter} from 'react-router-dom';
import ChainBuilder from "./components/ChainBuilder";
import MUITableDemo from "./components/MUITableDemo";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Route path="/table" component={SimpleTable}/>
                        <Route path="/chains" component={ChainBuilder}/>
                        <Route path="/mui" component={MUITableDemo}/>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
