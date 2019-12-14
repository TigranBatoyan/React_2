import React, { useContext, useReducer } from 'react';
import Form from './components/form/form';
import Card from './components/card/card';
import Context from './context/context';
import reducer from './reducer/reducer'
import './App2.css';

function App2() {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState)
    const { events } = state;

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="App">
                <div className="form-container">
                    <Form />
                </div>

                <div className="todos">
                    {events.map((event) => {
                        return (
                            <Card
                                key={event.id}
                                data={event}
                            />
                        )
                    })}
                </div>
            </div>
        </Context.Provider>
    );
}

export default App2;