import axios from "axios";
import { addTodoAction, fetchAllTodo, removeTodoAction } from "./actions/rootAction";

// the redux thunk is the function which accepts the dispatch and getstate and 
// and then it can do the dispatching asynchroniously
// perform looping and so on . 
export const thunkCreatorsFunctionFetchingAllData = () => {
    // this is the actual redux which is being returned 
  return async function getAllDataThunk(dispatch, getState) {
    try {
      const res = await axios.get("http://localhost:5000/operatorsDb");
        dispatch(fetchAllTodo(res.data));
        console.log(getState());
    } catch (err) {
      console.log(err);
    }
  };
};

export const DataPostingInsideJsonServer = (data) => {
  // this is the actual redux which is being returned when the action creator is created 
//   and it is passed inside in store.dispatch(thunk);
  return async function postDataThunk(dispatch, getState) {
    try {
      const res = await axios.post("http://localhost:5000/operatorsDb", data);
      dispatch(addTodoAction(res.data));
      console.log(getState());
    } catch (err) {
      console.log(err);
    }
  };
};


export const DataDeletingInsideJsonServer = (id) => {
  // this is the actual redux which is being returned when the action creator is created
  //   and it is passed inside in store.dispatch(thunk);
  return async function deleteDataThunk(dispatch, getState) {
    try {
      const res = await axios.delete(`http://localhost:5000/operatorsDb/${id}`);
      dispatch(removeTodoAction(id));
      console.log(getState());
    } catch (err) {
      console.log(err);
    }
  };
};


export const DataUpdatingInsideJsonServer = ({id, data}) => {
  // this is the actual redux which is being returned when the action creator is created
  //   and it is passed inside in store.dispatch(thunk);
  return async function updateDataThunk(dispatch, getState) {
    try {
      console.log(id);
      dispatch(removeTodoAction(id));
      const res = await axios.put(
        `http://localhost:5000/operatorsDb/${id}`, data);
      dispatch(addTodoAction(data));
      console.log(getState());
    } catch (err) {
      console.log(err);
    }
  };
};





