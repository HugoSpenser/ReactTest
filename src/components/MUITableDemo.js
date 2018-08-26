import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {store} from "../store";
import {get} from "../actions";
import {TESTS} from "../constants";
import '../css/style.css';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const style = {
    position: 'relative',
};

class MUITableDemo extends Component {


    componentDidMount() {
        store.dispatch(get(TESTS));
    }

    render() {
        if (!this.props.isFetching)
            return (
                <Table className='centered-table'>
                    <TableHead>
                        <TableRow>
                            <TableCell className='centered-text' numeric>Id</TableCell>
                            <TableCell className='centered-text'>Имя</TableCell>
                            <TableCell className='centered-text'>АС</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.list.map((row, id) => {
                            return (
                                <TableRow key={id}>
                                    <TableCell numeric>{row.test_id}</TableCell>
                                    <TableCell>{row.test_name}</TableCell>
                                    <TableCell>{row.asystem}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            );
        else return <div className={"center-on-page"}>
            <h1>Загрузка</h1>
            <div className={"spinner"}/>
        </div>
    }
}

MUITableDemo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        test_id: PropTypes.number.isRequired,
        test_name: PropTypes.string.isRequired,
        asystem: PropTypes.string,
    }))
};

function mapStateToProps(state) {
    console.log('Mapping state to props...')
    return {...state.stork.TESTS};
}

export default connect(mapStateToProps)(MUITableDemo)