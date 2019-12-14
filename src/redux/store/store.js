import React from 'react';
import {createStore} from 'redux';
import {addTodo} from '../actions/todosActions';
import reducers from '../reducers/reducers'

const store = createStore(reducers) 
console.log(store.getState())

store.dispatch(addTodo(1))




store.subscribe(()=>{
    console.log(store.getState())
})

