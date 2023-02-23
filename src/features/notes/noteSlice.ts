import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  text: string;
  complete: boolean;
}

interface InitialState {
  todoList: Note[];
  lastId: number;
}

const initialState: InitialState = {
  todoList: [
    {
      id: 1,
      text: "hi",
      complete: false,
    },
    {
      id: 2,
      text: "hie",
      complete: false,
    },
  ],
  lastId: 2,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const lastId = state.lastId;
      const newTodo = {
        id: lastId + 1,
        text: action.payload,
        complete: false,
      };
      state.todoList.push(newTodo);
      state.lastId = newTodo.id;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload);
      index !== -1 && state.todoList.splice(index, 1);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
        const index = state.todoList.findIndex((todo) => todo.id === action.payload);
        index !== -1 ? state.todoList[index].complete=true:null;
    },
  },
});

export default noteSlice.reducer;
export const { addTodo, removeTodo, completeTodo } = noteSlice.actions;
