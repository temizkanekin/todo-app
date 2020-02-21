import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableCell, TextField, Typography, Checkbox, InputAdornment, List, ListItem, Button } from '@material-ui/core';
import { Icon } from '@material-ui/core'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import {addTodo, changeTodoStatus, changeAllTodoStatus, openTodoEditDialog} from '../actions'
import EditTodoDialog from '../components/EditTodoDialog'
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

    openTodoEditDialog = (todoId) => {
        this.props.openTodoEditDialog(todoId)
    }
    render() {
        return (
            <React.Fragment>
                <div className="w-1/3 m-auto">
                    <Typography variant="h2" style={{ color: "rgba(175, 47, 47, 0.15)", textAlign: "center" }}>todos</Typography>
                    <Table>
                        <TableBody>
                            <TableRow className="w-full">
                            <TableCell className={classNames("w-full items-center border border-solid border-gray-300",'TableCell')}>
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
                                this.props.todosState.todos.filter(todo => Object.keys(this.props.match.params).length > 0 ? (todo.status === this.props.match.params.status) : todo).map(todo => (
                                    <TableRow className="w-full" key={todo.id}>       
                                        <TableCell className={classNames("w-full items-center border border-solid border-gray-300",'TableCell')}>
                                        <Checkbox checked={todo.status === 'Completed'} onChange={() => this.props.changeTodoStatus(todo.id)}/>
                                        <Typography style={{textDecoration: todo.status === 'Completed' && "line-through"}}>{todo.description}</Typography>
                                        {<Button size="small" onClick={this.openTodoEditDialog.bind(this,todo.id)} style={{minWidth:0,marginRight: 0, marginLeft: 'auto'}}><Icon fontSize="small">edit</Icon></Button>}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        <TableRow className="w-full">
                            <TableCell className={classNames("w-full items-center border border-solid border-gray-300",'TableCell')}>
                                    <List className="ButtonList">
                                        <ListItem button onClick={this.listAllTodos}>All</ListItem>
                                        <ListItem button onClick={this.listActiveTodos}>Active</ListItem>
                                        <ListItem button onClick={this.listCompletedTodos}>Completed</ListItem>
                                    </List>
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </div>
                {this.props && this.props.todosState.todoEditDialogState.open && <EditTodoDialog/>}
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
        },
        openTodoEditDialog: (todoId) => {
            dispatch(openTodoEditDialog(todoId))
        }
    }
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodosView)
);