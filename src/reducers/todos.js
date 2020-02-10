import {todoList, status} from '../@fake-db';

const todosState = (state = todoList, action) => {
    switch(action.type){
        case 'ADD_TODO':
            state.push({
                id: state.length+1,
                status: status[0],
                description: action.payload
            })
            return [...state]
            
        case 'CHANGE_TODO_STATUS':
            const selectedTodo = state.filter(st => st.id === action.payload)[0]
            selectedTodo.status = selectedTodo.status === 'Active' ? 'Completed' : 'Active'
            return [...state]
        default:
            return state;
    }
}
export default todosState;