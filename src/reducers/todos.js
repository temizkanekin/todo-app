import {todoList, status} from '../@fake-db';

const initialState = {
    todos: todoList,
    todoEditDialogState:{
        open:false,
        id:null
    }
}

const todosState = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            state.todos.push({
                id: state.todos.length+1,
                status: status[0],
                description: action.payload
            })
            return {...state}
            
        case 'CHANGE_TODO_STATUS':
            const selectedTodo = state.todos.filter(st => st.id === action.payload)[0]
            selectedTodo.status = selectedTodo.status === 'Active' ? 'Completed' : 'Active'
            return {...state}

        case 'CHANGE_ALL_TODO_STATUS':
            state.todos.forEach(todo => todo.status = todo.status === 'Active' ? 'Completed' : 'Active')
            return {...state}
        
        case 'OPEN_TODO_EDIT_DIALOG':
            return {
                ...state,
                todoEditDialogState: {
                    open:true,
                    id:action.payload
                }
            }
        case 'CLOSE_TODO_EDIT_DIALOG':
            return {
                ...state,
                todoEditDialogState: {
                    open:false,
                    id:null
                }
            }
        case 'UPDATE_TODO_DESCRIPTION':
            state.todos.filter(todo => todo.id === state.todoEditDialogState.id)[0].description = action.payload
            return {
                ...state
            }

        default:
            return state;
    }
}
export default todosState;