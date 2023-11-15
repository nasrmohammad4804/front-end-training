import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));


const todoReducer = (state=[],action) => {

  let newState = [...state];

  switch(action.type){

    case 'todo/todoAdded':
      newState.push(action.payload);
      break;

      case 'todo/todoStatusChanged':
        let changedStatusTodoIndex = newState.findIndex(item => item.id===action.payload.id);
        newState[changedStatusTodoIndex].completed=!newState[changedStatusTodoIndex].completed;
        break;

      case 'todo/todoRemoved':
        let removedTodoIndex = newState.findIndex(item => item.id===action.payload.id);
         newState.splice(removedTodoIndex,1);
        break;

      case 'todo/todoColorChanged':
        let changedColorTodoIndex = newState.findIndex(item => item.id===action.payload.id);
        newState[changedColorTodoIndex].color = action.payload.color;
  }
  return newState;
}

const reducers = {
  todos: todoReducer,
  // filter:{
  //   status:'',
  //   color:''
  // }
}

const store  =createStore(combineReducers(reducers));

root.render(

    <Provider  store={store}>
    <App />
    </Provider>

);

