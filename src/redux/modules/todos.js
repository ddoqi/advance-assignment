import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async ({ title }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3001/todos", {
        title,
        isDone: false,
        id: Date.now(),
      });
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      return fulfillWithValue(id);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const __toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async ({ id, isDone }, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        isDone: !isDone,
      });
      const res = await axios.get("http://localhost:3001/todos");
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postTodos.fulfilled]: (state, action) => {
      let newTodos = [...state.todos, action.payload];
      state.todos = newTodos;
      state.isLoading = false;
    },
    [__postTodos.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [__deleteTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      let newTodos = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newTodos;
      state.isLoading = false;
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [__toggleTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__toggleTodo.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
