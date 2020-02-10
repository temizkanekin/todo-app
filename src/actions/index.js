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