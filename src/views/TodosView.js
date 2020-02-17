import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableCell, TextField, Typography, Checkbox, InputAdornment, List, ListItem } from '@material-ui/core';
import { Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {addTodo, changeTodoStatus, changeAllTodoStatus} from '../actions'
class TodosView extends Component {
    state = {
    }

    listActiveTodos = () => {
        this.props.history.push('/Active')
    }
    listAllTodos = () => {
        this.props.history.push('/')
    }
    listCompletedTodos = () => {
        this.props.history.push('/Completed')
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
                                        this.props.addTodo(e.target.value);
                                        e.target.value=""
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment>
                                            <Icon onClick={() => this.props.changeAllTodoStatus()}>expand_more</Icon>
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
                                this.props.todos.filter(todo => Object.keys(this.props.match.params).length > 0 ? (todo.status === this.props.match.params.status) : todo).map(todo => (
                                    <TableRow className="TableRow" key={todo.id}>       
                                        <TableCell>
                                        <Checkbox checked={todo.status === 'Completed'} onChange={() => this.props.changeTodoStatus(todo.id)}/>
                                        {todo.description}
                                        {todo.status === 'Completed' && <Icon>done</Icon>}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        <TableRow className="TableRow">
                            <TableCell className="TableCell">
                                    <List style={{display:'flex'}}>
                                        <ListItem button onClick={this.listAllTodos}>All</ListItem>
                                        <ListItem button onClick={this.listActiveTodos}>Active</ListItem>
                                        <ListItem button onClick={this.listCompletedTodos}>Completed</ListItem>
                                    </List>
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
//TODO bindActionCreators
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: (newTodo) => {
            dispatch(addTodo(newTodo))
        },
        changeTodoStatus: (todoId) => {
            dispatch(changeTodoStatus(todoId))
        },
        changeAllTodoStatus: () => {
            dispatch(changeAllTodoStatus())
        }
    }
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodosView)
);