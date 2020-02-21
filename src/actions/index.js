export const addTodo = ( newTodo ) => {
    return {
        type: 'ADD_TODO',
        payload: newTodo
    }
}

export const changeTodoStatus = ( todoId ) => {
    return {
        type: 'CHANGE_TODO_STATUS',
        payload: todoId
    }
}

export const changeAllTodoStatus = () => {
    return {
        type: 'CHANGE_ALL_TODO_STATUS',
    }
}

export const openTodoEditDialog = ( todoId ) => {
    return {
        type: 'OPEN_TODO_EDIT_DIALOG',
        payload: todoId
    }
}
export const closeTodoEditDialog = ( ) => {
    return {
        type: 'CLOSE_TODO_EDIT_DIALOG',
    }
}

export const handleUpdateTodoDescription = (description) => {
    return {
        type: 'UPDATE_TODO_DESCRIPTION',
        payload: description
    }
}