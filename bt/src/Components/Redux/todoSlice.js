import { createSlice } from "@reduxjs/toolkit";

// export const getTodosAsync =createAsyncThunk(
//     'todo/getTodosAsync',
//     async () => {
//         const response = await fetch('http://localhost:7000/todos ');
//         if(response.ok) {
//             const todos= await response.json();
//             return {todos};
//         }
//     }
// )
// export const addTodoAsync = createAsyncThunk(
//     'todos/addTodoAsync', 
//     async(payload) =>{
//         const response = await fetch('http://localhost:7000/todos ', {
//             method: 'POST',
//             headers:{
//                 'Content-Type' :'application/json',
//             },
//             body : JSON.stringify({title:payload.title})
//         });
//         if(response.ok){
//             const todo = await response.json();
//             return {todo};
//         } 
    
//     })

const todoSlice = createSlice({
    name : 'todos',
    initialState: [],
    reducers: {
        addTodo :(state,action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
              currentTodo.completed = !currentTodo.completed;
            }
          }

    },
    // extraReducers :{
    //     [getTodosAsync.pending] : (state,action) => {
    //         console.log('fetching data ....');
    //     },
    //     [getTodosAsync.fulfilled] : (state,action) => {
    //         console.log('fetching data successfully !');
    //     },
    //     [addTodoAsync.fulfilled] : (state,action) => {
    //         state.push(action.payload.todo)
    //     },
    // }
});
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;