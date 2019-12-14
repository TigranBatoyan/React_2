import React, {useEffect, useReducer, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from "./countries";
import Context from "./context/context";
import {getCountries, getAirlines} from "../Api";
import reducer from './reducer/reducer'

const App3 = () => {
    const context = useContext(Context)
    const [state, dispatch] = useReducer(reducer, context)
    useEffect(() => {
        getCountries().then(data =>dispatch({type:'country', payload:data}))
        getAirlines().then(data =>dispatch({type:'airline', payload:data}))
    }, [])

    return (
        <Context.Provider value={{state,dispatch}}>
            <div>
                <Country/>
            </div>
        </Context.Provider>
    )
}
export default App3