import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { todosSlice } from "../modules/todos";

const reducers = combineReducers({
  todos: todosSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
