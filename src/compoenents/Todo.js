import React, {useMemo, useEffect, useReducer, useRef} from 'react';
import axios from 'axios';
import { useFormInput } from '../hooks/forms';

const Todo = props => {

// const [todoName, setTodoName] = useState('');
// const [todoList, setTodoList] = useState([]);
// const [submittedTodo, setSubmittedTodo] = useState(null);

// const todoInputRef = useRef();
const todoInput = useFormInput();

const todoListReducer = (state, action) => {
    console.log(state);
    switch(action.type){
        case 'ADD':
            return state.concat(action.payload);
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.payload);
        case 'SET':
            return action.payload;
        default:
            return state
    }
}

const [todoList, dispatch] = useReducer(todoListReducer,[]);

useEffect(() => {
    axios.get('https://practice-66f8f.firebaseio.com/todos.json')
    .then(result => {
            console.log(result);
            const todoData = result.data;
            const todos = [];
            for (const key in todoData){
                console.log(key)
                todos.push({id:key, name: todoData[key].todoName})
            }
           dispatch({type:'SET',payload:todos});
        }
    );
},[]);

// useEffect (() => {
//     if(submittedTodo){
//        dispatch({type:'ADD', payload:submittedTodo});
//     }
// },[submittedTodo]);


// const inputChangeHandler = (event) => {
//     setTodoName(event.target.value)
// };


const todoAddHandler = () =>{
    const todoName = todoInput.value;
    console.log(todoName)
    axios.post('https://practice-66f8f.firebaseio.com/todos.json',{todoName})
    .then(res => {
        setTimeout(() => {
            const todoItem = {id: res.data.name, name:todoName};
            dispatch({type:'ADD', payload:todoItem});
        }, 3000)
       
    })
    .catch(error => {
        console.log(error);
    });
}

const todoRemoveHandler = todoId => {
    axios.delete(`https://practice-66f8f.firebaseio.com/todos/${todoId}.json`)
    .then(res => {
        dispatch({type: 'REMOVE', payload: todoId});
    }).catch(err => {
        console.log(err);
    })
}

    return(
        <React.Fragment>
            <input type="text" placeholder="Todo" 
           onChange={todoInput.onChange} value={todoInput.value}
           style={{backgroundColor: todoInput.validity ? 'transparent' : 'red'}}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            {useMemo(
                () => (
                    <ul>
                {todoList.map(todo =>  ( 
                    <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}
                    >{todo.name} </li>
                ))}
            </ul>
                ),[todoList]
            )}   
        </React.Fragment>

    )
}

export default Todo;