import React, {Component} from 'react'
import {store} from '../store'
import {addRow, clickBtn} from '../actions';
import {connect} from 'react-redux'

class SimpleTable extends Component {
    render() {
        return <div>
            <table>
                <tbody>
                {this.props.counters.map((row, idx) => <TableRow row={row} idx={idx}/>)}
                </tbody>
            </table>
            <input type='button' value='Add new row' onClick={SimpleTable.addNewRow.bind(this)}/></div>;
    }

    static addNewRow(event) {
        store.dispatch(addRow(event.shiftKey));
    }

}

class TableRow extends Component {
    render() {
        return <tr>
            <td><input type='button' onClick={this.clickHandler.bind(this)}/></td>
            <td>{this.props.row}</td>
        </tr>;
    }

    clickHandler(event) {
        store.dispatch(clickBtn(this.props.idx, event.shiftKey))
    }
}

const mapStateToProps = (state) => {
    return state.simpletable;
};

export default connect(mapStateToProps)(SimpleTable)