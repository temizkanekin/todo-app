import React,{Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Dialog,DialogContent,TextField, DialogActions, Button} from '@material-ui/core';
import * as Actions from '../actions'
import { bindActionCreators } from 'redux';

class EditTodoDialog extends Component {

    state = {
        textFieldValue : ""
    }
    componentDidMount() {
        const { todos, todoEditDialogState} = this.props.todosState
        this.setState({textFieldValue:todos.filter(todo => todo.id === todoEditDialogState.id)[0].description})
    }
    closeTodoEditDialog = () => {
        // console.log(document.getElementById("textField").value)
        this.props.closeTodoEditDialog()
    }

    updateTodoDescriptionState = (e) => {
        this.setState({textFieldValue:e.target.value})
    }

    handleUpdateTodoDescription = (description) => {
        this.props.handleUpdateTodoDescription(description)
        this.props.closeTodoEditDialog()
    }

    render () {
        const { textFieldValue } = this.state
        const { todoEditDialogState} = this.props.todosState
        return (
            <Dialog open={todoEditDialogState.open} fullWidth maxWidth="xs" onClose={this.closeTodoEditDialog}>
                <DialogContent>
                    <TextField fullWidth id="textField" value={textFieldValue} onChange={this.updateTodoDescriptionState}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleUpdateTodoDescription.bind(this,textFieldValue)}>Update                
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        closeTodoEditDialog: Actions.closeTodoEditDialog,
        handleUpdateTodoDescription: Actions.handleUpdateTodoDescription
    }, dispatch)
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(EditTodoDialog)
);