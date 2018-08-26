import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/style.css';
import {store} from '../store';
import {CTS, TESTS, TEMPLATES} from "../constants";
import {get} from '../actions'

class ChainBuilder extends Component {
    componentDidMount() {
        store.dispatch(get(TESTS));
        store.dispatch(get(CTS));
        store.dispatch(get(TEMPLATES));
    }

    render() {
        let loadingEntities = Object.entries(this.props).filter(el => (typeof(el[1]) !== 'undefined' && el[1].isFetching)).map(el => el[0])
        if (loadingEntities.length > 0)
            return <h1>Some entitites are loading: {loadingEntities.join(", ")}</h1>;
        else
            return <div className="row">
                <div className="column"><h2>Chains</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        {this.props.CTS.list.map((el, idx) => <tr key={idx}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                        </tr>)}</tbody>
                    </table>
                </div>
                <div className="column"><h2>Tests</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        {this.props.TESTS.list.map((el, idx) => <tr key={idx}>
                            <td>{el.test_id}</td>
                            <td>{el.test_name}</td>
                        </tr>)}</tbody>
                    </table>
                </div>
                <div className="column"><h2>Templates</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Name</th>
                        </tr>
                        {this.props.TEMPLATES.list.map((el, idx) => <tr key={idx}>
                            <td>{el.name}</td>
                        </tr>)}</tbody>
                    </table>
                </div>
            </div>
    }
}

function mapStateToProps(state) {
    return {...state.stork};
}

export default connect(mapStateToProps)(ChainBuilder)