import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableCell, TextField, Typography, Checkbox, InputAdornment } from '@material-ui/core';
import { Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {addTodo, changeTodoStatus} from '../actions'
class TodosView extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>
                <div className="Table">
                    <Typography variant="h2" style={{ color: "rgba(175, 47, 47, 0.15)", textAlign: "center" }}>todos</Typography>
                    <Table>
                        <TableBody>
                            <TableRow className="TableRow">
                            <TableCell className="TableCell">
                            <TextField fullWidth
                                placeholder="What needs to be done"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        // console.log(e.target.value);
                                        this.props.addTodo(e.target.value);
                                        e.target.value=""
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment>
                                            <Icon>expand_more</Icon>
                                      </InputAdornment>
                                    ),
                                    // endAdornment: (
                                    // isDone && <InputAdornment>
                                    //     <Icon>done</Icon>
                                    // </InputAdornment> 
                                    // )
                                  }}
                            />
                            </TableCell>
                        </TableRow>
                            {
                                this.props.todos.map(todo => (
                                    <TableRow className="TableRow" key={todo.id} InputProps={{
                                        
                                    }}>       
                                        <TableCell>
                                        <Checkbox onChange={() => this.props.changeTodoStatus(todo.id)}/>
                                        {todo.description}
                                        {todo.isCompleted && <Icon>done</Icon>}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (newTodo) => {
            dispatch(addTodo(newTodo))
        },
        changeTodoStatus: (todoId) => {
            dispatch(changeTodoStatus(todoId))
        }
    }
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodosView)
);